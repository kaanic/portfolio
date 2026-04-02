import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isTest = mode === 'test';
  
  return {
    plugins: [svelte()],
    base: '/',
    resolve: {
      conditions: isTest ? ['browser'] : undefined,
      alias: {
        $lib: path.resolve(__dirname, './src/lib')
      }
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/tests/setup.js'],
      exclude: ['**/node_modules/**', '**/e2e/**'],
      alias: {
        $lib: path.resolve(__dirname, './src/lib')
      }
    }
  }
})
