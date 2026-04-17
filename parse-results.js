#!/usr/bin/env node

/**
 * Rich results parser for the Performance Testing Framework.
 *
 * Produces multi-dimensional markdown reports with:
 * - Full results table (Platform | Method | Win | Runtime | metrics)
 * - Platform overhead comparisons (Container vs Workspace)
 * - Pairwise runtime delta tables
 * - ASCII bar chart visualizations
 * - Runtime rankings
 *
 * Usage:
 *   node parse-results.js <results-dir-or-suite-summary.json> [options]
 *
 * Options:
 *   --output, -o <path>   Write markdown report to file (default: stdout only)
 *   --title <text>        Report title (default: auto-generated)
 *   --runtime-labels <json>  JSON map of version→label, e.g. '{"42.138.103.4":"RT42"}'
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Command } from 'commander';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const program = new Command();
program
    .argument('<source>', 'Results directory or suite-summary JSON file')
    .option('-o, --output <path>', 'Write markdown report to this file')
    .option('--title <text>', 'Report title')
    .option('--runtime-labels <json>', 'JSON map of version→label, e.g. \'{"42.138.103.4":"RT42"}\'')
    .parse();

const opts = program.opts();
const source = path.resolve(program.args[0]);

let runtimeLabels = {};
if (opts.runtimeLabels) {
    try { runtimeLabels = JSON.parse(opts.runtimeLabels); }
    catch { console.error('Invalid --runtime-labels JSON'); process.exit(1); }
}

let results;
try {
    results = loadResults(source);
} catch (err) {
    if (err.code === 'ENOENT') {
        console.error(`Path not found: ${source}`);
    } else {
        console.error(`Failed to load results: ${err.message}`);
    }
    process.exit(1);
}
if (!results.length) {
    console.error(`No valid results found in ${path.basename(source)}. Expected JSON files with a "totalMs" field.`);
    process.exit(1);
}

const report = generateReport(results);
console.log(report);

if (opts.output) {
    const outPath = path.resolve(opts.output);
    fs.writeFileSync(outPath, report);
    console.log(`\nReport written to ${outPath}`);
}

// ---------------------------------------------------------------------------

function loadResults(src) {
    const stat = fs.statSync(src);

    if (stat.isFile()) {
        const raw = JSON.parse(fs.readFileSync(src, 'utf-8'));
        const arr = Array.isArray(raw) ? raw : raw.tests || raw.results || [raw];
        return arr.filter(r => r && r.totalMs != null && !r.error);
    }

    if (stat.isDirectory()) {
        const files = fs.readdirSync(src).filter(f => f.endsWith('.json') && !f.startsWith('suite'));
        return files
            .map(f => {
                try { return JSON.parse(fs.readFileSync(path.join(src, f), 'utf-8')); }
                catch { return null; }
            })
            .filter(r => r && r.totalMs != null);
    }

    return [];
}

function smartSort(vals) {
    return [...vals].sort((a, b) => {
        const na = Number(a), nb = Number(b);
        if (!isNaN(na) && !isNaN(nb)) return na - nb;
        return String(a).localeCompare(String(b));
    });
}

function stats(vals) {
    const n = vals.length;
    if (n === 0) return { mean: null, sd: null, n: 0 };

    const mean = vals.reduce((a, b) => a + b, 0) / n;
    const sd = n > 1 ? Math.sqrt(vals.reduce((s, v) => s + (v - mean) ** 2, 0) / (n - 1)) : 0;

    return { mean: Math.round(mean), sd: Math.round(sd), n };
}

/** Format as "value ±sd" */
function fmt(s) {
    if (s.mean == null) return '-';
    if (s.n === 1) return `${s.mean}`;
    return `${s.mean} ±${s.sd}`;
}

function getField(r, field) {
    if (field === 'runtime') return r.config?.runtime || r.runtime || 'unknown';
    if (field === 'env') return (r.config?.env || r.env || 'unknown').replace('openfin-', '');
    if (field === 'mechanism') return r.config?.mechanism || r.mechanism || 'createWindow';
    if (field === 'content') return r.config?.content || r.content || 'blank';
    if (field === 'count') return r.config?.count || r.count || '?';
    if (field === 'affinity') {
        const gs = r.config?.affinityGroupSize;
        if (gs && gs > 0) return `grouped-${gs}`;
        return r.config?.affinity || r.affinity || 'different';
    }
    if (field === 'viewsPerWindow') return r.config?.viewsPerWindow || 1;
    return r.config?.[field] || r[field] || '?';
}

