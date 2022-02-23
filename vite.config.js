import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      include: ['dist'],
      reporter: ['text', 'json'],
    },
  },
})
