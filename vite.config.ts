import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://rhyzj.github.io/birthdayThing/ on GitHub Pages
  base: '/birthdayThing/',
  plugins: [react()],
})
