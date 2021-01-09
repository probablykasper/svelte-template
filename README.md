# Svelte template

Features:

- **Svelte**
- **TypeScript**
- **Snowpack** for fast builds
  - **esbuild** enabled using `experiments.optimize` setting
- **Preprocessor support** through `svelte-preprocess`
  - Pug and Sass are installed default
- **Hot module replacement**
- **Prettier**

Limitations:

- Sourcemaps are supported for `.ts` and `.svelte` files, but not for the preprocessors used inside `.svelte` files.
- Linting for code-quality rules is not supported.

## Recommended VSCode extensions

- `svelte.svelte-vscode` for Svelte
- `syler.sass-indented` for Sass
- `esbenp.prettier-vscode` for Prettier

## Config

With this setup, `src/index.ts` is built and bundled into `public/build/`. If you want more entrypoints, add them to `experiments.optimize.entrypoints` in `snowpack.config.js`.

If you want `src` and `public` to be built and copied to a folder like `dist`:

1. Change the properties `mount` and `buildOptions.out` in `snowpack.config.js`
2. Update `.gitignore` and the paths `public/index.html`

To disable source maps/`.map` files for builds, disable `buildOptions.sourceMaps` in `snowpack.config.js`.

## Commands

### `npm run start`

Starts dev server

### `npm run build`

Builds and bundles

### `npm run lint`

Lint the project
