/**
 * OpenFin Container (Core API) provider.
 * Uses fin.Platform.init() without WorkspacePlatform.
 * Supports createWindow, applySnapshot, and applySnapshotStaggered.
 */

const IPC_CHANNEL = 'perf-test-ipc';
const LAUNCHER_WINDOW_NAME = 'perf-test-launcher';
const params = new URLSearchParams(window.location.search);
const autoRun = params.get('autoRun') === 'true';

const testConfig = {
    mechanism:  params.get('mechanism')  || 'createWindow',
    content:    params.get('content')    || 'blank',
    count:      parseInt(params.get('count') || '10', 10),
    windowType: params.get('windowType') || 'browser',
    port:       params.get('port')       || '3001',
    resultsPort: params.get('resultsPort') || params.get('port') || '3001',
};

const testState = {
    id: 0,
    windows: new Map(),
    isLaunching: false,
};

function contentUrl(content) {
    const base = `http://localhost:${testConfig.port}/common/content`;
    switch (content) {
        case 'blank':      return `${base}/blank.html`;
        case 'example':    return 'https://www.example.com';
        case 'iframes-5':  return `${base}/iframes.html?count=5`;
        case 'iframes-20': return `${base}/iframes.html?count=20`;
        case 'iframes-50': return `${base}/iframes.html?count=50`;
        case 'iframes-static-5':  return `${base}/iframes-static-5.html`;
        case 'iframes-static-20': return `${base}/iframes-static-20.html`;
        case 'iframes-static-45': return `${base}/iframes-static-45.html`;
        case 'iframes-static-50': return `${base}/iframes-static-50.html`;
        default:           return `${base}/blank.html`;
    }
}

function makeConcurrencyQueue(maxConcurrent) {
    let running = 0;
    const pending = [];
    return {
        acquire() {
            if (running < maxConcurrent) { running++; return Promise.resolve(); }
            return new Promise(resolve => { pending.push(() => { running++; resolve(); }); });
        },
        release() {
            running--;
            const next = pending.shift();
            if (next) next();
        },
    };
}

/** Initialize the Container platform with optional stagger override. */
async function initializePlatform(useStagger) {
    if (useStagger) {
        const createWindowQueue = makeConcurrencyQueue(2);
        await fin.Platform.init({
            overrideCallback: async (Provider) => {
                class Override extends Provider {
                    async createWindow(options, callerIdentity) {
                        if (!options?.experimental?.staggerDuringApplySnapshot) {
                            return super.createWindow(options, callerIdentity);
                        }
                        await createWindowQueue.acquire();
                        try {
                            return await super.createWindow(options, callerIdentity);
                        } finally {
                            createWindowQueue.release();
                        }
                    }
                    async applySnapshot(payload, callerIdentity) {
                        for (const win of payload.snapshot.windows) {
                            win.experimental = { ...win.experimental, staggerDuringApplySnapshot: true };
                        }
                        return super.applySnapshot(payload, callerIdentity);
                    }
                }
                return new Override();
            },
        });
    } else {
        await fin.Platform.init({});
    }
    console.log('[container] Platform initialized');
}

const noop = () => {};

/** Wait for a window frame's did-finish-load. */
function waitForWindowFrameLoaded(win, windowName, notify = noop) {
    return new Promise(resolve => {
        let timer;
        const handler = () => {
            clearTimeout(timer);
            const elapsed = Math.round(performance.now() - globalThis.Perf._testStart);
            notify({ type: 'info', message: `    Window frame loaded: ${windowName} (at +${elapsed}ms)` });
            win.removeListener('did-finish-load', handler);
            resolve();
        };
        win.addListener('did-finish-load', handler);
        timer = setTimeout(() => {
            win.removeListener('did-finish-load', handler);
            notify({ type: 'error', message: `    Window frame TIMEOUT (30s): ${windowName}` });
            resolve();
        }, 30000);
    });
}

