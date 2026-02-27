/**
 * Performance measurement utilities.
 * Tracks window creation, view loading, and computes summary statistics.
 * Used by both OpenFin (provider context) and Electron (main process).
 */

const Perf = {
    _testStart: null,
    _testEnd: null,
    _windows: {},
    _config: {},
    _viewsExpected: 0,
    _viewsLoaded: 0,
    _onAllLoaded: null,

    /** Start a new test run, recording the origin timestamp. */
    start(config) {
        Perf._testStart = performance.now();
        Perf._testEnd = null;
        Perf._launchMs = null;
        Perf._closeStart = null;
        Perf._closeMs = null;
        Perf._snapshotStart = null;
        Perf._snapshotEnd = null;
        Perf._snapshotMs = null;
        Perf._windows = {};
        Perf._config = config;
        Perf._viewsExpected = config.count || 0;
        Perf._viewsLoaded = 0;
        Perf._onAllLoaded = null;
        console.log(`[perf] Test started: ${JSON.stringify(config)}`);
    },

    /** Record that we're about to create a window. */
    windowCreating(name) {
        const now = performance.now();
        Perf._windows[name] = { createStart: now };
        console.log(`[perf][+${Perf._elapsed(now)}] Creating: ${name}`);
    },

    /** Record that a window has been created (returned from API call). */
    windowCreated(name) {
        const now = performance.now();
        const w = Perf._windows[name];
        if (w) {
            w.createEnd = now;
            w.createMs = Math.round(now - w.createStart);
            console.log(`[perf][+${Perf._elapsed(now)}] Created: ${name} (${w.createMs}ms)`);
        }
    },

    /** Record that a view's did-finish-load event fired. */
    viewLoaded(windowName, viewName) {
        const now = performance.now();
        const w = Perf._windows[windowName] || (Perf._windows[windowName] = {});
        w.loadEnd = now;
        w.readyAtMs = Math.round(now - Perf._testStart);
        w.viewLoadMs = w.createStart ? Math.round(now - w.createStart) : null;
        w.viewName = viewName;
        console.log(`[perf][+${Perf._elapsed(now)}] View loaded: ${viewName} in ${windowName} (readyAt ${w.readyAtMs}ms, viewLoad ${w.viewLoadMs ?? '?'}ms)`);

        Perf._viewsLoaded++;
        if (Perf._viewsLoaded >= Perf._viewsExpected && Perf._onAllLoaded) {
            Perf._onAllLoaded();
        }
    },

    /** Record that an applySnapshot call started. */
    snapshotStart() {
        const now = performance.now();
        console.log(`[perf][+${Perf._elapsed(now)}] applySnapshot started`);
        Perf._snapshotStart = now;
    },

    /** Record that an applySnapshot call resolved. */
    snapshotEnd() {
        const now = performance.now();
        Perf._snapshotEnd = now;
        Perf._snapshotMs = Math.round(now - Perf._snapshotStart);
        console.log(`[perf][+${Perf._elapsed(now)}] applySnapshot resolved (${Perf._snapshotMs}ms)`);
    },

    /**
     * Returns a promise that resolves when all expected views have loaded.
     * Must be called after start().
     */
    waitForAllLoaded() {
        if (Perf._viewsLoaded >= Perf._viewsExpected) {
            return Promise.resolve();
        }
        return new Promise(resolve => {
            Perf._onAllLoaded = resolve;
        });
    },

    /** Finalize the launch portion and return intermediate results. */
    endLaunch() {
        Perf._testEnd = performance.now();
        Perf._launchMs = Math.round(Perf._testEnd - Perf._testStart);
        console.log(`[perf] All views loaded. Launch total: ${Perf._launchMs}ms`);
    },

    /** Record that we started closing all windows. */
    closeStart() {
        Perf._closeStart = performance.now();
        console.log(`[perf] Close started`);
    },

    /** Record that all windows have been closed. */
    closeEnd() {
        const now = performance.now();
        Perf._closeMs = Math.round(now - Perf._closeStart);
        console.log(`[perf] Close complete: ${Perf._closeMs}ms`);
    },

    /** Build and return the final results object (call after closeEnd or endLaunch). */
    results() {
        const totalMs = Perf._launchMs || Math.round((Perf._testEnd || performance.now()) - Perf._testStart);

        const windows = Object.entries(Perf._windows).map(([name, w]) => ({
            name,
            viewName: w.viewName,
            createMs: w.createMs || null,
            viewLoadMs: w.viewLoadMs || null,
            readyAtMs: w.readyAtMs || null,
        }));

        const createTimes = windows.map(w => w.createMs).filter(v => v != null);
        const viewLoadTimes = windows.map(w => w.viewLoadMs).filter(v => v != null);

        const avg = arr => arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : null;
        const max = arr => arr.length ? Math.max(...arr) : null;
        const min = arr => arr.length ? Math.min(...arr) : null;

        const summary = {
            avgCreateMs: avg(createTimes),
            maxCreateMs: max(createTimes),
            avgViewLoadMs: avg(viewLoadTimes),
            maxViewLoadMs: max(viewLoadTimes),
        };

        return {
            timestamp: new Date().toISOString(),
            config: Perf._config,
            totalMs,
            snapshotMs: Perf._snapshotMs || null,
            closeMs: Perf._closeMs || null,
            summary,
            windows,
        };
    },

    /** @deprecated Use endLaunch() + results() instead */
    end() {
        Perf.endLaunch();
        return Perf.results();
    },

    _elapsed(now) {
        return String(Math.round(now - Perf._testStart)).padStart(6);
    },
};

// Make available globally
if (typeof globalThis !== 'undefined') {
    globalThis.Perf = Perf;
}

// Support both ESM and script tag
if (typeof module !== 'undefined') {
    module.exports = Perf;
}
