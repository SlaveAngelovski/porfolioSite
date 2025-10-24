/** @type {import('vite').UserConfig} */
import type { UserConfig } from 'vite'

export default {
  root: '.',
  base: './',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      // external: ['chart.js'],
      input: {
        main: './index.html',
        gallery: './gallery.html',
      },
    },
  }
}  satisfies UserConfig;