function waitForViewLoaded(view, viewName, windowName, notify = noop) {
    return new Promise(resolve => {
        let timer;
        const handler = () => {
            clearTimeout(timer);
            globalThis.Perf.viewLoaded(windowName, viewName);
            const w = globalThis.Perf._windows[windowName];
            const loadMs = w?.viewLoadMs ?? '?';
            const readyAt = w?.readyAtMs ?? '?';
            notify({ type: 'info', message: `    View loaded: ${viewName} in ${windowName} (viewLoad=${loadMs}ms, readyAt=${readyAt}ms)` });
            view.removeListener('did-finish-load', handler);
            resolve();
        };
        view.addListener('did-finish-load', handler);
        timer = setTimeout(() => {
            view.removeListener('did-finish-load', handler);
            notify({ type: 'error', message: `    View TIMEOUT (30s): ${viewName} in ${windowName}` });
            resolve();
        }, 30000);
    });
}

function buildWindowOptions(i, url) {
    const id = `${testState.id}-${i + 1}`;
    const winName = `window-${id}`;
    const viewName = `view-${id}`;
    return {
        winName,
        viewName,
        opts: {
            name: winName,
            defaultWidth: 800,
            defaultHeight: 400,
            defaultLeft: 50 + (i * 50),
            defaultTop: 50 + ((i % 5) * 50),
            layout: {
                content: [{
                    type: 'stack',
                    content: [{
                        type: 'component',
                        componentName: 'view',
                        componentState: { name: viewName, url },
                    }],
                }],
            },
        },
    };
}

async function runCreateWindowTest(config, notify = noop) {
    const platform = fin.Platform.getCurrentSync();
    const url = contentUrl(config.content);

    notify({ type: 'info', message: `[Step 2/4] Perf.start() - beginning measurement` });
    globalThis.Perf.start({ ...config, env: 'openfin-container' });

    const allPromises = [];
    for (let i = 0; i < config.count; i++) {
        const { winName, viewName, opts } = buildWindowOptions(i, url);

        const win = fin.Window.wrapSync({ uuid: fin.me.uuid, name: winName });
        const view = fin.View.wrapSync({ uuid: fin.me.uuid, name: viewName });

        allPromises.push(waitForWindowFrameLoaded(win, winName, notify));
        allPromises.push(waitForViewLoaded(view, viewName, winName, notify));

        notify({ type: 'info', message: `  Dispatching window ${i + 1}/${config.count}: ${winName}...` });
        globalThis.Perf.windowCreating(winName);

        const createdPromise = platform.createWindow(opts).then(() => {
            globalThis.Perf.windowCreated(winName);
            const w = globalThis.Perf._windows[winName];
            notify({ type: 'info', message: `  Window ${i + 1}/${config.count} created: ${winName} (${w?.createMs ?? '?'}ms)` });
        });
        allPromises.push(createdPromise);

        testState.windows.set(winName, win);
    }

    notify({ type: 'info', message: `[Step 3/4] All ${config.count} windows dispatched. Waiting for all creates + frames + views...` });
    await Promise.all(allPromises);
    globalThis.Perf.endLaunch();
    notify({ type: 'info', message: `[Step 3/4] All ${config.count} windows + views loaded. Total launch: ${globalThis.Perf._launchMs}ms` });
}

