#!/usr/bin/env node

/**
 * CLI entry point: runs a single performance test.
 *
 * Usage:
 *   node run-test.js --env openfin-workspace --runtime 42.138.103.903 \
 *     --mechanism createWindow --content blank --count 10
 */

import { Command } from 'commander';
import { execSync,spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateManifest } from './manifest-generator.js';
import { startServer } from './server.js';

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
    .option('--window-affinity-group-size <n>', 'Per-window processAffinity grouping for browser chrome (0=disabled)', '0')
    .option('--window-type <type>', 'Window type: browser, platform', 'browser')
    .option('--runtime-args <args>', 'Override runtime arguments (OpenFin only)')
    .option('--port <port>', 'HTTP server port', '3001')
    .option('--results-dir <dir>', 'Directory for result files', './results')
    .option('--timeout <ms>', 'Max time to wait for results (ms)', '180000')
    .option('--capture-snapshot', 'Capture live getSnapshot() after test and save comparison')
    .option('--browser-base-url <url>', 'Override workspace browser base URL')
    .option('--delay-before-close <seconds>', 'Keep windows open N seconds after test completes (for inspection)', '0')
    .option('--views-per-window <n>', 'Number of views per window (default 1)', '1')
    .option('--view-domain <type>', 'View domain strategy: same or different', 'same')
    .parse();

const opts = program.opts();
const count = parseInt(opts.count, 10);
const port = parseInt(opts.port, 10);
const timeout = parseInt(opts.timeout, 10);

const VALID_ENVS = ['electron', 'openfin-workspace', 'openfin-container'];
const VALID_MECHANISMS = ['createWindow', 'createWindowSequential', 'applySnapshot', 'applySnapshotStaggered', 'applyRealSnapshot', 'captureSnapshot'];

if (!VALID_ENVS.includes(opts.env)) {
    console.error(`Invalid --env "${opts.env}". Must be one of: ${VALID_ENVS.join(', ')}`);
    process.exit(1);
}
if (!VALID_MECHANISMS.includes(opts.mechanism)) {
    console.error(`Invalid --mechanism "${opts.mechanism}". Must be one of: ${VALID_MECHANISMS.join(', ')}`);
    process.exit(1);
}
if (isNaN(count) || count < 1) {
    console.error(`Invalid --count "${opts.count}". Must be a positive integer.`);
    process.exit(1);
}
if (opts.env === 'electron' && opts.runtime !== '42.138.103.903') {
    // Electron ignores runtime — not an error, just informational
}
if (opts.env.startsWith('openfin') && !opts.runtime) {
    console.error('OpenFin tests require --runtime <version>. Example: --runtime 42.138.103.4');
    process.exit(1);
}

const testLabel = `${opts.env} | ${opts.content} | ${opts.mechanism} | count=${count}`;
console.log(`\n╔══════════════════════════════════════════════════════════════╗`);
console.log(`║  Performance Test: ${testLabel.padEnd(40)} ║`);
console.log(`╚══════════════════════════════════════════════════════════════╝\n`);

let serverObj;
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

/** Run a single OpenFin pass: launch, wait for results, wait for exit, kill stale. */
async function runSinglePass(mechanismOverride, label) {
    console.log(`\n[runner] ── ${label} ──`);
    console.log(`[runner] Launching OpenFin (${opts.env})...`);
    await runOpenFin(mechanismOverride);

    console.log(`[runner] App launched. Waiting for results (timeout: ${timeout}ms)...`);
    const results = await Promise.race([
        serverObj.waitForResults,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error(`Timeout waiting for results (${label})`)), timeout)
        ),
    ]);
    console.log(`[runner] Results received.`);

    const closeStart = Date.now();
    console.log(`[runner] Waiting for app to close and exit...`);
    await waitForChildExit();
    if (opts.env.startsWith('openfin')) {
        try { killStaleOpenFinProcesses(); } catch (_) {}
        await new Promise(r => setTimeout(r, 3000));
    }
    results.closeMs = Date.now() - closeStart;
    console.log(`[runner] App exited. Close/shutdown: ${results.closeMs}ms`);
    return results;
}

