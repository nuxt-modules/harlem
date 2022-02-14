import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addTemplate } from '@nuxt/kit'
import { pascalCase } from 'scule'
import { genArrayFromRaw, genImport } from 'knitwork'

export interface ModuleOptions {
  plugins: string[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxtjs/harlem',
    configKey: 'harlem',
  },
  defaults: nuxt => ({
    plugins: [nuxt.options.dev && '@harlem/plugin-devtools'].filter(Boolean),
  }),
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    addTemplate({
      filename: 'harlem-plugins.mjs',
      getContents: () =>
        [
          ...options.plugins.map(p => genImport(p, pascalCase(p).replace(/[^\w]/g, '_'))),
          `export default ${genArrayFromRaw(
            options.plugins.map(p => pascalCase(p).replace(/[^\w]/g, '_'))
          )}`,
        ].join('\n'),
    })
    addPlugin(resolve(runtimeDir, 'plugin'))
    // TODO: emit native node ESM from `@harlem/*`
    nuxt.options.build.transpile.push(runtimeDir, /@harlem\//)
  },
})
