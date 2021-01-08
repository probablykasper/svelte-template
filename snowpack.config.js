/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
  ],
  install: [],
  installOptions: {},
  devOptions: {
    open: 'none',
    output: 'stream', // disable clearing of terminal
  },
  buildOptions: {
    out: './build',
    sourceMaps: true,
  }, 
  alias: {},
  experiments: {
    optimize: {
      bundle: true,
    },
  },
};
