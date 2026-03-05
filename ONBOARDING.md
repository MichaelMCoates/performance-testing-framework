# Onboarding Document: Performance Testing Framework — Context Transfer

This document is meant to be consumed by another LLM/Cursor chat instance working in the **Workspace source repo**. It contains everything learned during the development and execution of this performance testing framework, including key findings, technical details, architectural decisions, and the plan going forward.

---

## 1. The Problem

**Customer**: LSEG (London Stock Exchange Group)
**Issue**: LSEG is migrating from Electron to OpenFin Workspace. They are reporting that loading windows via `WorkspacePlatform.applySnapshot()` is unacceptably slow compared to their Electron implementation.

**Their test scenario**:
- Click a button on the Dock
- Call `WorkspacePlatform.applySnapshot()` with snapshots of **5, 10, and 20 Workspace Browser windows**
- Each Browser window contains **1 View** with **1 iframe** (their layout app)
- Process affinity: **3 views per renderer process** (using explicit `processAffinity` tags, NOT `viewProcessAffinityStrategy`)
- All windows share a single Chromium **browser process** (this is the default OpenFin behavior)
- Timer starts when `applySnapshot` is called
- Timer stops when the View has fully rendered (their app renders an `<h2>` element that a Playwright test waits for)

**Their results**: ~50+ seconds to load 20 windows in Workspace, vs ~23 seconds in Electron.

## 2. Why Our Initial Fix Failed

We initially thought the bottleneck was in the **Browser Process preloads** (scripts injected into every webcontents and iframe from the Browser Process into each Renderer). Our fix was to make the initial preload small and lazy-load the heavier modules. This showed improvement in our tests but NOT in the customer's environment because:

1. **Wrong content type**: We tested with views containing **30+ iframes each**. The customer uses **1 iframe per view**. With 30+ iframes, preload overhead dominated. With 1 iframe, it doesn't.
2. **Wrong affinity strategy**: We tested with `viewProcessAffinityStrategy: "same"` (all views in one renderer). The customer uses **grouped-3** (3 views per renderer). The `"same"` strategy generally makes the baseline slower on stable runtimes, so our "fix" (which leveraged caching within shared renderers) showed artificial improvement from that baseline.
3. **Measuring different things**: The combination of wrong content + wrong affinity meant we were measuring a fundamentally different performance profile.

## 3. What This Testing Framework Does

This is a standalone Node.js project (`performance-testing-framework/`) that automates performance testing across three environments:

- **OpenFin Workspace** — uses `WorkspacePlatform.init()` and the Workspace Platform API
- **OpenFin Container** — uses the core `fin.Platform` API directly, no Workspace bundle
- **Electron** — native Electron `BrowserWindow`/`BrowserView`

### Architecture

```
run-test.js              CLI: start server, generate manifest, launch app, collect results
  ├── server.js          HTTP server: static files + POST /results + snapshot save/load
  ├── manifest-generator.js   Generates OpenFin manifests with config in URL params
  │
  ├── openfin/workspace/provider.js   WorkspacePlatform provider
  ├── openfin/container/provider.js   Container/Core API provider
  └── electron/main.js                Electron main process

run-suite.js             Runs a JSON array of tests sequentially, each in a fresh process
manual-launch.js         Interactive launcher UI for ad-hoc testing
```

### How a test runs

1. `run-test.js` starts an HTTP server on port 3001 and generates an OpenFin manifest with test config encoded in the provider URL's query params
2. Launches OpenFin via the `openfin` CLI (or Electron via the `electron` binary)
3. The provider reads config from `window.location.search`, runs the test (creates windows, measures timing)
4. Provider POSTs results JSON to `http://localhost:PORT/results`
5. Provider closes windows and calls `platform.quit()`
6. `run-test.js` receives results, measures shutdown time, saves JSON, exits

### Key files

| File | Purpose |
|------|---------|
| `run-test.js` | Single test CLI runner. All options: `--env`, `--runtime`, `--mechanism`, `--content`, `--count`, `--affinity`, `--affinity-group-size`, `--timeout`, etc. |
| `run-suite.js` | Suite runner. Takes a JSON file of test configs, runs each sequentially. Options: `--randomize`, `--port`, `--results-dir` |
| `server.js` | HTTP server with static file serving, `POST /results`, `POST /save-snapshot`, `GET /captured-snapshot.json` |
| `manifest-generator.js` | Generates OpenFin manifests from templates, injecting runtime version, args, provider URL params, affinity strategy |
| `common/perf.js` | Performance measurement utilities. Tracks window creation, view loading, snapshot timing. Used by all three environments |
| `openfin/workspace/provider.js` | The Workspace provider — this is the most important file. Contains all test mechanisms (createWindow, applySnapshot, applyRealSnapshot, captureSnapshot) |
| `openfin/workspace/dist/workspace-platform.bundle.js` | Pre-built Workspace Platform bundle. **This is the file you'd replace with a custom build that has performance markers** |

