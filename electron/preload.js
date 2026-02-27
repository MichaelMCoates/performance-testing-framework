const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendCommand(action, options) {
        ipcRenderer.send('command', action, options);
    },
    onStatusUpdate(callback) {
        ipcRenderer.on('status-update', (_event, status) => callback(status));
    },
    onResults(callback) {
        ipcRenderer.on('test-results', (_event, data) => callback(data));
    },
    async getPerformanceData() {
        return ipcRenderer.invoke('get-performance-data');
    },
    async getVersion() {
        return `Electron ${await ipcRenderer.invoke('get-version')}`;
    },
});
