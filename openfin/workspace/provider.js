/**
 * WorkspacePlatform provider.
 * Reads test config from URL query params (auto-run mode) or sets up the
 * launcher window for manual operation.
 */
import WorkspacePlatform from './dist/workspace-platform.bundle.js';

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

/** Build the URL for a view based on content type. */
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

/**
 * Create a concurrency queue that limits parallel window creation to N at a time.
 * Used for the staggered applySnapshot mechanism.
 */
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

/** Initialize WorkspacePlatform with optional stagger override. */
async function initializePlatform() {
    const mechanism = testConfig.mechanism;
    const useStagger = mechanism === 'applySnapshotStaggered';

    const overrideCallback = async (Provider) => {
        const createWindowQueue = makeConcurrencyQueue(2);
        class Override extends Provider {
            async handleSaveModalOnPageClose() {
                return { shouldShowModal: false };
            }
            async createWindow(options, callerIdentity) {
                if (!useStagger || options?.reason !== 'apply-snapshot') {
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
                if (useStagger) {
                    for (const win of payload.snapshot.windows) {
                        win.experimental = { ...win.experimental, staggerDuringApplySnapshot: true };
                        win.reason = 'apply-snapshot';
                    }
                }
                return super.applySnapshot(payload, callerIdentity);
            }
        }
        return new Override();
    };

    await WorkspacePlatform.init({
        browser: { title: 'Perf Test Browser' },
        overrideCallback,
    });

    console.log('[provider] WorkspacePlatform initialized');
}

/** No-op notify function for auto-run mode (logs to console only). */
const noop = () => {};

/** Wait for a window frame's did-finish-load (browser chrome / tab bar). */
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

/** Wait for a view's did-finish-load event. */
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

/** Build a WorkspacePlatform browser window options object. */
function buildBrowserWindowOptions(i, url) {
    const id = `${testState.id}-${i + 1}`;
    const winName = `browser-window-${id}`;
    const viewName = `browser-view-${id}`;

    return {
        winName,
        viewName,
        opts: {
            name: winName,
            defaultWidth: 800,
            defaultHeight: 400,
            defaultLeft: 50 + (i * 50),
            defaultTop: 50 + ((i % 5) * 50),
            defaultCentered: false,
            saveWindowState: false,
            workspacePlatform: {
                pages: [{
                    title: `Tab ${i + 1}`,
                    pageId: `page-${id}`,
                    layout: {
                        settings: { hasHeaders: false },
                        content: [{
                            type: 'stack',
                            content: [{
                                type: 'component',
                                componentName: 'view',
                                componentState: { name: viewName, url },
                            }],
                        }],
                    },
                }],
            },
        },
    };
}

/** Build a simple platform window options object (no workspace browser). */
function buildPlatformWindowOptions(i, url) {
    const id = `${testState.id}-${i + 1}`;
    const winName = `platform-window-${id}`;
    const viewName = `platform-view-${id}`;

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

/** Run a test using createWindow (all fired in parallel). */
async function runCreateWindowTest(config, notify = noop) {
    const platform = WorkspacePlatform.getCurrentSync();
    const url = contentUrl(config.content);
    const buildFn = config.windowType === 'platform' ? buildPlatformWindowOptions : buildBrowserWindowOptions;
    const createFn = config.windowType === 'platform'
        ? (opts) => fin.Platform.getCurrentSync().createWindow(opts)
        : (opts) => platform.Browser.createWindow(opts);

    notify({ type: 'info', message: `[Step 2/4] Perf.start() - beginning measurement` });
    globalThis.Perf.start({ ...config, env: 'openfin-workspace' });

    const allPromises = [];

    for (let i = 0; i < config.count; i++) {
        const { winName, viewName, opts } = buildFn(i, url);

        const win = fin.Window.wrapSync({ uuid: fin.me.uuid, name: winName });
        const view = fin.View.wrapSync({ uuid: fin.me.uuid, name: viewName });

        allPromises.push(waitForWindowFrameLoaded(win, winName, notify));
        allPromises.push(waitForViewLoaded(view, viewName, winName, notify));

        notify({ type: 'info', message: `  Dispatching window ${i + 1}/${config.count}: ${winName}...` });
        globalThis.Perf.windowCreating(winName);

        const createdPromise = createFn(opts).then(() => {
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

/** Run a test using createWindow (sequential, each awaited before the next). */
async function runCreateWindowSequentialTest(config, notify = noop) {
    const platform = WorkspacePlatform.getCurrentSync();
    const url = contentUrl(config.content);
    const buildFn = config.windowType === 'platform' ? buildPlatformWindowOptions : buildBrowserWindowOptions;
    const createFn = config.windowType === 'platform'
        ? (opts) => fin.Platform.getCurrentSync().createWindow(opts)
        : (opts) => platform.Browser.createWindow(opts);

    notify({ type: 'info', message: `[Step 2/4] Perf.start() - beginning measurement (sequential)` });
    globalThis.Perf.start({ ...config, env: 'openfin-workspace' });

    const allPromises = [];

    for (let i = 0; i < config.count; i++) {
        const { winName, viewName, opts } = buildFn(i, url);

        const win = fin.Window.wrapSync({ uuid: fin.me.uuid, name: winName });
        const view = fin.View.wrapSync({ uuid: fin.me.uuid, name: viewName });

        allPromises.push(waitForWindowFrameLoaded(win, winName, notify));
        allPromises.push(waitForViewLoaded(view, viewName, winName, notify));

        notify({ type: 'info', message: `  Creating window ${i + 1}/${config.count}: ${winName} (awaiting)...` });
        globalThis.Perf.windowCreating(winName);
        await createFn(opts);
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

/** Run a test using applySnapshot. */
async function runApplySnapshotTest(config, notify = noop) {
    const platform = WorkspacePlatform.getCurrentSync();
    const url = contentUrl(config.content);
    const buildFn = config.windowType === 'platform' ? buildPlatformWindowOptions : buildBrowserWindowOptions;

    notify({ type: 'info', message: `[Step 2/4] Perf.start() - beginning measurement` });
    globalThis.Perf.start({ ...config, env: 'openfin-workspace' });

    const allPromises = [];
    for (let i = 0; i < config.count; i++) {
        const { winName, viewName } = buildFn(i, url);
        const win = fin.Window.wrapSync({ uuid: fin.me.uuid, name: winName });
        const view = fin.View.wrapSync({ uuid: fin.me.uuid, name: viewName });
        allPromises.push(waitForWindowFrameLoaded(win, winName, notify));
        allPromises.push(waitForViewLoaded(view, viewName, winName, notify));
    }

    const windowOpts = [];
    for (let i = 0; i < config.count; i++) {
        const { opts } = buildFn(i, url);
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
    lines.push(`  TEST RESULTS: ${cfg.env || 'openfin-workspace'}`);
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

/** Execute a test based on config, post results, quit. Used by auto-run mode. */
async function executeTest(config) {
    testState.id++;
    testState.isLaunching = true;

    try {
        const mechanism = config.mechanism || 'createWindow';
        const desc = `${mechanism} x ${config.count} ${config.content} ${config.windowType} windows`;

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
        console.log(`[Step 5/6] Measuring close of ${windowCount} windows...`);
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

        console.log(`[Step 6/6] Posting results (close will be measured on quit)...`);
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
            WorkspacePlatform.getCurrentSync().quit().catch(() => {});
        }, 1000);
    } catch (err) {
        console.error('[provider] Test error:', err);
        await reportError(String(err));
        testState.isLaunching = false;
    }
}

/** Set up IPC for manual launcher mode. */
function setupIPCHandlers() {
    fin.InterApplicationBus.subscribe({ uuid: '*' }, IPC_CHANNEL, async (message, identity) => {
        console.log('[provider] IPC:', message.action);
        const sendStatus = (status) => {
            fin.InterApplicationBus.send(
                { uuid: identity.uuid, name: identity.name },
                IPC_CHANNEL,
                status
            ).catch(() => {});
        };

        if (message.action === 'run-test') {
            const config = {
                ...message.options,
                port: testConfig.port,
                resultsPort: testConfig.resultsPort,
            };
            const notify = (msg) => sendStatus(msg);
            try {
                testState.id++;
                testState.isLaunching = true;
                const mechanism = config.mechanism || 'createWindow';
                const desc = `${mechanism} / ${config.content} / ${config.count} windows / ${config.windowType || 'browser'}`;

                notify({ type: 'info', message: `[Step 1/4] Starting test: ${desc}` });

                if (mechanism === 'createWindow') {
                    await runCreateWindowTest(config, notify);
                } else if (mechanism === 'createWindowSequential') {
                    await runCreateWindowSequentialTest(config, notify);
                } else {
                    await runApplySnapshotTest(config, notify);
                }

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

/** Launch the manual launcher window. */
async function launchLauncherWindow() {
    const launcherWindow = await fin.Window.create({
        name: LAUNCHER_WINDOW_NAME,
        url: `http://localhost:${testConfig.port}/common/launcher.html`,
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

async function main() {
    try {
        const mainWindow = await fin.Window.getCurrent();
        fin.GlobalHotkey.register('CommandOrControl+Shift+Alt+M', () => mainWindow.showDeveloperTools());

        const runtimeVersion = await fin.System.getVersion();
        console.log(`[Step 1/6] Provider loaded. OpenFin Runtime: ${runtimeVersion}`);

        console.log(`[Step 1/6] Initializing WorkspacePlatform...`);
        await initializePlatform();
        console.log(`[Step 1/6] WorkspacePlatform initialized.`);

        if (autoRun) {
            console.log(`[Step 2/6] Waiting 3s for platform stabilization...`);
            await sleep(3000);
            console.log(`[Step 2/6] Stabilization complete. Starting test.`);
            await executeTest(testConfig);
        } else {
            setupIPCHandlers();
            await launchLauncherWindow();
        }
    } catch (err) {
        console.error('[provider] FATAL:', err);
        await reportError(String(err));
        setTimeout(() => {
            try { WorkspacePlatform.getCurrentSync().quit(); } catch (_) {}
        }, 1000);
    }
}

if ('fin' in window && window.fin !== null && typeof window.fin === 'object') {
    main();
} else {
    window.addEventListener('finReady', main);
}
