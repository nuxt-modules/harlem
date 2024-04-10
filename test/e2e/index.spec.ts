import { fileURLToPath } from 'node:url'
import { $fetch, setup } from '@nuxt/test-utils'
import { describe, expect, it } from 'vitest'

const playground = fileURLToPath(new URL('../../playground', import.meta.url))

await setup({
  rootDir: playground,
  server: true,
  browser: false,
})

describe('module', () => {
  it('should render the home page', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<h1>Hello John Doe</h1>')
  }, 50000)
})
