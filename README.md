# OpenFin Performance Testing Framework

Configurable, automated performance testing for **OpenFin Workspace**, **OpenFin Container**, and **Electron**. Run any test permutation from the CLI without code changes. Compare runtimes, mechanisms, affinity strategies, and snapshot types.

> **Offline note:** All tests run locally. The only network dependency is the initial `npm install` and OpenFin runtime downloads. Once runtimes are cached (they live in `%LOCALAPPDATA%/OpenFin/`), everything works offline.

---

## Table of Contents

- [Setup](#setup)
- [Quick Start](#quick-start)
- [Single Tests (run-test.js)](#single-tests)
- [Test Suites (run-suite.js)](#test-suites)
- [Manual Mode (Launcher UI)](#manual-mode)
- [CLI Reference](#cli-reference)
- [Mechanisms](#mechanisms)
- [Content Types](#content-types)
- [Affinity Strategies](#affinity-strategies)
- [Runtime Versions](#runtime-versions)
- [Real Snapshot Testing (Two-Pass)](#real-snapshot-testing)
- [Creating Custom Suites](#creating-custom-suites)
- [Pre-Built Suites](#pre-built-suites)
- [Output and Results](#output-and-results)
- [Architecture](#architecture)
- [Troubleshooting](#troubleshooting)

---

## Setup

```powershell
cd performance-testing-framework

# Install all dependencies (root + openfin/workspace + openfin/container + electron)
npm run install-all

# Build the workspace-platform bundle (only needed once, or after modifying workspace-platform-entry.js)
npm run build
```

**What `install-all` does:** Runs `npm install` in four directories:
1. Root (installs `commander`)
2. `openfin/workspace/` (installs `@openfin/workspace-platform`, `openfin-adapter`, `openfin`, `vite`)
3. `openfin/container/` (installs `openfin-adapter`, `openfin`)
4. `electron/` (installs `electron`)

### Pre-caching OpenFin Runtimes (for offline use)

Each OpenFin runtime version is downloaded on first use. To pre-cache them all so they work offline:

```powershell
# Run a quick 1-window test on each runtime to trigger the download
node run-test.js --env openfin-workspace --runtime 40.130.105.8 --count 1
node run-test.js --env openfin-workspace --runtime 41.134.103.3 --count 1
node run-test.js --env openfin-workspace --runtime 42.138.102.4 --count 1
node run-test.js --env openfin-workspace --runtime 42.138.103.2 --count 1
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --count 1
node run-test.js --env openfin-workspace --runtime 42.138.103.904 --count 1
node run-test.js --env openfin-workspace --runtime 43.142.101.4 --count 1
```

After this, runtimes are cached in `%LOCALAPPDATA%/OpenFin/Runtime/` and no internet is needed.

---

## Quick Start

### Run a single test

```powershell
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism createWindow --content blank --count 10
```

### Run a test suite

```powershell
node run-suite.js suites/quick-smoke.json
```

### Launch the manual UI

```powershell
node manual-launch.js workspace
```

---

## Single Tests

`run-test.js` runs one test: starts an HTTP server, launches the app (OpenFin or Electron), waits for it to report results, then saves them and exits.

### Basic syntax

```powershell
node run-test.js --env <environment> [options]
```

### Electron examples

```powershell
# 1 blank window
node run-test.js --env electron --content blank --count 1

# 10 windows with 5 iframes each
node run-test.js --env electron --content iframes-5 --count 10

# 20 windows with 45 static iframes each
node run-test.js --env electron --content iframes-static-45 --count 20
```

### OpenFin Workspace examples

```powershell
# 10 blank windows using createWindow
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism createWindow --content blank --count 10

# 5 windows via applySnapshot
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism applySnapshot --content blank --count 5

# 10 windows via applySnapshot with staggered batching
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism applySnapshotStaggered --content blank --count 10

# 20 windows, 1 iframe each, grouped-3 affinity
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism applySnapshot --content iframes-1 --count 20 --affinity-group-size 3

# Same process affinity (all views share one renderer)
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism applySnapshot --content blank --count 10 --affinity same

# Real snapshot (two-pass: capture in one process, apply in a fresh one)
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism applyRealSnapshot --content iframes-1 --count 5 --affinity-group-size 3

# Capture a live snapshot and compare it to the programmatic one
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism applySnapshot --content blank --count 5 --capture-snapshot
```

### OpenFin Container examples

```powershell
# 10 blank windows
node run-test.js --env openfin-container --runtime 42.138.103.4 --mechanism createWindow --content blank --count 10

# 5 windows via applySnapshot with iframes
node run-test.js --env openfin-container --runtime 42.138.103.4 --mechanism applySnapshot --content iframes-1 --count 5 --affinity-group-size 3
```

### Timeout

The default timeout is 180 seconds. For large window counts or slow runtimes, increase it:

```powershell
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism applySnapshot --content iframes-static-45 --count 50 --timeout 300000
```

---

## Test Suites

`run-suite.js` runs a sequence of tests defined in a JSON file. Each test launches in a **completely fresh process** to avoid warm-cache effects.

### Basic syntax

```powershell
node run-suite.js <path-to-suite.json> [options]
```

### Options

| Flag | Default | Description |
|------|---------|-------------|
| `--port <port>` | `3001` | Base HTTP server port |
| `--results-dir <dir>` | `./results` | Where to save result JSON files |
| `--randomize` | off | Shuffle test order (Fisher-Yates) to rule out ordering effects |

### Examples

```powershell
# Run the quick smoke test (6 tests, ~2 minutes)
node run-suite.js suites/quick-smoke.json

# Run customer-matching scenario (126 tests, ~1.5 hours)
node run-suite.js suites/customer-snapshot-1iframe.json

# Run with randomized order to check for ordering effects
node run-suite.js suites/comprehensive-no903.json --randomize

# Run real snapshot comparison across all runtimes (7 tests, ~6 minutes)
node run-suite.js suites/real-snapshot-5w-gr3.json

# Run on a different port (if 3001 is busy)
node run-suite.js suites/quick-smoke.json --port 3005

# Save results to a custom directory
node run-suite.js suites/quick-smoke.json --results-dir ./my-results
```

### Suite output

After all tests complete, the suite runner prints:
1. **SUITE RESULTS SUMMARY** — a table of all test results
2. **VERSION COMPARISON** — groups by mechanism/content/count/affinity and ranks runtimes by total time
3. **JSON summary** — saves a `suite-summary-<timestamp>.json` to the results directory

---

## Manual Mode

The manual launcher opens an interactive UI where you can pick test parameters from dropdowns and click "Run Test". Useful for ad-hoc testing and visual inspection.

### Workspace

```powershell
node manual-launch.js workspace
```

### Container

```powershell
node manual-launch.js container
```

### Electron

```powershell
cd electron && npm start
```

Or from the root:

```powershell
npm run manual:electron
```

### npm script shortcuts

```powershell
npm run manual:openfin-workspace   # same as: node manual-launch.js workspace
npm run manual:openfin-container   # same as: node manual-launch.js container
npm run manual:electron            # same as: cd electron && npm start
```

---

## CLI Reference

### run-test.js

| Flag | Values | Default | Notes |
|------|--------|---------|-------|
| `--env` | `electron`, `openfin-workspace`, `openfin-container` | **required** | |
| `--runtime` | Any OpenFin runtime version string | `42.138.103.903` | Ignored for Electron |
| `--mechanism` | See [Mechanisms](#mechanisms) | `createWindow` | |
| `--content` | See [Content Types](#content-types) | `blank` | |
| `--count` | Any positive integer | `10` | Number of windows |
| `--affinity` | `different`, `same` | `different` | Platform-level `viewProcessAffinityStrategy` |
| `--affinity-group-size` | `0` (disabled), `3`, `5`, etc. | `0` | Per-view `processAffinity` grouping. Overrides `--affinity` |
| `--window-type` | `browser`, `platform` | `browser` | Browser = tabs/views, Platform = raw windows |
| `--runtime-args` | Custom string | auto-detected | Overrides auto-applied runtime flags |
| `--port` | Port number | `3001` | HTTP server port |
| `--results-dir` | Directory path | `./results` | Where JSON results go |
| `--timeout` | Milliseconds | `180000` | Max wait for results |
| `--capture-snapshot` | flag (no value) | off | After test, call `getSnapshot()` and save comparison |

### run-suite.js

| Flag | Values | Default | Notes |
|------|--------|---------|-------|
| `<suite-file>` | Path to JSON | **required** | Positional argument |
| `--port` | Port number | `3001` | Base HTTP server port |
| `--results-dir` | Directory path | `./results` | Where to save results |
| `--randomize` | flag (no value) | off | Randomize test execution order |

---

## Mechanisms

The `--mechanism` flag controls how windows are created:

| Mechanism | Description | Environments |
|-----------|-------------|--------------|
| `createWindow` | Creates windows one-by-one using `fin.Window.create()` (parallel, all kicked off at once) | All |
| `createWindowSequential` | Creates windows one-by-one, waiting for each to load before starting the next | All |
| `applySnapshot` | Creates all windows in a single `platform.applySnapshot()` call using a minimal programmatic snapshot | OpenFin only |
| `applySnapshotStaggered` | Like `applySnapshot` but batches windows 2 at a time | OpenFin only |
| `applyRealSnapshot` | **Two-pass test.** Pass 1: creates windows, captures a live `getSnapshot()`, saves to disk, quits. Pass 2: fresh process loads the captured snapshot and applies it. See [Real Snapshot Testing](#real-snapshot-testing) | OpenFin Workspace only |
| `captureSnapshot` | **Setup-only.** Creates windows, captures `getSnapshot()`, saves to server, quits. Used internally by `applyRealSnapshot` — you normally don't call this directly | OpenFin Workspace only |

### When to use which

- **`createWindow`** — Good baseline. Measures individual window creation overhead.
- **`applySnapshot`** — Measures batch window creation. Uses a minimal ~2KB programmatic snapshot.
- **`applyRealSnapshot`** — Most realistic. Uses a full ~74-290KB snapshot from `getSnapshot()`, applied in a cold process. This is what customers actually experience.

---

## Content Types

The `--content` flag controls what each view loads:

| Value | Description | Offline? |
|-------|-------------|----------|
| `blank` | Empty white page | Yes |
| `example` | Loads `https://www.example.com` | **No** (needs internet) |
| `iframes-1` | 1 dynamically generated iframe | Yes |
| `iframes-5` | 5 dynamically generated iframes | Yes |
| `iframes-20` | 20 dynamically generated iframes | Yes |
| `iframes-50` | 50 dynamically generated iframes | Yes |
| `iframes-static-5` | 5 static iframes in HTML | Yes |
| `iframes-static-20` | 20 static iframes in HTML | Yes |
| `iframes-static-45` | 45 static iframes in HTML (matches LSEG test content) | Yes |
| `iframes-static-50` | 50 static iframes in HTML | Yes |

**Static vs Dynamic iframes:** Static iframes are declared directly in HTML. The browser's `load` event (and `did-finish-load`) reliably waits for all static sub-frames to complete. Dynamic iframes are generated via JS; `did-finish-load` may fire before all dynamic iframes finish. **Use `iframes-static-*` for the most accurate measurements.** Use `iframes-1` for lightweight single-iframe scenarios (e.g. customer's setup).

**For offline use:** Avoid `example` content. All other content types serve from the local HTTP server.

---

## Affinity Strategies

Controls how Chromium renderer processes are allocated across views.

### Platform-level (`--affinity`)

| Value | Effect |
|-------|--------|
| `different` | Each view gets its own renderer process (default, most isolated) |
| `same` | All views share one renderer process (fastest, least isolated) |

### Per-view grouping (`--affinity-group-size`)

When set to a value > 0, views are assigned to affinity groups of that size. For example, `--affinity-group-size 3` means views 0-2 share a renderer, views 3-5 share another, etc. This overrides `--affinity`.

```powershell
# All views in separate processes
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --content blank --count 10 --affinity different

# All views in one process
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --content blank --count 10 --affinity same

# Views grouped in threes
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --content blank --count 10 --affinity-group-size 3
```

---

## Runtime Versions

| Version | `--async-fin-injection` | Notes |
|---------|------------------------|-------|
| `40.130.105.8` | No | Older stable |
| `41.134.103.3` | No | Previous major |
| `42.138.102.4` | No | Current stable baseline |
| `42.138.103.2` | No | Patch |
| `42.138.103.4` | No | Patch |
| `42.138.103.903` | Yes (auto-applied) | Test build with lazy preload |
| `42.138.103.904` | Yes (auto-applied) | Test build with lazy preload |
| `43.142.101.4` | No | Next major |

All runtimes automatically get `--security-realm=LSEG`. Runtimes `.903` and `.904` additionally get `--async-fin-injection`. You can override with `--runtime-args`:

```powershell
# Force custom runtime args
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --runtime-args "--security-realm=LSEG --enable-features=SomeFlag"
```

---

## Real Snapshot Testing

The `applyRealSnapshot` mechanism addresses a key question: **does snapshot complexity affect performance?**

A programmatic snapshot is a minimal ~2KB JSON with just window/view definitions. A real snapshot (from `platform.getSnapshot()`) is a full ~74-290KB JSON including layout configuration, page definitions, workspace metadata, bounds, etc.

### How it works

When you run `--mechanism=applyRealSnapshot`, the runner automatically orchestrates two passes:

1. **Pass 1 (Capture):** Launches a fresh OpenFin process, creates all windows using a minimal programmatic snapshot, waits for everything to load, calls `platform.getSnapshot()`, saves the result to the server (`/save-snapshot`), then quits.
2. **Cooldown:** Waits 3 seconds for the runtime to fully exit. Kills any stale processes.
3. **Pass 2 (Apply):** Launches a completely fresh OpenFin process, fetches the captured snapshot from the server (`/captured-snapshot.json`), applies it with `platform.applySnapshot()`, and measures timing.

This ensures the timed measurement has **no warm runtime bias**.

### Example commands

```powershell
# Real snapshot: 5 windows, 1 iframe, grouped-3
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism applyRealSnapshot --content iframes-1 --count 5 --affinity-group-size 3

# Real snapshot: 20 windows, 1 iframe, grouped-3
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --mechanism applyRealSnapshot --content iframes-1 --count 20 --affinity-group-size 3
```

### Run across all runtimes

```powershell
# 5 windows
node run-suite.js suites/real-snapshot-5w-gr3.json

# 20 windows
node run-suite.js suites/real-snapshot-20w-gr3.json
```

### Comparing results

After running both a programmatic suite and a real snapshot suite, you can compare the `totalMs` values in the resulting `suite-summary-*.json` files in the `results/` directory.

**Expected finding:** Real snapshots are ~1.8-2.0x slower than programmatic ones due to the additional state data that `applySnapshot()` must parse and apply.

---

## Creating Custom Suites

Create a JSON file with this structure:

```json
{
    "description": "My custom suite",
    "tests": [
        {
            "env": "openfin-workspace",
            "runtime": "42.138.103.4",
            "mechanism": "applySnapshot",
            "content": "iframes-1",
            "count": 5,
            "affinityGroupSize": 3
        },
        {
            "env": "openfin-workspace",
            "runtime": "42.138.103.4",
            "mechanism": "applyRealSnapshot",
            "content": "iframes-1",
            "count": 5,
            "affinityGroupSize": 3
        },
        {
            "env": "openfin-container",
            "runtime": "42.138.103.4",
            "mechanism": "applySnapshot",
            "content": "iframes-1",
            "count": 5,
            "affinityGroupSize": 3
        }
    ]
}
```

### Suite test fields

| Field | Required | Values | Notes |
|-------|----------|--------|-------|
| `env` | Yes | `electron`, `openfin-workspace`, `openfin-container` | |
| `runtime` | For OpenFin | Any runtime version string | |
| `mechanism` | No | See [Mechanisms](#mechanisms) | Default: `createWindow` |
| `content` | No | See [Content Types](#content-types) | Default: `blank` |
| `count` | No | Any positive integer | Default: `10` |
| `windowType` | No | `browser`, `platform` | Default: `browser` |
| `affinity` | No | `different`, `same` | Default: `different` |
| `affinityGroupSize` | No | `0`, `3`, `5`, etc. | Default: `0` (disabled). Overrides `affinity` |
| `runtimeArgs` | No | Custom string | Overrides auto-detected args |
| `timeout` | No | Milliseconds | Default: `120000` |

### Practical examples

**Compare two runtimes head-to-head:**

```json
{
    "description": "42.138.103.4 vs 43.142.101.4",
    "tests": [
        { "env": "openfin-workspace", "runtime": "42.138.103.4", "mechanism": "applySnapshot", "content": "blank", "count": 10 },
        { "env": "openfin-workspace", "runtime": "43.142.101.4", "mechanism": "applySnapshot", "content": "blank", "count": 10 },
        { "env": "openfin-workspace", "runtime": "42.138.103.4", "mechanism": "applySnapshot", "content": "blank", "count": 20 },
        { "env": "openfin-workspace", "runtime": "43.142.101.4", "mechanism": "applySnapshot", "content": "blank", "count": 20 }
    ]
}
```

**Compare programmatic vs real snapshots on one runtime:**

```json
{
    "description": "Programmatic vs Real snapshot on 42.138.103.4",
    "tests": [
        { "env": "openfin-workspace", "runtime": "42.138.103.4", "mechanism": "applySnapshot",     "content": "iframes-1", "count": 5, "affinityGroupSize": 3 },
        { "env": "openfin-workspace", "runtime": "42.138.103.4", "mechanism": "applyRealSnapshot", "content": "iframes-1", "count": 5, "affinityGroupSize": 3 },
        { "env": "openfin-workspace", "runtime": "42.138.103.4", "mechanism": "applySnapshot",     "content": "iframes-1", "count": 20, "affinityGroupSize": 3 },
        { "env": "openfin-workspace", "runtime": "42.138.103.4", "mechanism": "applyRealSnapshot", "content": "iframes-1", "count": 20, "affinityGroupSize": 3 }
    ]
}
```

**Compare all three affinity strategies:**

```json
{
    "description": "Affinity comparison on 42.138.103.4",
    "tests": [
        { "env": "openfin-workspace", "runtime": "42.138.103.4", "mechanism": "applySnapshot", "content": "iframes-1", "count": 10, "affinity": "different" },
        { "env": "openfin-workspace", "runtime": "42.138.103.4", "mechanism": "applySnapshot", "content": "iframes-1", "count": 10, "affinity": "same" },
        { "env": "openfin-workspace", "runtime": "42.138.103.4", "mechanism": "applySnapshot", "content": "iframes-1", "count": 10, "affinityGroupSize": 3 }
    ]
}
```

Then run it:

```powershell
node run-suite.js suites/my-custom-suite.json
```

---

## Pre-Built Suites

Located in the `suites/` directory:

| Suite | Tests | Description | Est. Time |
|-------|-------|-------------|-----------|
| `quick-smoke.json` | 6 | Quick validation: 1 test per environment | ~2 min |
| `customer-snapshot-1iframe.json` | 126 | Customer scenario: applySnapshot, 5/10/20 windows, 1 iframe, 3 affinities, 7 runtimes, 2 envs | ~1.5 hr |
| `real-snapshot-5w-gr3.json` | 7 | Real (getSnapshot) snapshot: 5 windows, gr-3, all 7 runtimes | ~6 min |
| `real-snapshot-20w-gr3.json` | 7 | Real snapshot: 20 windows, gr-3, all 7 runtimes | ~8 min |
| `comprehensive-gr3.json` | 126 | Full matrix: 7 runtimes x 3 mechanisms x 3 affinities x 2 envs | ~2 hr |
| `comprehensive-no903.json` | 126 | Same as above but excluding .903 runtime | ~2 hr |
| `full-matrix.json` | ~80 | Broad matrix of env/mechanism/content/count | ~1.5 hr |
| `affinity-shootout.json` | varies | Compare affinity strategies | ~30 min |
| `full-affinity-shootout.json` | varies | Extended affinity comparison | ~45 min |
| `grouped-affinity-3.json` | varies | Grouped-3 affinity across runtimes | ~20 min |
| `grouped-affinity-sizes.json` | varies | Compare group sizes (3, 5, 10) | ~30 min |
| `gr3-all-versions.json` | varies | Grouped-3 across all runtime versions | ~20 min |
| `904-full-shootout.json` | varies | Focus on .904 runtime | ~30 min |
| `903-retest.json` | varies | Focus on .903 runtime | ~20 min |
| `20-windows-iframes-20.json` | varies | Stress test: 20 windows x 20 iframes | ~30 min |
| `20-windows-iframes-45.json` | varies | Stress test: 20 windows x 45 iframes | ~30 min |
| `applySnapshot-same-affinity.json` | varies | applySnapshot with same affinity | ~15 min |

---

## Output and Results

### Console output

Each test prints a summary like:

```
────────────────────────────────────────
  openfin-workspace | 42.138.103.4 | applySnapshot
  iframes-1 | 5 windows | affinity=different
────────────────────────────────────────
  TOTAL (kickoff → last view ready): 1628 ms
  Snapshot applySnapshot() call:     1576 ms
  Close/Shutdown: 18218 ms
────────────────────────────────────────
```

Suites additionally print a **SUITE RESULTS SUMMARY** table and a **VERSION COMPARISON** ranking.

### JSON result files

Each test saves a JSON file to `results/`:

**Filename pattern:** `{env}_{mechanism}_{content}_{count}_{timestamp}.json`

Example: `of-workspace_applySnapshot_iframes-1_5_2026-03-04T22-24-26-342Z.json`

**Structure:**

```json
{
    "timestamp": "2026-03-04T22:24:26.342Z",
    "config": {
        "env": "openfin-workspace",
        "runtime": "42.138.103.4",
        "mechanism": "applySnapshot",
        "content": "iframes-1",
        "count": 5,
        "windowType": "browser"
    },
    "totalMs": 1628,
    "snapshotMs": 1576,
    "closeMs": 18218,
    "summary": {
        "avgCreateMs": null,
        "maxCreateMs": null,
        "avgViewLoadMs": 237,
        "maxViewLoadMs": 265,
        "minViewLoadMs": 230
    },
    "windows": [
        { "name": "browser-window-1", "viewName": "browser-view-1", "createMs": null, "viewLoadMs": 230 }
    ]
}
```

### Suite summary files

After a suite completes, a `suite-summary-<timestamp>.json` is saved containing the full results array. You can use these for programmatic comparison.

---

## Architecture

```
run-test.js              CLI entry: parse args, start server, launch app, collect results
  ├── server.js          HTTP server: static files + POST /results + snapshot endpoints
  ├── manifest-generator.js   Generates OpenFin manifest with config in URL params
  │
  ├── openfin/workspace/provider.js   WorkspacePlatform provider (auto-run or launcher)
  ├── openfin/container/provider.js   Container/Core API provider
  └── electron/main.js                Electron main process

run-suite.js             Iterates over tests[], runs run-test.js for each one sequentially
manual-launch.js         Starts server + launches OpenFin in manual/interactive mode
```

### Flow (auto-run mode)

1. `run-test.js` starts an HTTP server and generates a manifest with test config in URL params
2. Launches OpenFin (via `openfin` CLI) or Electron pointing to the provider
3. Provider reads config from URL params, runs the test, measures performance
4. Provider POSTs results JSON to `http://localhost:PORT/results`
5. Provider closes windows and calls `platform.quit()`
6. `run-test.js` receives results, measures shutdown time, prints to console, saves JSON, exits

### Flow (applyRealSnapshot two-pass mode)

1. `run-test.js` detects `--mechanism=applyRealSnapshot`
2. **Pass 1:** Launches OpenFin with `mechanism=captureSnapshot` → creates windows → `getSnapshot()` → POSTs to `/save-snapshot` → quits
3. Waits for full exit, kills stale processes, 3s cooldown
4. **Pass 2:** Launches fresh OpenFin with `mechanism=applyRealSnapshot` → fetches snapshot from `/captured-snapshot.json` → `applySnapshot()` → measures timing → POSTs results → quits

### Server endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/*` | GET | Static file serving from project root |
| `/results` | POST | Receives test results JSON |
| `/save-snapshot` | POST | Saves a captured snapshot to `results/captured-snapshot.json` |
| `/captured-snapshot.json` | GET | Serves the most recently captured snapshot |
| `/snapshot-compare` | POST | Saves a snapshot comparison file |

---

## Key Metrics

| Metric | Description |
|--------|-------------|
| **TOTAL** | From `Perf.start()` to last `did-finish-load` event across all views |
| **Create** | Per-window, from before `createWindow()` call to after it resolves |
| **View Load** | Per-view, from test start to `did-finish-load` on that view |
| **Snapshot** | For `applySnapshot`/`applyRealSnapshot`, how long the `applySnapshot()` call took |
| **Close/Shutdown** | From test completion to full process exit (measured by the runner) |

---

## Troubleshooting

### "Port 3001 in use"

The server auto-retries up to 5 times, incrementing the port. You can also specify a different port:

```powershell
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --content blank --count 5 --port 3005
```

### Stale OpenFin processes

If a test hangs or you Ctrl+C, stale OpenFin processes may remain. Kill them:

```powershell
taskkill /F /IM OpenFin.exe /T
```

The test runner does this automatically at the start of each test, but you may need to do it manually if things get stuck.

### Test times out

Increase the timeout:

```powershell
node run-test.js --env openfin-workspace --runtime 42.138.103.4 --content iframes-static-45 --count 50 --timeout 300000
```

For suites, you can set `timeout` per-test in the JSON:

```json
{ "env": "openfin-workspace", "runtime": "42.138.103.4", "content": "iframes-static-45", "count": 50, "timeout": 300000 }
```

### Runtime not found / download fails

OpenFin runtimes are downloaded on first use. If you're offline and the runtime isn't cached, the test will fail. Pre-cache runtimes while online (see [Setup](#pre-caching-openfin-runtimes-for-offline-use)).

### applyRealSnapshot hangs

The two-pass mechanism requires the first pass (capture) to complete and quit before the second pass starts. If the capture pass hangs:

1. Kill stale processes: `taskkill /F /IM OpenFin.exe /T`
2. Try with fewer windows (e.g. `--count 5` instead of `--count 20`)
3. Check that the runtime version supports the window count

### "Command failed to spawn: Aborted"

Usually caused by a lingering OpenFin process from a previous run. Kill stale processes and retry:

```powershell
taskkill /F /IM OpenFin.exe /T
# Wait a few seconds, then retry your command
```
