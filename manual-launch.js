#!/usr/bin/env node

/**
 * Cross-platform manual launcher for OpenFin Workspace/Container.
 * Starts the HTTP server, launches the OpenFin app, and cleans up on exit.
 *
 * Usage:
 *   node manual-launch.js workspace
 *   node manual-launch.js container
 */

import { spawn, execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isWin = process.platform === 'win32';

const variant = process.argv[2];
if (!variant || !['workspace', 'container'].includes(variant)) {
    console.error('Usage: node manual-launch.js <workspace|container>');
    process.exit(1);
}

const variantDir = path.join(__dirname, 'openfin', variant);

function killStale() {
    console.log('[manual] Cleaning up stale processes...');
    try {
        if (isWin) {
            execSync('taskkill /F /IM OpenFin.exe /T 2>nul', { stdio: 'ignore' });
            execSync('for /f "tokens=5" %a in (\'netstat -aon ^| findstr :3001 ^| findstr LISTENING\') do taskkill /F /PID %a 2>nul', { stdio: 'ignore', shell: true });
        } else {
            execSync("lsof -ti:3001 | xargs kill -9 2>/dev/null || true", { stdio: 'ignore' });
            execSync("pkill -9 -f 'OpenFin' 2>/dev/null || true", { stdio: 'ignore' });
            execSync("pkill -f http-server 2>/dev/null || true", { stdio: 'ignore' });
        }
    } catch (_) {}
}

function cleanup() {
    console.log('\n[manual] Shutting down...');
    if (openfinProc && !openfinProc.killed) openfinProc.kill();
    if (serverProc && !serverProc.killed) serverProc.kill();
    killStale();
    setTimeout(() => process.exit(0), 500);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', () => {
    if (serverProc && !serverProc.killed) serverProc.kill();
});

let serverProc, openfinProc;

killStale();

console.log(`[manual] Starting HTTP server for ${variant}...`);
serverProc = spawn('npm', ['run', 'server'], {
    cwd: variantDir,
    stdio: 'inherit',
    shell: isWin,
});

serverProc.on('error', err => {
    console.error(`[manual] Server failed to start: ${err.message}`);
    process.exit(1);
});

await new Promise(r => setTimeout(r, 2500));

console.log(`[manual] Launching OpenFin (${variant})...`);
const openfinBin = path.join(variantDir, 'node_modules', '.bin', 'openfin');
openfinProc = spawn(openfinBin, ['-l', '--config=./manifest-manual.json'], {
    cwd: variantDir,
    stdio: 'inherit',
    shell: isWin,
});

openfinProc.on('error', err => {
    console.error(`[manual] OpenFin failed to launch: ${err.message}`);
    cleanup();
});

openfinProc.on('exit', (code) => {
    console.log(`[manual] OpenFin exited (code ${code}). Cleaning up...`);
    if (serverProc && !serverProc.killed) serverProc.kill();
    setTimeout(() => process.exit(0), 500);
});
