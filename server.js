import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MIME_TYPES = {
    '.html': 'text/html',
    '.js':   'application/javascript',
    '.mjs':  'application/javascript',
    '.css':  'text/css',
    '.json': 'application/json',
    '.png':  'image/png',
    '.ico':  'image/x-icon',
    '.svg':  'image/svg+xml',
};

/**
 * Start an HTTP server that serves static files and accepts POST /results.
 * Returns { server, waitForResults } where waitForResults is a promise that
 * resolves with the first result payload posted.
 */
export function startServer(port, rootDir = __dirname) {
    let resolveResults;
    const resultsPromise = new Promise(resolve => { resolveResults = resolve; });

    const server = http.createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
            res.writeHead(204);
            res.end();
            return;
        }

        if (req.method === 'POST' && req.url === '/results') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
                try {
                    const data = JSON.parse(body);
                    resolveResults(data);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end('{"ok":true}');
                } catch (e) {
                    res.writeHead(400);
                    res.end('Bad JSON');
                }
            });
            return;
        }

        // Static file serving
        let urlPath = decodeURIComponent(req.url.split('?')[0]);
        if (urlPath === '/') urlPath = '/index.html';

        const filePath = path.join(rootDir, urlPath);
        const ext = path.extname(filePath);
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(`Not Found: ${urlPath}`);
                return;
            }
            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache',
            });
            res.end(data);
        });
    });

    /** Try to bind to a port, retrying up to maxRetries times on EADDRINUSE. */
    function tryListen(targetPort, retriesLeft) {
        return new Promise((resolve, reject) => {
            const onError = (err) => {
                server.removeListener('listening', onListening);
                if (err.code === 'EADDRINUSE' && retriesLeft > 0) {
                    console.warn(`[server] Port ${targetPort} in use, retrying on ${targetPort + 1}...`);
                    resolve(tryListen(targetPort + 1, retriesLeft - 1));
                } else {
                    reject(err);
                }
            };
            const onListening = () => {
                server.removeListener('error', onError);
                const actualPort = server.address().port;
                console.log(`[server] Listening on http://localhost:${actualPort}`);
                resolve({ server, waitForResults: resultsPromise, actualPort });
            };
            server.once('error', onError);
            server.once('listening', onListening);
            server.listen(targetPort);
        });
    }

    return tryListen(port, 5);
}
