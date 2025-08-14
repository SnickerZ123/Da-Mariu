import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Da-Mariu/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})

