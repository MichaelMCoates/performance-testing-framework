import { defineConfig } from 'vite';

export default defineConfig({
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
