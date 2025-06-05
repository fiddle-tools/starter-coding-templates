import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
    allowedHosts: ['.run.app', 'localhost'] // Add the dynamic host and localhost
  },
  base: '/absproxy/3000',
})