async function runCreateWindowSequentialTest(config, notify = noop) {
    const platform = fin.Platform.getCurrentSync();
    const url = contentUrl(config.content);

    notify({ type: 'info', message: `[Step 2/4] Perf.start() - beginning measurement (sequential)` });
    globalThis.Perf.start({ ...config, env: 'openfin-container' });

    const allPromises = [];
    for (let i = 0; i < config.count; i++) {
        const { winName, viewName, opts } = buildWindowOptions(i, url);

        const win = fin.Window.wrapSync({ uuid: fin.me.uuid, name: winName });
        const view = fin.View.wrapSync({ uuid: fin.me.uuid, name: viewName });

        allPromises.push(waitForWindowFrameLoaded(win, winName, notify));
        allPromises.push(waitForViewLoaded(view, viewName, winName, notify));

        notify({ type: 'info', message: `  Creating window ${i + 1}/${config.count}: ${winName} (awaiting)...` });
        globalThis.Perf.windowCreating(winName);
        await platform.createWindow(opts);
        globalThis.Perf.windowCreated(winName);

        const w = globalThis.Perf._windows[winName];
        notify({ type: 'info', message: `  Window ${i + 1}/${config.count} created: ${winName} (${w?.createMs ?? '?'}ms)` });

        testState.windows.set(winName, win);
    }

    notify({ type: 'info', message: `[Step 3/4] All ${config.count} windows created. Waiting for remaining frames + views...` });
    await Promise.all(allPromises);
    globalThis.Perf.endLaunch();
    notify({ type: 'info', message: `[Step 3/4] All ${config.count} windows + views loaded. Total launch: ${globalThis.Perf._launchMs}ms` });
}

async function runApplySnapshotTest(config, notify = noop) {
    const platform = fin.Platform.getCurrentSync();
    const url = contentUrl(config.content);

    notify({ type: 'info', message: `[Step 2/4] Perf.start() - beginning measurement` });
    globalThis.Perf.start({ ...config, env: 'openfin-container' });

    const allPromises = [];
    const windowOpts = [];
    for (let i = 0; i < config.count; i++) {
        const { winName, viewName, opts } = buildWindowOptions(i, url);
        const win = fin.Window.wrapSync({ uuid: fin.me.uuid, name: winName });
        const view = fin.View.wrapSync({ uuid: fin.me.uuid, name: viewName });
        allPromises.push(waitForWindowFrameLoaded(win, winName, notify));
        allPromises.push(waitForViewLoaded(view, viewName, winName, notify));
        windowOpts.push(opts);
    }

    const snapshot = { windows: windowOpts };

    notify({ type: 'info', message: `  Calling applySnapshot with ${config.count} windows...` });
    globalThis.Perf.snapshotStart();
    await platform.applySnapshot(snapshot);
    globalThis.Perf.snapshotEnd();
    notify({ type: 'info', message: `  applySnapshot resolved (${globalThis.Perf._snapshotMs}ms)` });

    const childWindows = await fin.Application.getCurrentSync().getChildWindows();
    for (const cw of childWindows) {
        if (cw.identity.name === LAUNCHER_WINDOW_NAME) continue;
        const info = await cw.getInfo().catch(() => null);
        if (info) testState.windows.set(cw.identity.name, cw);
    }

    notify({ type: 'info', message: `[Step 3/4] Snapshot applied. Waiting for all ${config.count} window frames + views to finish loading...` });
    await Promise.all(allPromises);
    globalThis.Perf.endLaunch();
    notify({ type: 'info', message: `[Step 3/4] All ${config.count} windows + views loaded. Total launch: ${globalThis.Perf._launchMs}ms` });
}

/** Build a detailed summary array of strings from results. */
function buildSummary(results) {
    const lines = [];
    const s = results.summary || {};
    const cfg = results.config || {};

    lines.push('');
    lines.push('========================================');
    lines.push(`  TEST RESULTS: ${cfg.env || 'openfin-container'}`);
    lines.push(`  Runtime: ${cfg.runtime || '?'}`);
    lines.push(`  Mechanism: ${cfg.mechanism || '?'} | Content: ${cfg.content || '?'} | Count: ${cfg.count || '?'}`);
    lines.push('========================================');
    lines.push(`  TOTAL (kickoff -> last view ready): ${results.totalMs}ms`);

    if (results.snapshotMs != null) {
        lines.push(`  applySnapshot() call: ${results.snapshotMs}ms`);
    }

    if (s.avgCreateMs != null) {
        lines.push(`  Window Create:  avg=${s.avgCreateMs}ms  max=${s.maxCreateMs}ms`);
    }
    if (s.avgViewLoadMs != null) {
        lines.push(`  View Load:      avg=${s.avgViewLoadMs}ms  max=${s.maxViewLoadMs}ms`);
    }

    lines.push('----------------------------------------');
    lines.push('  Per-window breakdown (sorted by readyAt):');

    const sorted = [...(results.windows || [])].sort((a, b) => (a.readyAtMs || 0) - (b.readyAtMs || 0));
    for (const w of sorted) {
        const parts = [`    ${w.name}`];
        if (w.createMs != null) parts.push(`create=${w.createMs}ms`);
        if (w.viewLoadMs != null) parts.push(`viewLoad=${w.viewLoadMs}ms`);
        if (w.readyAtMs != null) parts.push(`readyAt=${w.readyAtMs}ms`);
        lines.push(parts.join('  '));
    }

    lines.push('========================================');
    return lines;
}

