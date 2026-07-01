import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Saykot/',   // Required for GitHub Pages deployment
  server: {
    proxy: {
      // Forwards /api/* requests to Express during development
      '/api': 'http://localhost:5000'
    }
  }
})

