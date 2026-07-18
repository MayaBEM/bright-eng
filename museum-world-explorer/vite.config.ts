import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard build config — used for `npm run dev` / `npm run build` (multi-asset dist/, deploy to any static host).
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
})
