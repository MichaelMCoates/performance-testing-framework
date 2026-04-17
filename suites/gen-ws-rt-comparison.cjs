/**
 * Workspace + Runtime comparison suite.
 * 2 runtimes × 2 workspace versions × 2 window counts × 5 repeats = 40 tests.
 * Content: iframes-10, affinityGroupSize: 3.
 *
 * Usage: node suites/gen-ws-rt-comparison.cjs
 */
const fs = require('node:fs');
const path = require('node:path');

const permutations = [
    { runtime: '42.138.103.4',   browserBaseUrl: null,                                              label: 'RT42 + WS22.3.32' },
    { runtime: '42.138.103.4',   browserBaseUrl: 'https://workspace.openfin.co/workspace/22.3.38',  label: 'RT42 + WS22.3.38' },
    { runtime: '42.138.103.911', browserBaseUrl: null,                                              label: 'RT42-911 + WS22.3.32' },
    { runtime: '42.138.103.911', browserBaseUrl: 'https://workspace.openfin.co/workspace/22.3.38',  label: 'RT42-911 + WS22.3.38' },
];

const counts = [1, 20];
const repeats = 5;

const tests = [];
for (const perm of permutations) {
    for (const count of counts) {
        for (let r = 0; r < repeats; r++) {
            const test = {
                env: 'openfin-workspace',
                runtime: perm.runtime,
                mechanism: 'applySnapshot',
                content: 'iframes-10',
                count,
                affinityGroupSize: 3,
                windowType: 'browser',
                timeout: '300000',
            };
            if (perm.browserBaseUrl) {
                test.browserBaseUrl = perm.browserBaseUrl;
            }
            tests.push(test);
        }
    }
}

const outPath = path.join(__dirname, 'ws-rt-comparison.json');
fs.writeFileSync(outPath, JSON.stringify({ tests }, null, 2), 'utf-8');
console.log(`Suite: ${tests.length} tests -> ${outPath}`);
console.log(`Permutations:`);
for (const p of permutations) {
    console.log(`  ${p.label}: RT ${p.runtime}, WS ${p.browserBaseUrl || 'default (22.3.32)'}`);
}
