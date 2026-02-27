import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
        lib: {
            entry: './workspace-platform-entry.js',
            name: 'WorkspacePlatformBundle',
            fileName: 'workspace-platform.bundle',
            formats: ['es'],
        },
        outDir: 'dist',
        emptyOutDir: true,
    },
});
