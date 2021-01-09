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
    clean: true,
  },
  alias: {},
  experiments: {
    optimize: {
      entrypoints: ['src/index.ts'],
      bundle: true,
    },
  },
}
if (process.env.NODE_ENV === 'development') {
  module.exports.mount = {
    src: { url: '/build' },
    public: { url: '/', static: true },
  }
}
