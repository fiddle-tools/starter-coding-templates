import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    qwikVite({
      csr: true,
    }),
  ],
  server: {
    port: 3000,
    allowedHosts: ['.run.app', 'localhost'] // Add the dynamic host and localhost
  },
  base: '/absproxy/3000',
})
