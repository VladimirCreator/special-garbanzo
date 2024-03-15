import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'

dotenv.config()

const extendedViteDevServer = {}

if (process.env.GITPOD_VITE_URL) {
    extendedViteDevServer.hmr = {
        protocol: 'wss',
        host: new URL(process.env.GITPOD_VITE_URL).hostname,
        clientPort: 443
    }
}

export default defineConfig({
    server: {
        ...extendedViteDevServer
    },
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
});
