/**
 * View-focused suite with granular runtime versions across v38–v43.
 * 1 or 10 windows, 20 views/window, same/different domain, 4 repeats.
 *
 * Usage: node suites/gen-views-granular.cjs
 * Also generates a download-only suite (1 quick test per runtime).
 */
const fs = require('node:fs');
const path = require('node:path');

const runtimes = [
    '38.126.83.90',
    '40.130.100.7', '40.130.101.1', '40.130.102.1', '40.130.103.15',
    '40.130.104.2', '40.130.105.1', '40.130.105.4', '40.130.105.8',
    '41.134.100.117', '41.134.101.2', '41.134.101.4', '41.134.102.1',
    '41.134.102.2', '41.134.102.4', '41.134.102.5', '41.134.102.6',
    '41.134.102.7', '41.134.102.8', '41.134.103.2', '41.134.103.3',
    '41.134.103.4',
    '42.138.100.102', '42.138.100.107', '42.138.101.4', '42.138.102.4',
    '42.138.103.1', '42.138.103.2', '42.138.103.4',
    '43.142.100.111', '43.142.101.2', '43.142.101.4', '43.142.102.2',
];

// Download suite: 1 quick test per runtime (1 window, same domain)
const dlTests = runtimes.map(rt => ({
    env: 'openfin-container',
    runtime: rt,
    mechanism: 'applySnapshot',
    content: 'blank',
    count: 1,
    viewsPerWindow: 1,
    viewDomain: 'same',
    windowType: 'browser',
    timeout: '300000',
}));

const dlPath = path.join(__dirname, 'views-granular-download.json');
fs.writeFileSync(dlPath, JSON.stringify({ tests: dlTests }, null, 2), 'utf-8');
console.log(`Download suite: ${dlTests.length} tests -> ${dlPath}`);

// Full suite
const windowCounts = [1, 10];
const viewsPerWindow = 20;
const viewDomains = ['same', 'different'];
const repeats = 4;

const tests = [];
for (const rt of runtimes) {
    for (const winCount of windowCounts) {
        for (const vd of viewDomains) {
            for (let r = 0; r < repeats; r++) {
                tests.push({
                    env: 'openfin-container',
                    runtime: rt,
                    mechanism: 'applySnapshot',
                    content: 'blank',
                    count: winCount,
                    viewsPerWindow,
                    viewDomain: vd,
                    windowType: 'browser',
                    timeout: '300000',
                });
            }
        }
    }
}

const outPath = path.join(__dirname, 'views-granular.json');
fs.writeFileSync(outPath, JSON.stringify({ tests }, null, 2), 'utf-8');
console.log(`Full suite: ${tests.length} tests -> ${outPath}`);