/** Get runtime label: user-provided or auto-shortened. */
function rtLabel(version) {
    if (runtimeLabels[version]) return runtimeLabels[version];
    return version;
}

function detectVaryingFields(results) {
    const candidates = ['env', 'runtime', 'mechanism', 'content', 'count', 'affinity', 'viewsPerWindow'];
    const varying = [];
    for (const field of candidates) {
        const values = new Set(results.map(r => String(getField(r, field))));
        if (values.size > 1) varying.push(field);
    }
    return varying;
}

/** Aggregate results into a lookup: key(env, mechanism, count, runtime) → { runs[], stats } */
function buildLookup(results) {
    const map = new Map();
    for (const r of results) {
        const key = [getField(r, 'env'), getField(r, 'mechanism'), getField(r, 'count'), getField(r, 'runtime'), getField(r, 'content')].join('|');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(r);
    }

    const lookup = new Map();
    for (const [key, runs] of map) {
        lookup.set(key, {
            runs,
            total: stats(runs.map(r => r.totalMs)),
            api: stats(runs.map(r => r.apiReturnMs ?? r.snapshotMs).filter(v => v != null)),
            layout: stats(runs.map(r => r.allLayoutReadyMs).filter(v => v != null)),
            view: stats(runs.map(r => r.allViewLoadMs).filter(v => v != null)),
        });
    }
    return lookup;
}

function lookupKey(env, mechanism, count, runtime, content) {
    return [env, mechanism, count, runtime, content].join('|');
}

function getAgg(lookup, env, mechanism, count, runtime, content) {
    return lookup.get(lookupKey(env, mechanism, count, runtime, content));
}

// ---------------------------------------------------------------------------

