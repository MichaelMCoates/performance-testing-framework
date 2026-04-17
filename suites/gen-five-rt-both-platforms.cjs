/**
 * 5-runtime comparison across Container (20 views/window) and Workspace (iframes-10).
 * 20 windows, 5 repeats per permutation.
 *
 * Usage: node suites/gen-five-rt-both-platforms.cjs
 */
const fs = require('node:fs');
const path = require('node:path');

const runtimes = [
    '38.126.83.90',
    '40.130.105.8',
    '41.134.103.4',
    '42.138.103.4',
    '42.138.103.909',
];

const repeats = 5;
const tests = [];

for (const rt of runtimes) {
    for (let r = 0; r < repeats; r++) {
        // Container: 20 windows × 20 views, same domain
        tests.push({
            env: 'openfin-container',
            runtime: rt,
            mechanism: 'applySnapshot',
            content: 'blank',
            count: 20,
            viewsPerWindow: 20,
            viewDomain: 'same',
            windowType: 'browser',
            timeout: '300000',
        });
        // Workspace: 20 windows × iframes-10
        tests.push({
            env: 'openfin-workspace',
            runtime: rt,
            mechanism: 'applySnapshot',
            content: 'iframes-10',
            count: 20,
            windowType: 'browser',
            timeout: '300000',
        });
    }
}

const outPath = path.join(__dirname, 'five-rt-both-platforms.json');
fs.writeFileSync(outPath, JSON.stringify({ tests }, null, 2), 'utf-8');
console.log(`Suite: ${tests.length} tests (${runtimes.length} runtimes × 2 platforms × ${repeats} repeats) -> ${outPath}`);
