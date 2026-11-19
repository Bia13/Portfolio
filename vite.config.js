import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // caminhos relativos: o site funciona em bia13.github.io/Portfolio/
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})