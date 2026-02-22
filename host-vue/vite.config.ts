/*
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        // تعریف ریموت React
        remote: 'http://localhost:3001/assets/remoteEntry.js'
      },
      shared: {
        vue: { singleton: true },
        pinia: { singleton: true }  // 👈 این خیلی مهمه!
      }
    }),
    vueJsx(),
    vueDevTools(),
  ],
  /!*resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },*!/
  server: {
    port: 3000,
    cors: true
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
*/

/*
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {federation} from '@module-federation/vite'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host_vue',
      remotes: {
        remote_react: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],

  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },

  server: {
    port: 5173,
  },
})
*/


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {federation} from '@module-federation/vite'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host_vue',
      remotes: {
        remote_react: 'http://localhost:4173/assets/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },

      // ← این خطوط رو اضافه کن
      dts: false,               // خاموش کردن تولید types در dev
      // یا اگر می‌خوای فقط در production فعال باشه:
      // dts: process.env.NODE_ENV === 'production',
    }),
  ],

  // ... بقیه تنظیمات
})

