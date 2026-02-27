#!/usr/bin/env node

/**
 * Cross-platform manual launcher for OpenFin Workspace/Container.
 * Starts the HTTP server (using our own server.js), launches OpenFin,
 * and cleans up on exit.
 *
 * Usage:
 *   node manual-launch.js workspace
 *   node manual-launch.js container
 */

import { spawn, execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startServer } from './server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isWin = process.platform === 'win32';

const variant = process.argv[2];
if (!variant || !['workspace', 'container'].includes(variant)) {
    console.error('Usage: node manual-launch.js <workspace|container>');
    process.exit(1);
}

const PORT = 3001;
const variantDir = path.join(__dirname, 'openfin', variant);

function killStale() {
    console.log('[manual] Cleaning up stale processes...');
    try {
        if (isWin) {
            execSync('taskkill /F /IM OpenFin.exe /T', { stdio: 'ignore' });
        } else {
            execSync("lsof -ti:3001 | xargs kill -9 2>/dev/null || true", { stdio: 'ignore' });
            execSync("pkill -9 -f 'OpenFin' 2>/dev/null || true", { stdio: 'ignore' });
        }
    } catch (_) {}
}

let openfinProc;
let server;

function cleanup() {
    console.log('\n[manual] Shutting down...');
    if (openfinProc && !openfinProc.killed) openfinProc.kill();
    if (server) server.close();
    killStale();
    setTimeout(() => process.exit(0), 500);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

killStale();
await new Promise(r => setTimeout(r, 1000));

console.log(`[manual] Starting HTTP server on port ${PORT}...`);
const result = await startServer(PORT);
server = result.server;
const actualPort = result.actualPort;
console.log(`[manual] Server ready on port ${actualPort}.`);

console.log(`[manual] Launching OpenFin (${variant})...`);
const openfinBin = path.join(variantDir, 'node_modules', '.bin', isWin ? 'openfin.cmd' : 'openfin');
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
    console.log(`[manual] OpenFin exited (code ${code}).`);
    // Keep server running so the app stays usable — user presses Ctrl+C to quit
    console.log(`[manual] Server still running on port ${actualPort}. Press Ctrl+C to stop.`);
});
