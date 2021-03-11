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
    minify: false,
    // using targets like es2019 and chrome63 causes warning (https://github.com/snowpackjs/snowpack/issues/2835)
    target: ['es2020', 'chrome64', 'edge79', 'firefox62', 'safari11.1'],
  },
}
