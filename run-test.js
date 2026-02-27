#!/usr/bin/env node

/**
 * CLI entry point: runs a single performance test.
 *
 * Usage:
 *   node run-test.js --env openfin-workspace --runtime 42.138.103.903 \
 *     --mechanism createWindow --content blank --count 10
 */

import { Command } from 'commander';
import { spawn, execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { startServer } from './server.js';
import { generateManifest } from './manifest-generator.js';

const isWin = process.platform === 'win32';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const program = new Command();
program
    .requiredOption('--env <env>', 'Environment: electron, openfin-workspace, openfin-container')
    .option('--runtime <version>', 'OpenFin runtime version', '42.138.103.903')
    .option('--mechanism <type>', 'Window creation mechanism: createWindow, applySnapshot, applySnapshotStaggered', 'createWindow')
    .option('--content <type>', 'View content: blank, example, iframes-5, iframes-20, iframes-50', 'blank')
    .option('--count <n>', 'Number of windows to launch', '10')
    .option('--affinity <strategy>', 'viewProcessAffinityStrategy (OpenFin only): different, same', 'different')
    .option('--affinity-group-size <n>', 'Explicit per-view processAffinity grouping (N views per group, 0=disabled)', '0')
    .option('--window-type <type>', 'Window type: browser, platform', 'browser')
    .option('--runtime-args <args>', 'Override runtime arguments (OpenFin only)')
    .option('--port <port>', 'HTTP server port', '3001')
    .option('--results-dir <dir>', 'Directory for result files', './results')
    .option('--timeout <ms>', 'Max time to wait for results (ms)', '120000')
    .parse();

const opts = program.opts();
const count = parseInt(opts.count, 10);
const port = parseInt(opts.port, 10);
const timeout = parseInt(opts.timeout, 10);

const testLabel = `${opts.env} | ${opts.content} | ${opts.mechanism} | count=${count}`;
console.log(`\n╔══════════════════════════════════════════════════════════════╗`);
console.log(`║  Performance Test: ${testLabel.padEnd(40)} ║`);
console.log(`╚══════════════════════════════════════════════════════════════╝\n`);

let server, waitForResults, actualPort;
let child;

/** Kill any lingering OpenFin processes that share our platform UUID. */
function killStaleOpenFinProcesses() {
    if (!opts.env.startsWith('openfin')) return;
    try {
        if (isWin) {
            execSync('taskkill /F /IM OpenFin.exe /T', { stdio: 'ignore' });
        } else {
            execSync("pkill -9 -f 'OpenFin' 2>/dev/null || true", { stdio: 'ignore' });
        }
        console.log(`[runner] Killed any stale OpenFin processes.`);
    } catch (_) {}
}

async function run() {
    try {
        killStaleOpenFinProcesses();
        await new Promise(r => setTimeout(r, 1000));

        console.log(`[runner] Starting HTTP server on port ${port}...`);
        ({ server, waitForResults, actualPort } = await startServer(port));
        console.log(`[runner] Server ready on port ${actualPort}.`);

        if (opts.env.startsWith('openfin')) {
            console.log(`[runner] Launching OpenFin (${opts.env})...`);
            await runOpenFin();
        } else if (opts.env === 'electron') {
            console.log(`[runner] Launching Electron...`);
            await runElectron();
        } else {
            throw new Error(`Unknown env: ${opts.env}`);
        }

        console.log(`[runner] App launched. Waiting for results (timeout: ${timeout}ms)...`);

        const results = await Promise.race([
            waitForResults,
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout waiting for results')), timeout)
            ),
        ]);

        console.log(`[runner] Results received from app.`);

        // Measure close/shutdown time from the runner side
        const closeStart = Date.now();
        console.log(`[runner] Waiting for app to close and exit...`);
        await waitForChildExit();
        if (opts.env.startsWith('openfin')) {
            try { killStaleOpenFinProcesses(); } catch (_) {}
            await new Promise(r => setTimeout(r, 2000));
        }
        const closeMs = Date.now() - closeStart;
        results.closeMs = closeMs;
        console.log(`[runner] App exited. Close/shutdown: ${closeMs}ms`);

        outputResults(results);
    } catch (err) {
        console.error(`[run-test] ERROR: ${err.message}`);
        process.exitCode = 1;
        // Clean up child processes on error
        if (child && !child.killed) child.kill();
        if (opts.env.startsWith('openfin')) {
            try { killStaleOpenFinProcesses(); } catch (_) {}
            await new Promise(r => setTimeout(r, 2000));
        }
    } finally {
        await cleanupServer();
    }
}

