/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/bundle' },
    public: { url: '/', static: true },
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-typescript'],
  devOptions: {
    port: 8080,
    open: 'none',
    output: 'stream', // disable clearing of terminal
  },
  buildOptions: {
    out: './build',
    sourcemap: process.env.NODE_ENV === 'development',
    clean: true,
  },
  optimize: {
    entrypoints: ['src/main.ts'],
    bundle: true,
    target: ['chrome64', 'es2020'],
  },
}