/** Close all test windows and measure the close time. */
async function closeAllWindows() {
    try {
        const childWindows = await fin.Application.getCurrentSync().getChildWindows();
        for (const cw of childWindows) {
            if (cw.identity.name === LAUNCHER_WINDOW_NAME) continue;
            if (!testState.windows.has(cw.identity.name)) {
                testState.windows.set(cw.identity.name, cw);
            }
        }
    } catch (_) {}

    const count = testState.windows.size;
    if (count === 0) return;

    console.log(`[Step 5/6] Closing ${count} test windows...`);
    globalThis.Perf.closeStart();

    const closePromises = [];
    for (const [name, win] of testState.windows) {
        closePromises.push(win.close().catch(() => {}));
    }
    await Promise.all(closePromises);
    testState.windows.clear();

    globalThis.Perf.closeEnd();
    console.log(`[Step 5/6] All ${count} windows closed.`);
}

/** Report an error back to the runner even if the test failed. */
async function reportError(message) {
    const resultsPort = testConfig.resultsPort || testConfig.port;
    try {
        await fetch(`http://localhost:${resultsPort}/results`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                timestamp: new Date().toISOString(),
                config: testConfig,
                error: message,
                totalMs: 0,
                summary: {},
                windows: [],
            }),
        });
    } catch (_) {}
}

async function executeTest(config) {
    testState.id++;
    testState.isLaunching = true;

    try {
        const mechanism = config.mechanism || 'createWindow';
        const desc = `${mechanism} x ${config.count} ${config.content} windows`;

        console.log(`[Step 3/6] Running test: ${desc}...`);

        if (mechanism === 'createWindow') {
            await runCreateWindowTest(config);
        } else if (mechanism === 'createWindowSequential') {
            await runCreateWindowSequentialTest(config);
        } else {
            await runApplySnapshotTest(config);
        }

        console.log(`[Step 4/6] All views loaded. Launch complete.`);

        const windowCount = testState.windows.size;
        console.log(`[Step 5/6] Preparing close of ${windowCount} windows...`);
        globalThis.Perf.closeStart();

        const closePromises = [];
        for (const [name, win] of testState.windows) {
            closePromises.push(win.close().catch(() => {}));
        }
        try {
            const childWindows = await fin.Application.getCurrentSync().getChildWindows();
            for (const cw of childWindows) {
                if (cw.identity.name === LAUNCHER_WINDOW_NAME) continue;
                closePromises.push(cw.close().catch(() => {}));
            }
        } catch (_) {}

        const results = globalThis.Perf.results();
        results.config.runtime = await fin.System.getVersion();

        console.log(`[Step 6/6] Posting results before close...`);
        const resultsPort = config.resultsPort || config.port;
        await fetch(`http://localhost:${resultsPort}/results`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(results),
        });

        console.log(`[Step 6/6] Results posted. Closing windows and quitting...`);

        await Promise.all(closePromises);
        testState.windows.clear();
        globalThis.Perf.closeEnd();

        setTimeout(() => {
            fin.Platform.getCurrentSync().quit().catch(() => {});
        }, 1000);
    } catch (err) {
        console.error('[container] Test error:', err);
        await reportError(String(err));
    } finally {
        testState.isLaunching = false;
    }
}

