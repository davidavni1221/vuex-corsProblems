import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    
    proxy: {
      '/token': {
        target: 'https://oauth.heshev.info',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  
    // proxy: {
    //   '/api': {
    //     target: 'https://api.heshev.info',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),}
    // },

  }
})
