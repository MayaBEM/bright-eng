import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Standalone build config — produces ONE self-contained dist-standalone/index.html
// (JS + CSS + fonts all inlined) that a teacher can open directly, or upload
// anywhere, with no dev server required.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'dist-standalone',
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
  },
})
