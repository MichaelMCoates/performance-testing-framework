/**
 * Container-only applySnapshot suite across all stable versions v30–v42,
 * plus stable (RT43) and alpha-v44.
 *
 * Usage: node suites/gen-container-all-versions.cjs
 * Output: suites/container-all-versions.json
 */
const fs = require('node:fs');
const path = require('node:path');

const runtimes = [
    'stable-v30', 'stable-v31', 'stable-v32', 'stable-v33',
    'stable-v34', 'stable-v35', 'stable-v36', 'stable-v37',
    'stable-v38', 'stable-v39', 'stable-v40', 'stable-v41',
    'stable-v42',
    'stable',       // 43.142.102.2
    'alpha-v44',
];
const mechanisms = ['applySnapshot'];
const contents = ['iframes-1', 'iframes-10'];
const counts = [20];
const repeats = 5;

const tests = [];
for (const rt of runtimes) {
    for (const content of contents) {
        for (const mech of mechanisms) {
            for (const cnt of counts) {
                for (let r = 0; r < repeats; r++) {
                    tests.push({
                        env: 'openfin-container',
                        runtime: rt,
                        mechanism: mech,
                        content,
                        count: cnt,
                        windowType: 'browser',
                        timeout: '300000',
                    });
                }
            }
        }
    }
}

const outPath = path.join(__dirname, 'container-all-versions.json');
fs.writeFileSync(outPath, JSON.stringify({ tests }, null, 2), 'utf-8');
console.log(`Written ${tests.length} tests to ${outPath}`);
