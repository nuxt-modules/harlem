import { createVuePlugin } from '@harlem/core'
import { createClientSSRPlugin, createServerSSRPlugin, getBridgingScript } from '@harlem/plugin-ssr'

import { defineNuxtPlugin } from '#app'
import { useHead } from '#imports'
import harlemPlugins from '#build/harlem-plugins'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(
    createVuePlugin({
      plugins: [
        ...harlemPlugins.map(p => p()),
        process.client && createClientSSRPlugin(),
        process.server && createServerSSRPlugin(),
      ].filter(Boolean),
    })
  )

  useHead({
    script: [{ children: () => getBridgingScript() }],
  })
})
