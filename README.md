# Svelte template

Features:
- **Svelte**
- **TypeScript**
- **Snowpack** for fast builds
  - **esbuild** enabled using `experiments.optimize` setting
- **Preprocessor support** through `svelte-preprocess`
  - Pug and Sass are installed default
- **Hot module replacement**

Limitations:

- Sourcemaps are supported for `.ts` and `.svelte` files, but not for the preprocessors used inside `.svelte` files.
- Linting

## Recommended VSCode extensions

- `svelte.svelte-vscode` for Svelte
- `syler.sass-indented` for Sass

## Commands

### `npm run start`

Starts dev server

### `npm run build`

Builds and bundles into the `build/` folder
