import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3D-Web-Developer-Portfolio-in-React-JS/', // Set base path for GitHub Pages
  plugins: [react()],
})
