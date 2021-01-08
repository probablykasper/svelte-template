<script lang="ts">
  import { onMount } from 'svelte'
  import Counter from './Counter.svelte'

  let count: number = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => clearInterval(interval)
  })
</script>

<style lang="sass">
  :global(body)
    margin: 0
    font-family: Arial, Helvetica, sans-serif
    font-size: 18px
  main
    text-align: center
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    code
      background: #e6e6e6
      padding: 3px 6px
      border-radius: 4px
</style>

<template lang="pug">
  main
    h1 Hello world
    p Edit #[code src/Counter.svelte] to trigger HMR
    Counter(count="{count}")
</template>
