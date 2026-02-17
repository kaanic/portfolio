import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from 'path'

export default defineConfig({
  plugins: [svelte(), cssInjectedByJsPlugin()],
  base: '/',
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, './src/lib')
    }
  }
})
