#!/usr/bin/env node

/**
 * Suite runner: executes a series of tests defined in a JSON config file.
 * Each test is run in a fresh process (app starts, runs test, quits).
 * After all tests, prints a summary comparison table.
 *
 * Usage:
 *   node run-suite.js suites/quick-smoke.json
 *   node run-suite.js suites/20-windows-iframes-20.json --port 3001
 */

import { Command } from 'commander';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const program = new Command();
program
    .argument('<suite-file>', 'Path to suite JSON config')
    .option('--port <port>', 'Base HTTP server port', '3001')
    .option('--results-dir <dir>', 'Directory for result files', './results')
    .parse();

const suiteFile = program.args[0];
const opts = program.opts();
const basePort = parseInt(opts.port, 10);

const suite = JSON.parse(fs.readFileSync(path.resolve(suiteFile), 'utf-8'));
const tests = suite.tests || suite;

console.log(`\n╔══════════════════════════════════════════════════════════════╗`);
console.log(`║  Performance Test Suite                                      ║`);
console.log(`║  ${String(tests.length).padEnd(3)} tests queued                                           ║`);
console.log(`╚══════════════════════════════════════════════════════════════╝\n`);

const suiteStartTime = Date.now();
const allResults = [];

for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const testNum = i + 1;

    const label = `${test.env} | ${test.mechanism || 'createWindow'} | ${test.content || 'blank'} | count=${test.count || 10}`;
    if (test.runtime) {
        console.log(`\n[${testNum}/${tests.length}] ${label} | runtime=${test.runtime}`);
    } else {
        console.log(`\n[${testNum}/${tests.length}] ${label}`);
    }

    const args = [
        'run-test.js',
        `--env=${test.env}`,
        `--content=${test.content || 'blank'}`,
        `--count=${test.count || 10}`,
        `--mechanism=${test.mechanism || 'createWindow'}`,
        `--window-type=${test.windowType || 'browser'}`,
        `--port=${basePort}`,
        `--results-dir=${opts.resultsDir}`,
    ];

    if (test.runtime) args.push(`--runtime=${test.runtime}`);
    if (test.affinity) args.push(`--affinity=${test.affinity}`);
    if (test.affinityGroupSize) args.push(`--affinity-group-size=${test.affinityGroupSize}`);
    if (test.runtimeArgs != null) args.push(`--runtime-args=${test.runtimeArgs}`);
    if (test.timeout) args.push(`--timeout=${test.timeout}`);

    const testStart = Date.now();
    let testError = null;

    try {
        execFileSync('node', args, {
            cwd: __dirname,
            stdio: 'inherit',
            timeout: parseInt(test.timeout || '120000', 10) + 30000,
        });
    } catch (err) {
        testError = err.message;
        console.error(`[suite] Test ${testNum} failed: ${err.message}`);
    }

    const testElapsed = Date.now() - testStart;
    console.log(`[suite] Test ${testNum} wall time: ${testElapsed}ms (includes 3s stabilization + close + exit)`);

    // Try to read the latest result file for this test
    const resultEntry = { testNum, test, elapsed: testElapsed, error: testError, result: null };
    const latestResult = findLatestResultFile(test, opts.resultsDir);
    if (latestResult) {
        try {
            resultEntry.result = JSON.parse(fs.readFileSync(latestResult, 'utf-8'));
        } catch (_) {}
    }
    allResults.push(resultEntry);

    if (i < tests.length - 1) {
        console.log(`[suite] Process exited. Starting next test...`);
    }
}

const suiteElapsed = Date.now() - suiteStartTime;
console.log(`\n[suite] All ${tests.length} tests complete. Suite wall time: ${formatMs(suiteElapsed)}`);

printSummaryTable(allResults);
printVersionComparison(allResults);