function generateReport(results) {
    const varying = detectVaryingFields(results);
    const envs = smartSort([...new Set(results.map(r => getField(r, 'env')))]);
    const runtimes = smartSort([...new Set(results.map(r => getField(r, 'runtime')))]);
    const mechanisms = smartSort([...new Set(results.map(r => getField(r, 'mechanism')))]);
    const counts = smartSort([...new Set(results.map(r => String(getField(r, 'count'))))]);
    const contents = smartSort([...new Set(results.map(r => getField(r, 'content')))]);

    const lookup = buildLookup(results);
    const lines = [];

    const title = opts.title || autoTitle(envs, runtimes);
    lines.push(`# ${title}`);
    lines.push('');
    lines.push(`Generated: ${new Date().toISOString().split('T')[0]}`);
    lines.push('');

    // --- Test Configuration ---
    lines.push('## Test Configuration');
    lines.push('');
    lines.push('| Parameter | Value |');
    lines.push('|-----------|-------|');
    lines.push(`| Framework | Performance Testing Framework (PTF) |`);
    lines.push(`| Platforms | ${envs.join(', ')} |`);
    lines.push(`| Methods | ${mechanisms.join(', ')} |`);
    lines.push(`| Window counts | ${counts.join(', ')} |`);
    lines.push(`| View content | ${contents.join(', ')} |`);
    const runsPerCombo = inferRepeats(results, ['env', 'runtime', 'mechanism', 'count', 'content']);
    lines.push(`| Runs per config | ${runsPerCombo}, interleaved & randomized |`);
    lines.push('');

    if (runtimes.length > 1 && Object.keys(runtimeLabels).length > 0) {
        lines.push('### Runtime Versions');
        lines.push('');
        for (const rt of runtimes) {
            const label = runtimeLabels[rt];
            if (label) lines.push(`- **${label}** = \`${rt}\``);
            else lines.push(`- \`${rt}\``);
        }
        lines.push('');
    }

    lines.push(`> Values shown as \`avg ±stddev\` (ms).`);
    lines.push('');

    // --- Full Results Table ---
    lines.push('## Full Results');
    lines.push('');
    lines.push('| Platform | Method | Win | Runtime | API Return | Layout Ready | View Load | Total | Runs |');
    lines.push('|----------|--------|----:|---------|----------:|------------:|---------:|------:|-----:|');

    for (const env of envs) {
        for (const mech of mechanisms) {
            for (const count of counts) {
                for (const rt of runtimes) {
                    for (const content of contents) {
                        const agg = getAgg(lookup, env, mech, Number(count) || count, rt, content);
                        if (!agg) continue;
                        const contentSuffix = contents.length > 1 ? ` (${content})` : '';
                        lines.push(`| ${env} | ${mech} | ${count} | ${rtLabel(rt)}${contentSuffix} | ${fmt(agg.api)} | ${fmt(agg.layout)} | ${fmt(agg.view)} | ${fmt(agg.total)} | ${agg.total.n} |`);
                    }
                }
            }
        }
    }

    lines.push('');
    lines.push('---');
    lines.push('');

    // --- Platform overhead (Container vs Workspace) ---
    if (envs.includes('container') && envs.includes('workspace')) {
        for (const mech of mechanisms) {
            const overheadRows = [];
            for (const count of counts) {
                for (const rt of runtimes) {
                    for (const content of contents) {
                        const cAgg = getAgg(lookup, 'container', mech, Number(count) || count, rt, content);
                        const wAgg = getAgg(lookup, 'workspace', mech, Number(count) || count, rt, content);
                        if (!cAgg || !wAgg) continue;
                        const diff = wAgg.total.mean - cAgg.total.mean;
                        const pct = cAgg.total.mean ? Math.round((diff / cAgg.total.mean) * 100) : 0;
                        const sign = diff >= 0 ? '+' : '';
                        const contentSuffix = contents.length > 1 ? ` (${content})` : '';
                        overheadRows.push(`| ${count} | ${rtLabel(rt)}${contentSuffix} | ${cAgg.total.mean} | ${wAgg.total.mean} | ${sign}${diff} | ${sign}${pct}% |`);
                    }
                }
            }

            if (overheadRows.length > 0) {
                lines.push(`## Container vs Workspace Overhead: ${mech}`);
                lines.push('');
                lines.push('| Win | Runtime | Container | Workspace | Overhead | % |');
                lines.push('|----:|---------|----------:|----------:|---------:|---:|');
                lines.push(...overheadRows);
                lines.push('');
                lines.push('---');
                lines.push('');
            }
        }
    }

    // --- Pairwise Runtime Comparisons ---
    if (runtimes.length >= 2) {
        const pairs = [];
        for (let i = 0; i < runtimes.length; i++) {
            for (let j = i + 1; j < runtimes.length; j++) {
                pairs.push([runtimes[i], runtimes[j]]);
            }
        }

        for (const [rtA, rtB] of pairs) {
            const pairSections = [];
            for (const env of envs) {
                const rowLines = [];
                for (const mech of mechanisms) {
                    for (const count of counts) {
                        for (const content of contents) {
                            const aggA = getAgg(lookup, env, mech, Number(count) || count, rtA, content);
                            const aggB = getAgg(lookup, env, mech, Number(count) || count, rtB, content);
                            if (!aggA || !aggB) continue;
                            const diff = aggB.total.mean - aggA.total.mean;
                            const pct = aggA.total.mean ? Math.round((diff / aggA.total.mean) * 100) : 0;
                            const sign = diff >= 0 ? '+' : '';
                            const contentSuffix = contents.length > 1 ? ` (${content})` : '';
                            rowLines.push(`| ${mech}${contentSuffix} | ${count} | ${aggA.total.mean} | ${aggB.total.mean} | ${sign}${diff} | ${sign}${pct}% |`);
                        }
                    }
                }
                if (rowLines.length > 0) pairSections.push({ env, rowLines });
            }

            if (pairSections.length === 0) continue;

            lines.push(`## ${rtLabel(rtA)} vs ${rtLabel(rtB)}`);
            lines.push('');

            for (const { env, rowLines } of pairSections) {
                if (envs.length > 1) {
                    lines.push(`### ${env}`);
                    lines.push('');
                }
                lines.push(`| Method | Win | ${rtLabel(rtA)} Total | ${rtLabel(rtB)} Total | Diff | % |`);
                lines.push('|--------|----:|----------:|--------------:|-----:|---:|');
                lines.push(...rowLines);
                lines.push('');
            }

            lines.push('---');
            lines.push('');
        }
    }

    // --- Visual Comparison: bar charts for largest window count ---
    const maxCount = counts[counts.length - 1];
    if (runtimes.length >= 2 || envs.length >= 2) {
        lines.push(`## Visual Comparison: ${maxCount} Windows Total Time`);
        lines.push('');

        for (const mech of mechanisms) {
            for (const content of contents) {
                const sectionLabel = contents.length > 1 ? `${mech} — ${maxCount} Windows (${content})` : `${mech} — ${maxCount} Windows`;
                lines.push(`### ${sectionLabel}`);
                lines.push('');

                const bars = [];
                for (const env of envs) {
                    for (const rt of runtimes) {
                        const agg = getAgg(lookup, env, mech, Number(maxCount) || maxCount, rt, content);
                        if (!agg) continue;
                        bars.push({ label: `${env} ${rtLabel(rt)}`, mean: agg.total.mean, sd: agg.total.sd });
                    }
                }

                if (bars.length > 0) {
                    const maxVal = Math.max(...bars.map(b => b.mean));
                    const maxLabelLen = Math.max(...bars.map(b => b.label.length));
                    const barWidth = 50;

                    lines.push('```');
                    for (const bar of bars) {
                        const len = Math.round((bar.mean / maxVal) * barWidth);
                        const blocks = '█'.repeat(len);
                        const label = bar.label.padEnd(maxLabelLen);
                        lines.push(`${label}  ${blocks} ${bar.mean}ms ±${bar.sd}`);
                    }
                    lines.push('```');
                    lines.push('');
                }
            }
        }

        lines.push('---');
        lines.push('');
    }

    // --- Runtime Ranking ---
    if (runtimes.length >= 3) {
        lines.push(`## Runtime Ranking by Total Time (${maxCount} windows)`);
        lines.push('');

        for (const env of envs) {
            for (const mech of mechanisms) {
                for (const content of contents) {
                    const sectionLabel = envs.length > 1
                        ? `### ${env} / ${mech}${contents.length > 1 ? ` / ${content}` : ''}`
                        : `### ${mech}${contents.length > 1 ? ` / ${content}` : ''}`;
                    lines.push(sectionLabel);
                    lines.push('');

                    const ranked = [];
                    for (const rt of runtimes) {
                        const agg = getAgg(lookup, env, mech, Number(maxCount) || maxCount, rt, content);
                        if (!agg) continue;
                        ranked.push({ rt, mean: agg.total.mean, sd: agg.total.sd });
                    }

                    ranked.sort((a, b) => a.mean - b.mean);
                    const slowest = ranked[ranked.length - 1]?.mean || 1;

                    ranked.forEach((r, i) => {
                        const isLast = i === ranked.length - 1;
                        const pctVsSlowest = Math.round(((r.mean - slowest) / slowest) * 100);
                        const suffix = isLast ? '(slowest)' : `(${pctVsSlowest}% vs slowest)`;
                        lines.push(`${i + 1}. **${rtLabel(r.rt)}** — ${r.mean} ±${r.sd} ms ${suffix}`);
                    });
                    lines.push('');
                }
            }
        }

        lines.push('---');
        lines.push('');
    }

    // --- Key Observations placeholder ---
    lines.push('## Key Observations');
    lines.push('');

    return lines.join('\n');
}

function inferRepeats(results, allFields) {
    const combos = new Map();
    for (const r of results) {
        const key = allFields.map(f => `${f}=${getField(r, f)}`).join('|');
        combos.set(key, (combos.get(key) || 0) + 1);
    }
    const counts = [...combos.values()];
    if (counts.length === 0) return 1;
    return Math.round(counts.reduce((a, b) => a + b, 0) / counts.length);
}

function autoTitle(envs, runtimes) {
    const parts = [];
    if (runtimes.length > 1) parts.push(`${runtimes.length}-Runtime Comparison`);
    else parts.push('Performance Results');
    if (envs.length > 1) parts.push(envs.join(' vs '));
    else if (envs.length === 1) parts.push(envs[0]);
    return `PTF ${parts.join(': ')}`;
}