function setupIPCHandlers() {
    fin.InterApplicationBus.subscribe({ uuid: '*' }, IPC_CHANNEL, async (message, identity) => {
        console.log('[container] IPC:', message.action);
        const sendStatus = (status) => {
            fin.InterApplicationBus.send(
                { uuid: identity.uuid, name: identity.name },
                IPC_CHANNEL,
                status
            ).catch(() => {});
        };

        if (message.action === 'run-test') {
            const config = { ...message.options, port: testConfig.port, resultsPort: testConfig.resultsPort };
            const notify = (msg) => sendStatus(msg);
            try {
                testState.id++;
                testState.isLaunching = true;
                const mechanism = config.mechanism || 'createWindow';
                const desc = `${mechanism} / ${config.content} / ${config.count} windows`;

                notify({ type: 'info', message: `[Step 1/4] Starting test: ${desc}` });

                if (mechanism === 'createWindow') await runCreateWindowTest(config, notify);
                else if (mechanism === 'createWindowSequential') await runCreateWindowSequentialTest(config, notify);
                else await runApplySnapshotTest(config, notify);

                const results = globalThis.Perf.results();
                results.config.runtime = await fin.System.getVersion();

                const summary = buildSummary(results);

                sendStatus({
                    type: 'success',
                    message: `[Step 4/4] Test complete!`,
                    summary,
                    results,
                    completed: true,
                });
            } catch (err) {
                sendStatus({ type: 'error', message: `Test failed: ${err.message}`, completed: true });
            } finally {
                testState.isLaunching = false;
            }
        } else if (message.action === 'close-windows') {
            let closed = 0;
            for (const [name, win] of testState.windows) {
                if (name === LAUNCHER_WINDOW_NAME) continue;
                try { await win.close(); closed++; } catch (_) {}
            }
            testState.windows.clear();

            try {
                const childWindows = await fin.Application.getCurrentSync().getChildWindows();
                for (const cw of childWindows) {
                    if (cw.identity.name === LAUNCHER_WINDOW_NAME) continue;
                    try { await cw.close(); closed++; } catch (_) {}
                }
            } catch (_) {}

            sendStatus({ type: 'success', message: `Closed ${closed} test windows.`, completed: true });
        }
    });
}

async function launchLauncherWindow() {
    const launcherWindow = await fin.Window.create({
        name: LAUNCHER_WINDOW_NAME,
        url: `http://localhost:${testConfig.port}/common/launcher.html?platform=container`,
        defaultWidth: 1000,
        defaultHeight: 1000,
        defaultCentered: true,
        frame: true,
        autoShow: true,
        saveWindowState: false,
    });
    await launcherWindow.focus();
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
    const mainWindow = await fin.Window.getCurrent();
    fin.GlobalHotkey.register('CommandOrControl+Shift+Alt+M', () => mainWindow.showDeveloperTools());

    const runtimeVersion = await fin.System.getVersion();
    console.log(`[Step 1/6] Provider loaded. OpenFin Runtime: ${runtimeVersion}`);

    const useStagger = testConfig.mechanism === 'applySnapshotStaggered';
    console.log(`[Step 1/6] Initializing Container Platform...`);
    await initializePlatform(useStagger);
    console.log(`[Step 1/6] Container Platform initialized.`);

    if (autoRun) {
        console.log(`[Step 2/6] Waiting 3s for platform stabilization...`);
        await sleep(3000);
        console.log(`[Step 2/6] Stabilization complete. Starting test.`);
        await executeTest(testConfig);
    } else {
        setupIPCHandlers();
        await launchLauncherWindow();
    }
}

if ('fin' in window && window.fin !== null && typeof window.fin === 'object') {
    main();
} else {
    window.addEventListener('finReady', main);
}
