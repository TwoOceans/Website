import vue from '@vitejs/plugin-vue';
import { cloudflare } from '@cloudflare/vite-plugin';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    appType: 'spa',
    plugins: [
        cloudflare(),
        vue()
    ],
    server: {
        open: true
    }
})
