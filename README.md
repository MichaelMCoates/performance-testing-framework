# OpenFin Performance Testing Framework

Configurable, automated performance testing for **OpenFin Workspace**, **OpenFin Container**, and **Electron**. Run any test permutation without code changes.

## Setup

```bash
cd performance-testing-framework

# Install all dependencies (root + OpenFin + Electron)
npm run install-all

# Build the workspace-platform bundle (only needed if you want to rebuild it)
npm run build
```

## Quick Start

### Run a single test

```bash
node run-test.js --env openfin-workspace --runtime 42.138.103.903 \
  --mechanism createWindow --content blank --count 10
```

### Run a test suite

```bash
node run-suite.js suites/quick-smoke.json
```

## CLI Options

| Flag | Values | Default | Notes |
|------|--------|---------|-------|
| `--env` | `electron`, `openfin-workspace`, `openfin-container` | **required** | |
| `--runtime` | Any OpenFin runtime version | `42.138.103.903` | Ignored for Electron |
| `--mechanism` | `createWindow`, `applySnapshot`, `applySnapshotStaggered` | `createWindow` | OpenFin only |
| `--content` | `blank`, `example`, `iframes-5`, `iframes-20`, `iframes-50` | `blank` | |
| `--count` | `1`, `5`, `10`, `20`, `50` | `10` | Number of windows |
| `--window-type` | `browser`, `platform` | `browser` | Browser = tabs/views |
| `--affinity` | `different`, `same` | `different` | viewProcessAffinityStrategy |
| `--runtime-args` | Custom string | auto-detected | Overrides auto flags |
| `--port` | Port number | `3001` | HTTP server port |
| `--results-dir` | Directory path | `./results` | Where JSON results go |
| `--timeout` | Milliseconds | `120000` | Max wait for results |

## Example Commands

### Electron

```bash
# 1 blank window
node run-test.js --env electron --content blank --count 1

# 10 windows loading example.com
node run-test.js --env electron --content example --count 10

# 20 windows, each with 50 iframes
node run-test.js --env electron --content iframes-50 --count 20
```

### OpenFin Workspace (with WorkspacePlatform)

```bash
# 10 blank browser windows on the test build (async-fin-injection)
node run-test.js --env openfin-workspace --runtime 42.138.103.903 \
  --mechanism createWindow --content blank --count 10

# 5 windows via applySnapshot
node run-test.js --env openfin-workspace --runtime 42.138.103.903 \
  --mechanism applySnapshot --content blank --count 5

# 10 windows via applySnapshot staggered (2-at-a-time)
node run-test.js --env openfin-workspace --runtime 42.138.103.903 \
  --mechanism applySnapshotStaggered --content blank --count 10

# Compare against older runtime (no async-fin-injection)
node run-test.js --env openfin-workspace --runtime 42.138.103.4 \
  --mechanism createWindow --content blank --count 10

# Test with 20 iframes per view
node run-test.js --env openfin-workspace --runtime 42.138.103.903 \
  --content iframes-20 --count 10

# Same process affinity
node run-test.js --env openfin-workspace --runtime 42.138.103.903 \
  --content blank --count 10 --affinity same
```

### OpenFin Container (Core API, no WorkspacePlatform)

```bash
# Basic container test
node run-test.js --env openfin-container --runtime 42.138.103.903 \
  --mechanism createWindow --content blank --count 10

# Container with applySnapshot
node run-test.js --env openfin-container --runtime 42.138.103.903 \
  --mechanism applySnapshot --content blank --count 10
```

## Test Suites

Suite files are JSON arrays of test configs. Each test runs in a **fresh process** (app starts, runs test, quits) to avoid warm-cache effects.

```bash
# Quick validation (6 tests, ~30s)
node run-suite.js suites/quick-smoke.json

# Full matrix (~80 tests, takes a while)
node run-suite.js suites/full-matrix.json

# 20-window iframe stress test
node run-suite.js suites/20-windows-iframes-20.json

# Custom delay between tests (default 5s)
node run-suite.js suites/quick-smoke.json --delay 8000
```

### Creating custom suites

Create a JSON file with an array of test objects:

