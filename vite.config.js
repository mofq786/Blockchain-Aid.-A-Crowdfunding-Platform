import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2021', // or 'esnext'
    base: '/',
  //  build: {
    outDir: 'dist', // Ensure this is set to 'dist'
  // },
  },
})
