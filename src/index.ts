import App from './App.svelte'

var app = new App({
  target: document.body,
})

export default app

// The code below enables HMR
interface ImportMeta {
  [hot: string]: any
}
const meta: ImportMeta = import.meta
if (meta.hot) {
  meta.hot.dispose(() => {
    app.$destroy()
  })
  meta.hot.accept()
}
