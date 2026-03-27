import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [svelte(), cssInjectedByJsPlugin()],
  base: '/',
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
    alias: {
      $lib: path.resolve(__dirname, './src/lib')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/tests/setup.js'],
    alias: {
      $lib: path.resolve(__dirname, './src/lib')
    }
  }
}))
