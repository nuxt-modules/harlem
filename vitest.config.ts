import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['src', 'dist'],
      reporter: ['text', 'json'],
    },
  },
})
