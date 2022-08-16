import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    deps: {
      inline: ['@nuxt/test-utils-edge'],
    },
    coverage: {
      include: ['src', 'dist'],
      reporter: ['text', 'json'],
    },
  },
})
