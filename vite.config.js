import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2021', // or 'esnext'
    rollupOptions: {
      input: 'src/main.jsx', // Ensure this path is correct
    },
  },
})
