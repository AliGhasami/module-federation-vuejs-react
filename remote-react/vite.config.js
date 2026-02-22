import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'remote',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactCounter': './src/components/ReactCounter.jsx'
            },
            shared: {
                react: { singleton: true },
                'react-dom': { singleton: true },
                pinia: { singleton: true }  // 👈 باز هم singleton
            }
        })
    ],
    server: {
        port: 3001,
        cors: true
    },
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})