import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASELINE_ARGS = '--security-realm=LSEG';

const RUNTIME_FLAGS = {
    '42.138.103.903': `${BASELINE_ARGS} --async-fin-injection`,
};

/**
 * Generate an OpenFin manifest JSON file from a template, substituting
 * runtime version, arguments, provider URL query params, and affinity strategy.
 * Returns the absolute path to the generated manifest.
 */
export function generateManifest(opts) {
    const {
        env,          // 'openfin-workspace' | 'openfin-container'
        runtime,
        runtimeArgs,  // extra args (optional override)
        port,
        mechanism,
        content,
        count,
        affinity,
        windowType,
        resultsPort,
    } = opts;

    const variant = env === 'openfin-workspace' ? 'workspace' : 'container';
    const templatePath = path.join(__dirname, 'openfin', variant, 'manifest.template.json');
    const template = JSON.parse(fs.readFileSync(templatePath, 'utf-8'));

    const autoArgs = RUNTIME_FLAGS[runtime] || BASELINE_ARGS;
    const args = runtimeArgs != null ? runtimeArgs : autoArgs;

    template.runtime.version = runtime;
    template.runtime.arguments = args;

    const qp = new URLSearchParams({
        autoRun: 'true',
        mechanism,
        content,
        count: String(count),
        windowType: windowType || 'browser',
        resultsPort: String(resultsPort || port),
        port: String(port),
    });

    const providerBase = template.platform.providerUrl.split('?')[0];
    template.platform.providerUrl = `http://localhost:${port}/${providerBase}?${qp}`;

    if (affinity) {
        template.platform.viewProcessAffinityStrategy = affinity;
    }

    const outDir = path.join(__dirname, 'openfin', variant);
    const outPath = path.join(outDir, 'manifest.json');
    fs.writeFileSync(outPath, JSON.stringify(template, null, 2));

    return outPath;
}