### Mechanisms

| Mechanism | What it does |
|-----------|-------------|
| `createWindow` | Creates N windows in parallel using `fin.Window.create()` |
| `createWindowSequential` | Creates N windows one at a time, waiting for each to load |
| `applySnapshot` | Creates all N windows in one `platform.applySnapshot()` call with a minimal ~2KB programmatic snapshot |
| `applySnapshotStaggered` | Like applySnapshot but throttles to 2 concurrent `createWindow` calls via a platform override |
| `captureSnapshot` | Creates windows, captures `getSnapshot()`, saves to server, quits. No timing. |
| `applyRealSnapshot` | **Two-pass**: (1) fresh process creates windows + captures `getSnapshot()` + quits, (2) fresh process loads captured snapshot from server + applies it + measures. Ensures no warm-runtime bias |

### Content types matching LSEG's setup

- **`iframes-1`** — 1 dynamically generated iframe. This is what most closely matches LSEG's setup (1 View with 1 iframe)
- **`blank`** — empty page, good for isolating Window/View creation overhead from content loading
- **`iframes-static-45`** — 45 static iframes, matches our original (incorrect) test setup

### Affinity

- `--affinity different` — each view gets its own renderer (default)
- `--affinity same` — all views share one renderer
- `--affinity-group-size 3` — groups of 3 views share a renderer. **This matches LSEG's configuration** and is the most important setting to use

## 4. Key Findings From Testing

### 4.1 Runtime comparison (7 runtimes tested)

Runtimes tested: `40.130.105.8`, `41.134.103.3`, `42.138.102.4`, `42.138.103.2`, `42.138.103.4`, `42.138.103.904`, `43.142.101.4`

**Finding**: No single runtime version showed a dramatic improvement. Variance between runtimes for the same test config was typically 5-15%, with no clear winner across all scenarios.

### 4.2 Mechanism ranking (for Workspace, grouped-3 affinity, iframes-1 content)

For the customer's actual scenario (applySnapshot with grouped-3):
- `applySnapshot` (programmatic) is the fastest mechanism
- `createWindow` (parallel) is ~10-20% slower
- `createWindowSequential` is significantly slower (serial bottleneck)
- `applySnapshotStaggered` offers no benefit for small window counts

### 4.3 Container vs Workspace overhead

OpenFin Container (core API, no Workspace bundle) is consistently faster than Workspace by approximately:
- **5 windows**: ~200-500ms faster
- **10 windows**: ~500-1000ms faster  
- **20 windows**: ~1000-2000ms faster

This overhead is the **Workspace Browser window chrome** — the tab bar, title bar, and all the Workspace-specific UI that gets loaded for every Browser window. This is a significant and consistent overhead that scales linearly with window count.

### 4.4 Real snapshot vs programmatic snapshot (CRITICAL FINDING)

**This is the most important finding.** We discovered that the **type of snapshot** passed to `applySnapshot()` has a massive impact on performance.

A **programmatic snapshot** is a minimal ~2KB JSON with just window/view definitions that we construct in code. A **real snapshot** (from `platform.getSnapshot()`) is a full **74-290KB** JSON that includes layout configuration, page definitions, workspace metadata, window bounds, tab state, etc.

| Config | Programmatic (avg) | Real Snapshot | Ratio |
|--------|-------------------|---------------|-------|
| 5 windows, iframes-1, gr-3 | ~1,600ms | ~3,100ms | **~1.9x** |
| 20 windows, iframes-1, gr-3 | ~6,600ms | ~12,700ms | **~1.9x** |

**Real snapshots are consistently ~1.8-2.0x slower than programmatic ones across all runtimes.**

This means:
- The customer is likely using captured/saved snapshots (which are equivalent to `getSnapshot()` output)
- The `applySnapshot()` implementation spends significant time parsing and applying the extra metadata in real snapshots
- **There may be low-hanging fruit in optimizing how `applySnapshot` handles complex snapshot JSON** — potentially skipping or lazy-loading fields that aren't needed for initial window creation

