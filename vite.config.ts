import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    appType: 'spa',
    css: {
        preprocessorOptions: {
            sass: {
                api: 'modern-compiler',
            }
        }
    },
    plugins: [
        vue()
    ],
    server: {
        open: true
    }
})
