import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  optimizeDeps: {
    include: ['aos'], // Ensure AOS is included in the optimization
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Menlo', 'Consolas', 'monospace'],
      },
      
    },
  },
  
})