### 4.5 Test order effects

We ran randomized vs ordered test execution and found:
- Test order introduces **~2-5s variance** in individual test results
- This is likely due to OS-level caching, CPU thermal state, and background processes
- Not a major concern, but worth randomizing when doing comparative analysis

### 4.6 Where the time is actually spent (what we DON'T know yet)

We can measure:
- Total time from `applySnapshot()` call to all views' `did-finish-load` events
- The `applySnapshot()` API call resolution time
- Per-window frame load time
- Per-view load time

What we CANNOT currently measure (and need to):
- Time spent inside Workspace's `applySnapshot` override before it calls the Container/core `applySnapshot`
- Time spent in Workspace's `createWindow` override (Browser window initialization, tab bar setup, page creation)
- Time between `createWindow` resolving and the View actually starting to load
- Time spent in preload script injection and execution
- Time spent in Container's `applySnapshot` implementation (parsing, validation, window creation orchestration)
- Time between the core platform creating a window and that window's frame being ready
- Time for the layout system to initialize inside each Browser window

## 5. What Needs to Happen Next (In the Workspace Repo)

### 5.1 Add performance instrumentation to Workspace

The primary goal is to add `performance.mark()` and `performance.measure()` calls throughout the Workspace `applySnapshot` flow so we can see exactly where time is spent. Key locations to instrument:

**In Workspace Platform's `applySnapshot` override:**
- Entry point (before any processing)
- After snapshot validation/normalization
- Before calling the core/Container `applySnapshot`
- After core `applySnapshot` returns

**In Workspace's `createWindow` override (called by applySnapshot for each window):**
- Entry point
- Before/after creating the Browser window shell
- Before/after initializing the layout system
- Before/after setting up the tab bar / chrome
- Before/after creating the View
- Before/after navigating the View to its URL
- Before/after each preload script injection

**In Container's platform `applySnapshot`:**
- Entry point
- Snapshot parsing / validation time
- Per-window creation orchestration
- How windows are batched (parallel? serial? limited concurrency?)

### 5.2 Create a custom Workspace build with markers

Build a version of `workspace-platform.bundle.js` that includes these performance markers. The testing framework can then consume these markers by having the provider collect `performance.getEntriesByType('mark')` and `performance.getEntriesByType('measure')` and include them in the results JSON posted to the server.

### 5.3 Integrate with the testing framework

The test framework's Workspace provider (`openfin/workspace/provider.js`) imports the Workspace bundle from `./dist/workspace-platform.bundle.js`. To test a custom build:

1. Build your instrumented version of `@openfin/workspace-platform`
2. Copy the output bundle to `performance-testing-framework/openfin/workspace/dist/workspace-platform.bundle.js`
3. Run tests as normal

Or better yet, set up a symlink or build script that outputs directly to that path.

### 5.4 Investigate real snapshot overhead

The 1.9x slowdown from real snapshots is the most actionable finding. In the Workspace `applySnapshot` flow:
- Profile what happens when a large (290KB) snapshot is passed vs a minimal (2KB) one
- Check if the full snapshot is being deep-cloned, serialized/deserialized, or iterated multiple times
- Check if unnecessary fields (like `workspacePlatform.pages[].layout.settings`, window bounds history, tab metadata) are being processed during window creation
- Consider whether `applySnapshot` could skip or defer processing of non-essential fields

### 5.5 Investigate Browser window startup

Each Workspace Browser window has overhead vs a plain Container platform window (~200-500ms per window). Investigate:
- What executes during Browser window initialization?
- Is the tab bar rendered before the View is loaded? (it should be deferred)
- Are there re-renders or expensive DOM operations during startup?
- What CSS/JS is loaded for the Browser chrome?
- Is there a sequential dependency chain that could be parallelized?

### 5.6 Bundle size investigation

The Workspace Platform bundle is large. Check:
- Is the full bundle loaded and parsed for every window, or just the provider?
- Could tree-shaking or code splitting reduce what's loaded during `applySnapshot`?
- Are there heavy dependencies that are imported but not needed during window creation?

## 6. Technical Details About the Provider

### How Workspace Platform initialization works

