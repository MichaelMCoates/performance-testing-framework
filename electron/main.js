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
        case 'iframes-5':  return `${base}/iframes.html?count=5`;
        case 'iframes-20': return `${base}/iframes.html?count=20`;
        case 'iframes-50': return `${base}/iframes.html?count=50`;
        default:           return `${base}/blank.html`;
    }
}

/** Wait for a BrowserWindow or BrowserView to finish loading. */
function waitForLoaded(webContents, windowName, viewName) {
    return new Promise(resolve => {
        const handler = () => {
            globalThis.Perf.viewLoaded(windowName, viewName || windowName);
            webContents.removeListener('did-finish-load', handler);
            resolve();
        };
        webContents.on('did-finish-load', handler);
        setTimeout(() => { webContents.removeListener('did-finish-load', handler); resolve(); }, 30000);
    });
}

/** Create a simple BrowserWindow with a view loaded as a BrowserView. */
function createBrowserStyleWindow(i, url) {
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

    const loadPromise = waitForLoaded(view.webContents, winName, viewName);
    view.webContents.loadURL(url);

    globalThis.Perf.windowCreated(winName);
    testState.windows.set(winName, win);

    return loadPromise;
}

/** Create a simple BrowserWindow (no BrowserView). */
function createPlatformStyleWindow(i, url) {
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

    const loadPromise = waitForLoaded(win.webContents, winName, winName);
    win.loadURL(url);

    globalThis.Perf.windowCreated(winName);
    testState.windows.set(winName, win);

    return loadPromise;
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

/** Run the test, close windows, and return results. */
async function runTest(config) {
    testState.id++;
    const url = contentUrl(config.content);
    const useBrowserView = (config.windowType || 'browser') === 'browser';
    const createFn = useBrowserView ? createBrowserStyleWindow : createPlatformStyleWindow;
    const desc = `createWindow x ${config.count} ${config.content} ${config.windowType} windows`;

    console.log(`[Step 2/5] Running test: ${desc}...`);

    globalThis.Perf.start({ ...config, env: 'electron', runtime: `Electron ${process.versions.electron}` });

    const loadPromises = [];
    for (let i = 0; i < config.count; i++) {
        loadPromises.push(createFn(i, url));
    }

    await Promise.all(loadPromises);
    globalThis.Perf.endLaunch();

    console.log(`[Step 3/5] All views loaded. Launch complete.`);

    await closeAllWindows();

    return globalThis.Perf.results();
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
            try {
                const results = await runTest(options);
                sendStatus({ type: 'success', message: `Test complete: ${results.totalMs}ms total`, results, completed: true });
                testState.launcherWindow?.webContents.send('test-results', results);
            } catch (err) {
                sendStatus({ type: 'error', message: err.message, completed: true });
            }
        } else if (action === 'close-windows') {
            for (const [name, win] of testState.windows) {
                if (!win.isDestroyed()) win.close();
            }
            testState.windows.clear();
            sendStatus({ type: 'success', message: 'All windows closed', completed: true });
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
        console.log(`[Step 1/5] Waiting 3s for stabilization...`);
        await sleep(3000);
        console.log(`[Step 1/5] Stabilization complete. Starting test.`);
        const results = await runTest(testConfig);
        console.log(`[Step 5/5] Posting results and quitting...`);
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
