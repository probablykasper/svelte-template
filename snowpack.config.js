/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/' },
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-typescript'],
  install: [],
  installOptions: {},
  devOptions: {
    open: 'none',
    output: 'stream', // disable clearing of terminal
  },
  buildOptions: {
    out: './public/build',
    sourceMaps: true,
  },
  alias: {},
  experiments: {
    optimize: {
      entrypoints: ['src/index.ts'],
      bundle: true,
    },
  },
}
