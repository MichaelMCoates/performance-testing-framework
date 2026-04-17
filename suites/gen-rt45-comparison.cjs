const fs = require('fs');
const path = require('path');

const runtimes = [
  { version: '45.147.100.50', label: 'RT45-50' },
  { version: '45.147.100.49', label: 'RT45-49' },
];
const repeats = 5;

// 20 windows with 10 views each (1 iframe per view)
// 20 windows with 1 view each (10 iframes per view)
const scenarios = [
  { label: '20w-10views',   count: 20, viewsPerWindow: 10, content: 'iframes-1',  mechanism: 'applySnapshot' },
  { label: '20w-1view-10if', count: 20, viewsPerWindow: 1,  content: 'iframes-10', mechanism: 'applySnapshot' },
];

const tests = [];
for (let r = 0; r < repeats; r++) {
  for (const rt of runtimes) {
    for (const s of scenarios) {
      const t = {
        env: 'openfin-workspace',
        runtime: rt.version,
        mechanism: s.mechanism,
        content: s.content,
        count: s.count,
        affinityGroupSize: 3,
        windowType: 'browser',
        timeout: '300000',
      };
      if (s.viewsPerWindow > 1) t.viewsPerWindow = s.viewsPerWindow;
      tests.push(t);
    }
  }
}

// Seeded shuffle
function seededShuffle(arr, seed) {
  const result = [...arr];
  let s = seed;
  const rng = () => { s = (s * 1664525 + 1013904223) & 0x7fffffff; return s / 0x7fffffff; };
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const shuffled = seededShuffle(tests, 20260410);

console.log(`Generated ${shuffled.length} tests`);
console.log(`${runtimes.length} runtimes × ${scenarios.length} scenarios × ${repeats} repeats`);
runtimes.forEach(rt => console.log(`  ${rt.label} (${rt.version})`));
scenarios.forEach(s => {
  const totalViews = s.count * s.viewsPerWindow;
  console.log(`  ${s.label}: ${s.count}w × ${s.viewsPerWindow}vpw = ${totalViews} views, ${s.content}`);
});

const outPath = path.join(__dirname, 'rt45-comparison.json');
fs.writeFileSync(outPath, JSON.stringify({ tests: shuffled }, null, 2));
console.log(`Written to ${outPath}`);
