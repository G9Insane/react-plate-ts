import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactJsx from 'vite-react-jsx'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactJsx()],
  resolve: {
    alias: {
      '@': resolve(path.resolve(), 'src') // Set '@' to point to the 'src' directory
    }
  },
  base: './', // Set the packing path
  server: {
    port: 3000,
    open: true, // The browser opens automatically when the service starts
    cors: true // Allow cross-origin resource sharing
    // Configure the proxy service according to your needs
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