```javascript
import WorkspacePlatform from './dist/workspace-platform.bundle.js';

await WorkspacePlatform.init({
    browser: { title: 'Perf Test Browser' },
    overrideCallback: async (Provider) => {
        class Override extends Provider {
            async createWindow(options, callerIdentity) {
                // This is called for each window during applySnapshot
                return super.createWindow(options, callerIdentity);
            }
            async applySnapshot(payload, callerIdentity) {
                // This wraps the core platform's applySnapshot
                return super.applySnapshot(payload, callerIdentity);
            }
        }
        return new Override();
    },
});
```

The `overrideCallback` is the extension point where customers (and our tests) can intercept and modify behavior. The `super.createWindow()` and `super.applySnapshot()` calls go into the Workspace bundle, which then calls the Container/core APIs.

### How the testing framework builds snapshots

**Programmatic snapshot** (what our tests use by default):
```javascript
const windowOpts = [];
for (let i = 0; i < count; i++) {
    windowOpts.push({
        name: `browser-window-${testId}-${i}`,
        layout: {
            content: [{
                type: 'stack',
                content: [{
                    type: 'component',
                    componentName: 'view',
                    componentState: {
                        name: `browser-view-${testId}-${i}`,
                        url: contentUrl,
                        processAffinity: affinityTag, // e.g. "group-0", "group-1"
                    }
                }]
            }]
        }
    });
}
await platform.applySnapshot({ windows: windowOpts });
```

**Real snapshot** (from `getSnapshot()`): Contains all of the above PLUS:
- `workspacePlatform.pages[]` with full page definitions
- `layout.settings` with golden-layout configuration
- `layout.dimensions` 
- Window bounds, state, frame info
- Tab group metadata
- ~30-40x larger than programmatic

### How affinity grouping works

```javascript
function getViewAffinity(viewIndex, groupSize) {
    if (!groupSize || groupSize <= 0) return undefined;
    return `perf-group-${Math.floor(viewIndex / groupSize)}`;
}
```

With `groupSize=3`: views 0-2 get `perf-group-0`, views 3-5 get `perf-group-1`, etc. This is set on the view's `processAffinity` in the `componentState`. The platform-level `viewProcessAffinityStrategy` is deleted from the manifest when explicit grouping is used.

### How timing works

The `common/perf.js` module is loaded globally. It uses `performance.now()` for all measurements:
- `Perf.start(config)` — records test start time
- `Perf.snapshotStart()` / `Perf.snapshotEnd()` — brackets the `applySnapshot()` call
- `Perf.viewLoaded(windowName, viewName)` — called when `did-finish-load` fires on a view
- `Perf.endLaunch()` — called when all views have loaded
- `Perf.results()` — computes summary stats and returns the results object

View loading is detected by listening to `did-finish-load` events on `fin.View` objects:
```javascript
view.addListener('did-finish-load', handler);
```

Window frame loading is detected similarly on `fin.Window` objects.

## 7. The Testing Framework's File Inventory

### Suite files (in `suites/`)

Most relevant to the customer's scenario:
- `customer-snapshot-1iframe.json` — 126 tests: applySnapshot, 5/10/20 windows, 1 iframe, 3 affinities, 7 runtimes, 2 envs
- `real-snapshot-5w-gr3.json` — 7 tests: applyRealSnapshot, 5 windows, grouped-3, all runtimes
- `real-snapshot-20w-gr3.json` — 7 tests: applyRealSnapshot, 20 windows, grouped-3, all runtimes

### Results (in `results/`)

All test results are JSON files with naming convention: `{env}_{mechanism}_{content}_{count}_{timestamp}.json`

Suite summaries: `suite-summary-{timestamp}.json`

Captured snapshots: `captured-snapshot.json` (overwritten each time)

## 8. What the Next Cursor Chat Should Do

In priority order:

1. **Understand the Workspace `applySnapshot` code path** — trace from `WorkspacePlatform.applySnapshot()` all the way down to individual window creation. Map every function call, async boundary, and potential bottleneck.

2. **Add performance markers** — instrument the code path with `performance.mark()` / `performance.measure()` at every significant step. Make these markers available to the testing framework.

3. **Build a custom Workspace bundle** — with the performance markers included. Drop it into `performance-testing-framework/openfin/workspace/dist/workspace-platform.bundle.js`.

4. **Update the testing framework's provider** to collect `performance.getEntriesByType('mark')` and include them in the results JSON.

5. **Run the customer's exact scenario** — 5/10/20 windows, 1 iframe, grouped-3 affinity, using `applyRealSnapshot` (real captured snapshots, cold process), and analyze the detailed performance markers to find the bottleneck.

