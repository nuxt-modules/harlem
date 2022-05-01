import Harlem from '@harlem/core'
import {
  createClientSSRPlugin,
  createServerSSRPlugin,
  // getBridgingScript,
  getBridgingScriptBlock,
} from '@harlem/plugin-ssr'

import { defineNuxtPlugin } from '#app'
import harlemPlugins from '#build/harlem-plugins'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Harlem, {
    plugins: [
      ...harlemPlugins.map(p => p()),
      process.client && createClientSSRPlugin(),
      process.server && createServerSSRPlugin(),
    ].filter(Boolean),
  })

  // Workaround until we have support in vueuse/head
  if (process.server && 'renderMeta' in nuxtApp.ssrContext) {
    const originalRender = nuxtApp.ssrContext.renderMeta
    nuxtApp.ssrContext.renderMeta = async () => {
      const result = await originalRender()
      result.bodyScripts = (result.bodyScripts || '') + getBridgingScriptBlock()
      return result
    }
  }

  // useHead({
  //   script: [{ children: computed(() => getBridgingScript()) }],
  // })
})
