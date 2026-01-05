// da mariu vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // custom domain Da-mariu
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