6. **Investigate the real-snapshot overhead** — why is processing a 290KB snapshot 1.9x slower than a 2KB one? Is it parsing, validation, iteration, or something in the layout system?

7. **Investigate Browser window startup overhead** — why does Workspace add ~200-500ms per window compared to Container? What in the Browser window chrome initialization is expensive?

8. **Prototype fixes** — once bottlenecks are identified, create optimized builds and test them with the framework.

## 9. Environment Details

- **OS**: Windows 10 (10.0.22631) — the testing framework is cross-platform (Windows + macOS) using `process.platform === 'win32'` checks
- **Node.js**: v20.14.0
- **Shell**: PowerShell on Windows, bash/zsh on macOS
- **Package manager**: npm
- **Build tool**: Vite (for Workspace bundle)
- **OpenFin CLI**: `openfin` package in each variant's `node_modules/.bin/`

### macOS specifics

The framework handles macOS with:
- `pkill -9 -f 'OpenFin'` instead of `taskkill`
- No `.cmd` suffix on bin paths
- `shell: false` in `spawn()` calls (only `shell: true` on Windows)

## 10. Key OpenFin APIs Referenced

| API | What it does | Doc link |
|-----|-------------|----------|
| `WorkspacePlatform.init()` | Initializes Workspace with browser config + overrides | Workspace docs |
| `WorkspacePlatform.applySnapshot()` | Creates windows from a snapshot (Workspace version, creates Browser windows) | [Link](https://cdn.openfin.co/workspace/docs/platform/latest/interfaces/WorkspacePlatformModule.html#applySnapshot) |
| `fin.Platform.applySnapshot()` | Core/Container version of applySnapshot (creates platform windows) | [Link](https://cdn.openfin.co/docs/javascript/stable/classes/OpenFin.Platform.html#applySnapshot) |
| `platform.getSnapshot()` | Captures the current platform state as a snapshot JSON | Core API |
| `fin.Window.create()` | Creates a single window | Core API |
| `fin.View.create()` | Creates a single view (tab) | Core API |
| `view.addListener('did-finish-load')` | Fires when a view's content finishes loading | Core API (mirrors Electron's webContents event) |
| `processAffinity` | View option that groups views into shared renderer processes | Core API |
| `viewProcessAffinityStrategy` | Platform-level setting: `"different"` (default), `"same"` | Manifest option |

## 11. Summary of Numbers (Reference Data)

### Programmatic applySnapshot — 5 windows, iframes-1, grouped-3, Workspace

| Runtime | Total (ms) |
|---------|-----------|
| 40.130.105.8 | 1,588 |
| 41.134.103.3 | 1,527 |
| 42.138.102.4 | 1,853 |
| 42.138.103.2 | 1,662 |
| 42.138.103.4 | 1,628 |
| 42.138.103.904 | 1,803 |
| 43.142.101.4 | 1,678 |

### Real (getSnapshot) applySnapshot — 5 windows, iframes-1, grouped-3, Workspace

| Runtime | Total (ms) | vs Programmatic |
|---------|-----------|----------------|
| 40.130.105.8 | 2,853 | 1.80x |
| 41.134.103.3 | 2,944 | 1.93x |
| 42.138.102.4 | 3,026 | 1.63x |
| 42.138.103.2 | 2,912 | 1.75x |
| 42.138.103.4 | 3,190 | 1.96x |
| 42.138.103.904 | 3,331 | 1.85x |
| 43.142.101.4 | 3,235 | 1.93x |

### Real applySnapshot — 20 windows, iframes-1, grouped-3, Workspace

| Runtime | Total (ms) | vs Programmatic |
|---------|-----------|----------------|
| 40.130.105.8 | 12,706 | 1.95x |
| 41.134.103.3 | 13,069 | 2.06x |
| 42.138.102.4 | 13,991 | 1.88x |
| 42.138.103.2 | 12,364 | 1.82x |
| 42.138.103.4 | 11,991 | 1.76x |
| 43.142.101.4 | 12,585 | 1.95x |

### Snapshot sizes

| Type | 5 windows | 20 windows |
|------|-----------|------------|
| Programmatic | ~2 KB | ~8 KB |
| Real (getSnapshot) | ~74 KB | ~290 KB |

---

*This document was generated from a Cursor chat session that built and iterated on this testing framework over multiple days of testing. The framework repo is at `performance-testing-framework/` and contains all source code, suite definitions, and result data referenced above.*
