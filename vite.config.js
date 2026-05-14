import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isTest = mode === 'test';

  return {
    plugins: [sveltekit()],
    resolve: {
      conditions: isTest ? ['browser'] : undefined
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/tests/setup.js'],
      exclude: ['**/node_modules/**', '**/e2e/**']
    }
  };
});