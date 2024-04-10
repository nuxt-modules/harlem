import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineNuxtModule, addPlugin, addTemplate, addImports } from '@nuxt/kit'
import { pascalCase } from 'scule'
import { genArrayFromRaw, genImport } from 'knitwork'

export interface ModuleOptions {
  /**
   * Additional Harlem plugins to set up.
   *
   * SSR support is always enabled, and this defaults to add
   * devtools support when in local development.
   *
   * @default ['@harlem/plugin-devtools']
   */
  plugins: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxtjs/harlem',
    configKey: 'harlem',
    compatibility: {
      nuxt: '^3.0.0',
      bridge: false,
    },
  },
  defaults: nuxt => ({
    plugins: [nuxt.options.dev && '@harlem/plugin-devtools'].filter(Boolean) as string[],
  }),
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    addTemplate({
      filename: 'harlem-plugins.mjs',
      getContents: () =>
        [
          ...options.plugins.map(p => genImport(p, pascalCase(p).replace(/[^\w]/g, '_'))),
          `export default ${genArrayFromRaw(
            options.plugins.map(p => pascalCase(p).replace(/[^\w]/g, '_')),
          )}`,
        ].join('\n'),
    })
    addPlugin(resolve(runtimeDir, 'plugin'))
    addImports({ name: 'createStore', as: 'createStore', from: '@harlem/core' })
    // TODO: emit native node ESM from `@harlem/*`
    nuxt.options.build.transpile.push(runtimeDir, /@harlem\//)
  },
})
