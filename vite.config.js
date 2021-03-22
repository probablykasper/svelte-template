import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

export default defineConfig({
  root: './src',
  publicDir: '../public',
  clearScreen: false,
  build: {
    outDir: '../build',
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    target: ['chrome64', 'edge79', 'firefox62', 'safari11.1'],
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        pug: {
          pretty: true,
        },
      }),
    }),
  ],
})