const summaryPath = path.join(
    path.resolve(opts.resultsDir),
    `suite-summary-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
);
fs.writeFileSync(summaryPath, JSON.stringify(allResults.map(r => r.result || { error: r.error, test: r.test }), null, 2));
console.log(`\n[suite] Full summary saved to ${summaryPath}`);

/** Find the most recently created result JSON that matches the test params. */
function findLatestResultFile(test, resultsDir) {
    const dir = path.resolve(resultsDir);
    if (!fs.existsSync(dir)) return null;

    const env = test.env.replace('openfin-', 'of-');
    const mechanism = test.mechanism || 'createWindow';
    const content = test.content || 'blank';
    const count = test.count || 10;
    const prefix = `${env}_${mechanism}_${content}_${count}_`;

    const files = fs.readdirSync(dir)
        .filter(f => f.startsWith(prefix) && f.endsWith('.json'))
        .sort()
        .reverse();

    return files.length ? path.join(dir, files[0]) : null;
}

/**
 * Print a summary table of all results.
 * Columns: Total (kickoff→last view), WinCreate avg/max, ViewLoad avg/max, Close, Affinity
 */
function printSummaryTable(results) {
    console.log('\n');
    const W = 113;
    const divider = '═'.repeat(W);
    console.log(`╔${divider}╗`);
    console.log(`║${'  SUITE RESULTS SUMMARY'.padEnd(W)}║`);
    console.log(`║${'  Total = kickoff → last view loaded (did-finish-load)'.padEnd(W)}║`);
    console.log(`╠${divider}╣`);

    const header = [
        '#'.padStart(3),
        'Environment'.padEnd(14),
        'Runtime'.padEnd(16),
        'Mechanism'.padEnd(12),
        'Aff'.padEnd(4),
        'Total'.padStart(7),
        'Create(a/m)'.padStart(13),
        'View(a/m)'.padStart(13),
        'Close'.padStart(7),
    ].join(' │ ');
    console.log(`║ ${header} ║`);
    console.log(`╟${'─'.repeat(W)}╢`);

    for (const entry of results) {
        const r = entry.result;
        const t = entry.test;
        const affinity = (t.affinity || 'different').substring(0, 4);

        if (!r || entry.error) {
            const row = [
                String(entry.testNum).padStart(3),
                (t.env || '?').replace('openfin-', 'of-').padEnd(14),
                (t.runtime || 'electron').padEnd(16),
                (t.mechanism || 'createWindow').padEnd(12),
                affinity.padEnd(4),
                'FAILED'.padStart(7),
                '-'.padStart(13),
                '-'.padStart(13),
                '-'.padStart(7),
            ].join(' │ ');
            console.log(`║ ${row} ║`);
            continue;
        }

        const s = r.summary || {};
        const createStr = s.avgCreateMs != null ? `${s.avgCreateMs}/${s.maxCreateMs}` : '-';
        const viewStr = s.avgViewLoadMs != null ? `${s.avgViewLoadMs}/${s.maxViewLoadMs}` : '-';
        const row = [
            String(entry.testNum).padStart(3),
            (r.config?.env || t.env || '?').replace('openfin-', 'of-').padEnd(14),
            (r.config?.runtime || t.runtime || 'electron').padEnd(16),
            (r.config?.mechanism || t.mechanism || 'createWindow').padEnd(12),
            affinity.padEnd(4),
            String(r.totalMs ?? '-').padStart(7),
            createStr.padStart(13),
            viewStr.padStart(13),
            String(r.closeMs ?? '-').padStart(7),
        ].join(' │ ');
        console.log(`║ ${row} ║`);
    }

    console.log(`╚${divider}╝`);
}

function fmtMs(val, width) {
    return String(val ?? '-').padStart(width);
}

/**
 * Group results by mechanism+content+count+affinity and compare across runtimes.
 * Shows Total, WinCreate, ViewLoad for each entry.
 */
function printVersionComparison(results) {
    const successful = results.filter(r => r.result && !r.error);
    if (successful.length < 2) return;

    const groups = {};
    for (const entry of successful) {
        const r = entry.result;
        const affinity = entry.test.affinity || 'different';
        const key = `${r.config?.mechanism || 'createWindow'} | ${r.config?.content || 'blank'} | count=${r.config?.count || 10} | affinity=${affinity}`;
        if (!groups[key]) groups[key] = [];
        groups[key].push(entry);
    }

    const multiGroups = Object.entries(groups).filter(([, entries]) => entries.length > 1);
    if (multiGroups.length === 0) return;

    const W = 110;
    console.log('\n');
    console.log(`╔${'═'.repeat(W)}╗`);
    console.log(`║${'  VERSION COMPARISON (sorted by Total: kickoff → last view ready)'.padEnd(W)}║`);
    console.log(`╚${'═'.repeat(W)}╝`);

    const colEnv = 34, colTotal = 8, colCreate = 14, colView = 14, colClose = 8, colDiff = 10;
    const hdr = `${'Environment'.padEnd(colEnv)} ${'Total'.padStart(colTotal)} ${'Create(a/m)'.padStart(colCreate)} ${'View(a/m)'.padStart(colView)} ${'Close'.padStart(colClose)} ${'Diff'.padStart(colDiff)}`;

    for (const [key, entries] of multiGroups) {
        console.log(`\n  ${key}`);
        console.log(`  ${'─'.repeat(W - 2)}`);
        console.log(`    ${hdr}`);

        const sorted = entries.sort((a, b) => (a.result.totalMs || 0) - (b.result.totalMs || 0));
        const fastest = sorted[0].result.totalMs;

        for (const entry of sorted) {
            const r = entry.result;
            const s = r.summary || {};
            const env = (r.config?.env || '?').replace('openfin-', '');
            const rt = r.config?.runtime || 'electron';
            const envRuntime = `${env} (${rt})`;
            const diff = r.totalMs - fastest;
            const diffStr = diff === 0 ? '(fastest)' : `+${diff}ms`;
            const createStr = s.avgCreateMs != null ? `${s.avgCreateMs}/${s.maxCreateMs}` : '-';
            const viewStr = s.avgViewLoadMs != null ? `${s.avgViewLoadMs}/${s.maxViewLoadMs}` : '-';
            const totalStr = `${r.totalMs}ms`;
            const closeStr = `${r.closeMs ?? '-'}ms`;
            console.log(`    ${envRuntime.padEnd(colEnv)} ${totalStr.padStart(colTotal)} ${createStr.padStart(colCreate)} ${viewStr.padStart(colView)} ${closeStr.padStart(colClose)} ${diffStr.padStart(colDiff)}`);
        }
    }

    console.log('');
}

function formatMs(ms) {
    if (ms < 1000) return `${ms}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
    const mins = Math.floor(ms / 60000);
    const secs = ((ms % 60000) / 1000).toFixed(0);
    return `${mins}m ${secs}s`;
}
