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

## Commands

### `npm run start`

Starts dev server

### `npm run build`

Builds and bundles into the `build/` folder

### `npm run lint`

Lint the project
