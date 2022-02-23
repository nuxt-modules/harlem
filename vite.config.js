import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      include: ['src', 'dist'],
      reporter: ['text', 'json'],
    },
  },
})
