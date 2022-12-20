import Harlem from '@harlem/core'
import {
  createClientSSRPlugin,
  createServerSSRPlugin,
  getBridgingScript,
} from '@harlem/plugin-ssr'

import { defineNuxtPlugin, useHead } from '#app'
import harlemPlugins from '#build/harlem-plugins'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Harlem, {
    plugins: [
      ...harlemPlugins.map(p => p()),
      process.client && createClientSSRPlugin(),
      process.server && createServerSSRPlugin(),
    ].filter(Boolean),
  })

  useHead({
    script: [{ children: computed(() => getBridgingScript()) }],
  })
})
