import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    port: 3000,
    allowedHosts: ['.run.app', 'localhost'] // Add the dynamic host and localhost
  },
  base: '/absproxy/3000',
})
