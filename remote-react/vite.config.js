/*
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
})*/

// react-remote/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from '@module-federation/vite'

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'remote_react',
            filename: 'remoteEntry.js',
            exposes: {
                './SimpleButton': './src/SimpleButton.tsx',
            },
            shared: ['react', 'react-dom'],
        }),
    ],

    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        manifest: true, // اینا کمک می‌کنه dev بهتر شبیه‌سازی بشه (اختیاری)
    },

    server: {
        port: 5001,
        cors: true,                     // حتماً CORS فعال باشه
        hmr: true,
        strictPort: true,               // پورت ثابت بمونه
    },
})
