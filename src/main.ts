import App from './App.svelte'

var app = new App({
  target: document.body,
})

export default app

// The code below enables HMR
declare global {
  interface ImportMeta {
    hot: {
      accept: Function
      dispose: Function
    }
    env: {
      MODE: string
      SNOWPACK_PUBLIC_API_URL: string
      SNOWPACK_PUBLIC_IMAGES_URL: string
    }
  }
}
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
  import.meta.hot.accept()
}
