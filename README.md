# Svelte template

Features:

- **Svelte**
- **Snowpack** with **esbuild** enabled
- **TypeScript**
- **`svelte-preprocess` support** with Pug and Sass installed by default
- **Hot module replacement**
- **Prettier**

Limitations:

- Source maps are supported for `.ts` and `.svelte` files, but not for the preprocessors used inside `.svelte` files
- Linting for code-quality rules is not supported. Would need to use ESLint with eslint-plugin-svelte3, but that plugin needs to work with svelte-preprocess ([issue](https://github.com/sveltejs/eslint-plugin-svelte3/issues/10))

## Recommended VSCode extensions

- `svelte.svelte-vscode` for Svelte
- `syler.sass-indented` for Sass
- `esbenp.prettier-vscode` for Prettier

## Setup

`src/main.ts` is built and bundled into `build/bundle/`.

If you want to add support for Android/iOS/Electron using Capacitor, read [Adding Capacitor to an existing web app](https://capacitorjs.com/docs/getting-started#adding-capacitor-to-an-existing-web-app). Just make sure to set webDir to `"build"` in `capacitor.config.json`.

## Commands

Start dev server:
```
npm run start
```

Build and bundle:
```
npm run build
```

Lint the project:
```
npm run lint
```

Run `svelte-check`:
```
npm run check
```