function runOpenFin() {
    const affinityGroupSize = parseInt(opts.affinityGroupSize, 10);
    const manifestPath = generateManifest({
        env: opts.env,
        runtime: opts.runtime,
        runtimeArgs: opts.runtimeArgs,
        port: actualPort,
        mechanism: opts.mechanism,
        content: opts.content,
        count,
        affinity: affinityGroupSize > 0 ? undefined : opts.affinity,
        affinityGroupSize,
        windowType: opts.windowType,
        resultsPort: actualPort,
    });

    console.log(`[run-test] Generated manifest: ${manifestPath}`);
    console.log(`[run-test] Runtime: ${opts.runtime}, Mechanism: ${opts.mechanism}`);

    const variant = opts.env === 'openfin-workspace' ? 'workspace' : 'container';
    const openfinBin = isWin ? 'openfin.cmd' : 'openfin';
    const cliPath = path.join(__dirname, 'openfin', variant, 'node_modules', '.bin', openfinBin);

    child = spawn(cliPath, ['-l', `--config=${manifestPath}`], {
        cwd: path.join(__dirname, 'openfin', variant),
        stdio: 'inherit',
        shell: isWin,
    });

    child.on('error', err => {
        console.error(`[run-test] Failed to launch OpenFin: ${err.message}`);
    });

    return new Promise(resolve => {
        child.on('spawn', resolve);
    });
}

function runElectron() {
    const electronBin = isWin ? 'electron.cmd' : 'electron';
    const electronPath = path.join(__dirname, 'electron', 'node_modules', '.bin', electronBin);
    const mainPath = path.join(__dirname, 'electron', 'main.js');

    const args = [
        mainPath,
        '--auto-run',
        `--mechanism=${opts.mechanism}`,
        `--content=${opts.content}`,
        `--count=${count}`,
        `--window-type=${opts.windowType}`,
        `--results-port=${actualPort}`,
        `--port=${actualPort}`,
    ];

    child = spawn(electronPath, args, {
        cwd: __dirname,
        stdio: 'inherit',
        shell: isWin,
        env: { ...process.env, ELECTRON_DISABLE_SECURITY_WARNINGS: 'true' },
    });

    child.on('error', err => {
        console.error(`[run-test] Failed to launch Electron: ${err.message}`);
    });

    return new Promise(resolve => {
        child.on('spawn', resolve);
    });
}

function outputResults(results) {
    const cfg = results.config || {};
    const s = results.summary || {};
    console.log('\n────────────────────────────────────────');
    console.log(`  ${cfg.env || opts.env} | ${cfg.runtime || opts.runtime || 'electron'} | ${cfg.mechanism || opts.mechanism}`);
    console.log(`  ${cfg.content || opts.content} | ${cfg.count || count} windows | affinity=${opts.affinity}`);
    console.log('────────────────────────────────────────');
    console.log(`  TOTAL (kickoff → last view ready): ${results.totalMs} ms`);
    if (results.snapshotMs) {
        console.log(`  Snapshot applySnapshot() call:     ${results.snapshotMs} ms`);
    }
    if (s.avgCreateMs != null) {
        console.log(`  Window Create:  avg ${s.avgCreateMs}ms   max ${s.maxCreateMs}ms`);
    }
    if (s.avgViewLoadMs != null) {
        console.log(`  View Load:      avg ${s.avgViewLoadMs}ms   max ${s.maxViewLoadMs}ms  (window create → did-finish-load)`);
    }
    if (results.closeMs != null) {
        console.log(`  Close/Shutdown: ${results.closeMs} ms`);
    }
    console.log('────────────────────────────────────────\n');

    const resultsDir = path.resolve(opts.resultsDir);
    fs.mkdirSync(resultsDir, { recursive: true });

    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const env = opts.env.replace('openfin-', 'of-');
    const fileName = `${env}_${opts.mechanism}_${opts.content}_${count}_${ts}.json`;
    const filePath = path.join(resultsDir, fileName);

    fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
    console.log(`[runner] Results saved to ${filePath}`);
    return filePath;
}

/** Wait for child process to fully exit. */
function waitForChildExit() {
    return new Promise(resolve => {
        if (!child || child.exitCode !== null) return resolve();
        child.on('exit', resolve);
        setTimeout(() => {
            if (child && !child.killed) child.kill('SIGKILL');
            resolve();
        }, 15000);
    });
}

async function cleanupServer() {
    console.log(`[runner] Cleanup complete.`);
    server.close();
    setTimeout(() => process.exit(process.exitCode || 0), 500);
}

run();