```json
{
  "name": "My Custom Suite",
  "tests": [
    { "env": "electron", "content": "blank", "count": 10 },
    { "env": "openfin-workspace", "runtime": "42.138.103.903", "content": "blank", "count": 10, "mechanism": "createWindow" },
    { "env": "openfin-workspace", "runtime": "42.138.103.903", "content": "blank", "count": 10, "mechanism": "applySnapshot" }
  ]
}
```

Each test object supports the same fields as CLI options (without the `--` prefix).

## Output

### Console (human-readable)

```
────────────────────────────────────────
  Test: openfin-workspace
  Runtime: 42.138.103.903
  Mechanism: createWindow
  Content: blank
  Window Count: 5
────────────────────────────────────────
  TOTAL TIME:     1143 ms
  Avg Create:     228 ms
  Max Create:     356 ms
  Avg Load:       662 ms
  Max Load:       1083 ms
────────────────────────────────────────
```

### JSON files (machine-readable)

Each test saves a JSON file to `results/` with this structure:

```json
{
  "timestamp": "2026-02-27T01:08:46.227Z",
  "config": {
    "env": "openfin-workspace",
    "runtime": "42.138.103.903",
    "mechanism": "applySnapshot",
    "content": "blank",
    "count": 5,
    "windowType": "browser"
  },
  "totalMs": 891,
  "snapshotMs": 891,
  "summary": {
    "avgCreateMs": null,
    "maxCreateMs": null,
    "avgLoadMs": 237,
    "maxLoadMs": 265,
    "minLoadMs": 230
  },
  "windows": [
    { "name": "browser-window-1-1", "viewName": "browser-view-1-1", "createMs": null, "loadMs": 230 },
    ...
  ]
}
```

File naming convention: `{env}_{mechanism}_{content}_{count}_{timestamp}.json`

## Supported Runtime Versions

| Version | `--async-fin-injection` | Notes |
|---------|------------------------|-------|
| `42.138.103.903` | Yes (auto-applied) | Test build with lazy preload |
| `42.138.103.4` | No | Baseline |
| `42.138.103.2` | No | Baseline |
| `43.142.101.4` | No | Newer branch |
| `41.134.103.3` | No | Older branch |

Runtime 42.138.103.903 automatically gets `--security-realm=LSEG --async-fin-injection`. All others get no special args. Override with `--runtime-args`.

## Manual Mode (Launcher UI)

To use the interactive launcher UI instead of the CLI:

```bash
# Terminal 1: start the HTTP server
cd openfin/workspace && npm run server

# Terminal 2: launch the app
cd openfin/workspace && npm run start

# Or for Container:
cd openfin/container && npm run server   # terminal 1
cd openfin/container && npm run start    # terminal 2

# Or for Electron:
cd electron && npm start
```

The launcher UI lets you pick content type, mechanism, window count, and window type from dropdowns, then click Run Test.

## Architecture

```
run-test.js          CLI entry: parse args, start server, launch app, collect results
  ├── server.js      HTTP server: serves static files + POST /results endpoint
  ├── manifest-generator.js   Generates OpenFin manifest with injected config
  │
  ├── openfin/workspace/provider.js   WorkspacePlatform provider (auto-run or launcher)
  ├── openfin/container/provider.js   Core API provider
  └── electron/main.js                Electron main process

run-suite.js         Loops over tests[], running run-test.js for each one sequentially
```

**Flow (auto-run mode):**
1. `run-test.js` starts HTTP server + generates manifest with test config in URL params
2. Launches OpenFin/Electron pointing to the provider
3. Provider reads config from URL params, runs the test, measures perf
4. Provider POSTs results JSON to `http://localhost:PORT/results`
5. Provider calls `platform.quit()`
6. `run-test.js` receives results, prints to console, saves JSON, exits

## Key Metrics

- **TOTAL TIME**: From test start to last `did-finish-load` event across all views
- **Create time**: Per-window, from before `createWindow()` call to after it resolves
- **Load time**: Per-window, from test start to `did-finish-load` on that window's view
- **Snapshot time**: For applySnapshot mechanisms, how long the `applySnapshot()` call took