async function run() {
    try {
        killStaleOpenFinProcesses();
        await new Promise(r => setTimeout(r, 1000));

        console.log(`[runner] Starting HTTP server on port ${port}...`);
        serverObj = await startServer(port);
        console.log(`[runner] Server ready on port ${serverObj.actualPort}.`);

        if (opts.mechanism === 'applyRealSnapshot' && opts.env.startsWith('openfin')) {
            // Two-pass: capture snapshot in one process, apply in a fresh one
            await runSinglePass('captureSnapshot', 'Pass 1: Capture snapshot');
            console.log(`[runner] Capture pass complete. Snapshot saved on server.`);

            serverObj.resetResults();
            console.log(`[runner] Cooldown before fresh launch...`);
            await new Promise(r => setTimeout(r, 3000));

            const results = await runSinglePass('applyRealSnapshot', 'Pass 2: Apply real snapshot (timed)');
            outputResults(results);
        } else if (opts.env.startsWith('openfin')) {
            const results = await runSinglePass(null, 'Single pass');
            outputResults(results);
        } else if (opts.env === 'electron') {
            console.log(`[runner] Launching Electron...`);
            await runElectron();

            console.log(`[runner] App launched. Waiting for results (timeout: ${timeout}ms)...`);
            const results = await Promise.race([
                serverObj.waitForResults,
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Timeout waiting for results')), timeout)
                ),
            ]);
            console.log(`[runner] Results received from app.`);

            const closeStart = Date.now();
            console.log(`[runner] Waiting for app to close and exit...`);
            await waitForChildExit();
            results.closeMs = Date.now() - closeStart;
            console.log(`[runner] App exited. Close/shutdown: ${results.closeMs}ms`);

            outputResults(results);
        } else {
            throw new Error(`Unknown env: ${opts.env}`);
        }
    } catch (err) {
        console.error(`[run-test] ERROR: ${err.message}`);
        process.exitCode = 1;
        if (child && !child.killed) child.kill();
        if (opts.env.startsWith('openfin')) {
            try { killStaleOpenFinProcesses(); } catch (_) {}
            await new Promise(r => setTimeout(r, 2000));
        }
    } finally {
        await cleanupServer();
    }
}

function runOpenFin(mechanismOverride) {
    const mechanism = mechanismOverride || opts.mechanism;
    const affinityGroupSize = parseInt(opts.affinityGroupSize, 10);
    const manifestPath = generateManifest({
        env: opts.env,
        runtime: opts.runtime,
        runtimeArgs: opts.runtimeArgs,
        port: serverObj.actualPort,
        mechanism,
        content: opts.content,
        count,
        affinity: affinityGroupSize > 0 ? undefined : opts.affinity,
        affinityGroupSize,
        windowType: opts.windowType,
        resultsPort: serverObj.actualPort,
        captureSnapshot: opts.captureSnapshot,
        windowAffinityGroupSize: parseInt(opts.windowAffinityGroupSize, 10),
        browserBaseUrl: opts.browserBaseUrl,
        delayBeforeClose: parseInt(opts.delayBeforeClose, 10),
        viewsPerWindow: parseInt(opts.viewsPerWindow, 10),
        viewDomain: opts.viewDomain,
    });

    console.log(`[run-test] Generated manifest: ${manifestPath}`);
    console.log(`[run-test] Runtime: ${opts.runtime}, Mechanism: ${mechanism}`);

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
        `--results-port=${serverObj.actualPort}`,
        `--port=${serverObj.actualPort}`,
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
    if (results.apiReturnMs != null) {
        console.log(`  API return (snapshot/createWindow): ${results.apiReturnMs} ms`);
    }
    if (results.allLayoutReadyMs != null) {
        console.log(`  All layout-ready:                  ${results.allLayoutReadyMs} ms`);
    }
    if (results.allViewLoadMs != null) {
        console.log(`  All view did-finish-load:          ${results.allViewLoadMs} ms`);
    }
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
    if (serverObj?.server) serverObj.server.close();
    setTimeout(() => process.exit(process.exitCode || 0), 500);
}

run();
