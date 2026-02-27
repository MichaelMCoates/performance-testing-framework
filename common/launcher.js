/**
 * Launcher UI logic. Detects platform (OpenFin vs Electron) and dispatches
 * test commands via IPC. Works for both manual and embedded use.
 */

let platform = 'unknown';
let platformAPI = null;
let lastResults = null;

const IPC_CHANNEL = 'perf-test-ipc';

const PlatformAPI = {
    openfin: {
        callbacks: [],
        pendingResults: null,

        setupListener() {
            fin.InterApplicationBus.subscribe({ uuid: '*' }, IPC_CHANNEL, (msg) => {
                if (msg.type === 'performance-results') {
                    if (this.pendingResults) this.pendingResults(msg.data);
                } else {
                    this.callbacks.forEach(cb => cb(msg));
                }
            });
        },

        addListener(cb) { this.callbacks.push(cb); },

        async sendCommand(action, options) {
            await fin.InterApplicationBus.send(
                { uuid: fin.me.uuid },
                IPC_CHANNEL,
                { action, options }
            );
        },

        async getVersion() {
            return await fin.System.getVersion();
        },

        waitForResults() {
            return new Promise(resolve => { this.pendingResults = resolve; });
        },
    },

    electron: {
        callbacks: [],

        setupListener() {
            if (window.electronAPI?.onStatusUpdate) {
                window.electronAPI.onStatusUpdate(msg => {
                    this.callbacks.forEach(cb => cb(msg));
                });
            }
        },

        addListener(cb) { this.callbacks.push(cb); },

        async sendCommand(action, options) {
            window.electronAPI.sendCommand(action, options);
        },

        async getVersion() {
            return window.electronAPI?.getVersion?.() || 'Electron';
        },

        waitForResults() {
            return new Promise(resolve => {
                if (window.electronAPI?.onResults) {
                    window.electronAPI.onResults(data => resolve(data));
                }
            });
        },
    },
};

function detectPlatform() {
    if (typeof window.electronAPI !== 'undefined') {
        platform = 'electron';
        return true;
    }
    if (typeof fin !== 'undefined') {
        platform = 'openfin';
        return true;
    }
    return false;
}

function log(msg, type = 'info') {
    const el = document.getElementById('status');
    const ts = new Date().toLocaleTimeString();
    const cls = type === 'success' ? 'success' : type === 'error' ? 'error' : type === 'summary' ? 'summary' : '';
    el.innerHTML += `<p class="${cls}">[${ts}] ${msg}</p>`;
    el.scrollTop = el.scrollHeight;
}

function setCount(val) {
    console.log('Window count set to', val);
}

async function onRunTest() {
    const btn = document.getElementById('runBtn');
    btn.disabled = true;

    const options = {
        mechanism: document.getElementById('mechanismSelect').value,
        content: document.getElementById('contentSelect').value,
        count: parseInt(document.getElementById('countSelect').value, 10),
        windowType: document.getElementById('windowTypeSelect').value,
    };

    log(`Running test: ${options.mechanism} / ${options.content} / ${options.count} windows / ${options.windowType}`);

    try {
        await platformAPI.sendCommand('run-test', options);
    } catch (e) {
        log(`Error: ${e.message}`, 'error');
        btn.disabled = false;
    }
}

async function onCloseAll() {
    log('Closing all test windows...');
    try {
        await platformAPI.sendCommand('close-windows');
    } catch (e) {
        log(`Error: ${e.message}`, 'error');
    }
}

function onReset() {
    document.getElementById('status').innerHTML = '';
    lastResults = null;
}

function onDownload() {
    if (!lastResults) {
        log('No results to download', 'error');
        return;
    }
    const json = JSON.stringify(lastResults, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `perf-results-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    log('Results downloaded', 'success');
}

async function init() {
    if (!detectPlatform()) {
        log('Unknown platform', 'error');
        return;
    }

    platformAPI = PlatformAPI[platform];
    platformAPI.setupListener();

    const badge = document.getElementById('platformBadge');
    badge.textContent = platform === 'openfin' ? 'OpenFin' : 'Electron';

    try {
        const version = await platformAPI.getVersion();
        badge.textContent += ` ${version}`;
    } catch (_) { /* ignore */ }

    platformAPI.addListener(msg => {
        if (msg.type && msg.message) log(msg.message, msg.type);
        if (msg.summary) {
            for (const line of Array.isArray(msg.summary) ? msg.summary : [msg.summary]) {
                const isPerWindow = line.trimStart().startsWith('window-') || line.trimStart().startsWith('browser-window-') || line.trimStart().startsWith('platform-window-');
                log(line, isPerWindow ? 'detail' : 'summary');
            }
        }
        if (msg.results) {
            lastResults = msg.results;
            document.getElementById('runBtn').disabled = false;
        }
        if (msg.completed) {
            document.getElementById('runBtn').disabled = false;
        }
    });

    log('Ready. Configure parameters and click Run Test.');
}

if (typeof window !== 'undefined') {
    if ('fin' in window && window.fin !== null && typeof window.fin === 'object') {
        init();
    } else if (typeof window.electronAPI !== 'undefined') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        window.addEventListener('finReady', init);
    }
}
