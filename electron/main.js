/**
 * Electron main process for the performance testing framework.
 * Supports auto-run mode (via CLI args) and manual launcher mode.
 */
const { app, BrowserWindow, BrowserView, ipcMain, globalShortcut } = require('electron');
const path = require('node:path');
const http = require('node:http');

require('../common/perf.js');

const args = parseArgs(process.argv.slice(2));
const autoRun = args['auto-run'] != null;

const testConfig = {
    mechanism:  args.mechanism   || 'createWindow',
    content:    args.content     || 'blank',
    count:      parseInt(args.count || '10', 10),
    windowType: args['window-type'] || 'browser',
    port:       args.port        || '3001',
    resultsPort: args['results-port'] || args.port || '3001',
};

const testState = {
    id: 0,
    windows: new Map(),
    launcherWindow: null,
};

/** Parse --key=value args into an object. */
function parseArgs(argv) {
    const result = {};
    for (const arg of argv) {
        if (arg.startsWith('--')) {
            const [key, ...rest] = arg.slice(2).split('=');
            result[key] = rest.join('=') || true;
        }
    }
    return result;
}

function contentUrl(content) {
    const base = `http://localhost:${testConfig.port}/common/content`;
    switch (content) {
        case 'blank':      return `${base}/blank.html`;
        case 'example':    return 'https://www.example.com';
        case 'iframes-1':  return `${base}/iframes.html?count=1`;
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

const noop = () => {};

/** Wait for a BrowserWindow or BrowserView to finish loading. */
function waitForLoaded(webContents, windowName, viewName, notify = noop) {
    return new Promise(resolve => {
        let timer;
        const handler = () => {
            clearTimeout(timer);
            globalThis.Perf.viewLoaded(windowName, viewName || windowName);
            const w = globalThis.Perf._windows[windowName];
            const loadMs = w?.viewLoadMs ?? '?';
            const readyAt = w?.readyAtMs ?? '?';
            notify({ type: 'info', message: `    View loaded: ${viewName || windowName} in ${windowName} (viewLoad=${loadMs}ms, readyAt=${readyAt}ms)` });
            webContents.removeListener('did-finish-load', handler);
            resolve();
        };
        webContents.on('did-finish-load', handler);
        timer = setTimeout(() => {
            webContents.removeListener('did-finish-load', handler);
            notify({ type: 'error', message: `    View TIMEOUT (50s): ${viewName || windowName} in ${windowName}` });
            resolve();
        }, 50000);
    });
}

/** Create a BrowserWindow with a BrowserView. Returns { winName, loadPromise }. */
function createBrowserStyleWindow(i, url, notify = noop) {
    const id = `${testState.id}-${i + 1}`;
    const winName = `browser-window-${id}`;
    const viewName = `browser-view-${id}`;

    globalThis.Perf.windowCreating(winName);

    const win = new BrowserWindow({
        width: 800,
        height: 400,
        x: 50 + (i * 50),
        y: 50 + ((i % 5) * 50),
        show: true,
        webPreferences: { nodeIntegration: false, contextIsolation: true },
    });

    const view = new BrowserView({
        webPreferences: { nodeIntegration: false, contextIsolation: true },
    });
    win.setBrowserView(view);
    const bounds = win.getContentBounds();
    view.setBounds({ x: 0, y: 0, width: bounds.width, height: bounds.height });
    view.setAutoResize({ width: true, height: true });

    const loadPromise = waitForLoaded(view.webContents, winName, viewName, notify);
    view.webContents.loadURL(url);

    globalThis.Perf.windowCreated(winName);
    testState.windows.set(winName, win);

    return { winName, loadPromise };
}

/** Create a simple BrowserWindow (no BrowserView). Returns { winName, loadPromise }. */
function createPlatformStyleWindow(i, url, notify = noop) {
    const id = `${testState.id}-${i + 1}`;
    const winName = `window-${id}`;

    globalThis.Perf.windowCreating(winName);

    const win = new BrowserWindow({
        width: 800,
        height: 400,
        x: 50 + (i * 50),
        y: 50 + ((i % 5) * 50),
        show: true,
        webPreferences: { nodeIntegration: false, contextIsolation: true },
    });

    const loadPromise = waitForLoaded(win.webContents, winName, winName, notify);
    win.loadURL(url);

    globalThis.Perf.windowCreated(winName);
    testState.windows.set(winName, win);

    return { winName, loadPromise };
}

/** Close all test windows and measure the close time. */
async function closeAllWindows() {
    const count = testState.windows.size;
    if (count === 0) return;

    console.log(`[Step 4/5] Closing ${count} test windows...`);
    globalThis.Perf.closeStart();

    for (const [name, win] of testState.windows) {
        if (!win.isDestroyed()) win.close();
    }
    testState.windows.clear();

    globalThis.Perf.closeEnd();
    console.log(`[Step 4/5] All ${count} windows closed.`);
}

/** Run the test and return results. Does NOT close windows (caller decides). */
async function runTest(config, notify = noop) {
    testState.id++;
    const url = contentUrl(config.content);
    const useBrowserView = (config.windowType || 'browser') === 'browser';
    const createFn = useBrowserView ? createBrowserStyleWindow : createPlatformStyleWindow;
    const mechanism = config.mechanism || 'createWindow';
    const desc = `${mechanism} / ${config.content} / ${config.count} windows / ${config.windowType || 'browser'}`;

    notify({ type: 'info', message: `[Step 1/4] Starting test: ${desc}` });
    notify({ type: 'info', message: `[Step 2/4] Perf.start() - beginning measurement` });

    globalThis.Perf.start({ ...config, env: 'electron', runtime: `Electron ${process.versions.electron}` });

    const allPromises = [];
    for (let i = 0; i < config.count; i++) {
        notify({ type: 'info', message: `  Dispatching window ${i + 1}/${config.count}...` });
        const { winName, loadPromise } = createFn(i, url, notify);
        const w = globalThis.Perf._windows[winName];
        notify({ type: 'info', message: `  Window ${i + 1}/${config.count} created: ${winName} (${w?.createMs ?? '?'}ms)` });
        allPromises.push(loadPromise);
    }

    notify({ type: 'info', message: `[Step 3/4] All ${config.count} windows dispatched. Waiting for all views to load...` });
    await Promise.all(allPromises);
    globalThis.Perf.endLaunch();
    notify({ type: 'info', message: `[Step 3/4] All ${config.count} windows + views loaded. Total launch: ${globalThis.Perf._launchMs}ms` });

    const results = globalThis.Perf.results();
    results.config.runtime = `Electron ${process.versions.electron}`;
    return results;
}

/** Build a detailed summary array of strings from results (matches workspace output). */
function buildSummary(results) {
    const lines = [];
    const s = results.summary || {};
    const cfg = results.config || {};

    lines.push('');
    lines.push('========================================');
    lines.push(`  TEST RESULTS: ${cfg.env || 'electron'}`);
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

/** Post results to the runner HTTP server. */
async function postResults(results) {
    const port = testConfig.resultsPort || testConfig.port;
    return new Promise((resolve, reject) => {
        const body = JSON.stringify(results);
        const req = http.request({
            hostname: 'localhost',
            port,
            path: '/results',
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
        }, res => {
            res.resume();
            resolve();
        });
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

function sendStatus(status) {
    if (testState.launcherWindow && !testState.launcherWindow.isDestroyed()) {
        testState.launcherWindow.webContents.send('status-update', status);
    }
}

function setupIPCHandlers() {
    ipcMain.on('command', async (event, action, options) => {
        console.log('[electron] IPC:', action);
        if (action === 'run-test') {
            const notify = (msg) => sendStatus(msg);
            try {
                const results = await runTest(options, notify);
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
            }
        } else if (action === 'close-windows') {
            let closed = 0;
            for (const [name, win] of testState.windows) {
                if (!win.isDestroyed()) { win.close(); closed++; }
            }
            testState.windows.clear();
            sendStatus({ type: 'success', message: `Closed ${closed} test windows.`, completed: true });
        }
    });

    ipcMain.handle('get-performance-data', () => ({
        timestamp: new Date().toISOString(),
        platform: 'Electron',
    }));

    ipcMain.handle('get-version', () => process.versions.electron);
}

function createLauncherWindow() {
    testState.launcherWindow = new BrowserWindow({
        width: 900,
        height: 700,
        center: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    testState.launcherWindow.loadFile(path.join(__dirname, '../common/launcher.html'));
    testState.launcherWindow.on('closed', () => { testState.launcherWindow = null; });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

app.whenReady().then(async () => {
    console.log(`[Step 1/5] Electron ready. Electron: ${process.versions.electron}, Chrome: ${process.versions.chrome}`);

    globalShortcut.register('CommandOrControl+Shift+Alt+I', () => {
        const focused = BrowserWindow.getFocusedWindow();
        if (focused) focused.webContents.openDevTools({ mode: 'detach' });
    });

    if (autoRun) {
        console.log(`[Step 1/6] Waiting 3s for stabilization...`);
        await sleep(3000);
        console.log(`[Step 1/6] Stabilization complete. Starting test.`);
        const results = await runTest(testConfig);
        console.log(`[Step 4/6] All views loaded. Launch complete.`);
        await closeAllWindows();
        console.log(`[Step 5/6] Posting results and quitting...`);
        await postResults(results);
        app.quit();
    } else {
        setupIPCHandlers();
        createLauncherWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
    for (const [, win] of testState.windows) {
        if (!win.isDestroyed()) win.close();
    }
    testState.windows.clear();
});
