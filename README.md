# @nuxtjs/harlem

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [Harlem](https://harlemjs.com/) integration for [Nuxt](https://v3.nuxtjs.org)

Harlem is a simple, unopinionated, lightweight and extensible state management solution for Vue 3. It is designed to suit projects of all sizes and developers of all different levels of experience.

- [👉 &nbsp;More about Harlem](https://harlemjs.com/)
- [▶️ &nbsp;Online playground](https://stackblitz.com/github/nuxt-modules/harlem/tree/main/playground)

## Features

- 👌 Zero-config required
- 🐨 Simple, functional state management
- 🧱 Easily extensible
- 💯 Nuxt 3 support

## Quick setup

1. Add `@nuxtjs/harlem` dependency to your project

```bash
npx nuxi@latest module add harlem
```

2. Add `@nuxtjs/harlem` to the `modules` section of `nuxt.config.ts`

3. Follow the [Harlem guide on how to create and use your stores](https://harlemjs.com/guide/introduction/getting-started.html#create-your-first-store).

   **Note**: `createStore` will be auto-imported wherever you use it, so you don't need to import it yourself.

## Example

Here's a minimal example - you can copy and paste this into your app with no extra steps.

### `~/stores/user.ts`

```ts
const STATE = {
  firstName: 'John',
  lastName: 'Smith',
}

export const { state, getter, mutation, ...store } = createStore('user', STATE)

export const fullName = getter('fullName', state => {
  return `${state.firstName} ${state.lastName}`
})

export const setFirstName = mutation<string>('setFirstName', (state, payload) => {
  state.firstName = payload
})

export const setLastName = mutation<string>('setLastName', (state, payload) => {
  state.lastName = payload
})
```

### `~/app.vue`

```html
<template>
  <div class="app">
    <h1>Hello {{ fullName }}</h1>
    <input v-model="firstName" type="text" placeholder="First name" />
    <input v-model="lastName" type="text" placeholder="Last name" />
  </div>
</template>

<script lang="ts" setup>
  import { state, fullName, setFirstName, setLastName } from '~/store/user'

  const firstName = computed({
    get: () => state.firstName,
    set: value => setFirstName(value),
  })

  const lastName = computed({
    get: () => state.lastName,
    set: value => setLastName(value),
  })

  setLastName('Doe')
</script>
```

For more info and examples, check out the [Harlem docs](https://harlemjs.com/) and [repository](https://github.com/andrewcourtice/harlem).

## Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run `pnpm prepare` to generate type stubs.
- Use `pnpm dev` to start [playground](./playground) in development mode.

## Licence

[MIT Licence](./LICENCE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/harlem/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/harlem
[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxtjs/harlem.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/harlem
[github-actions-ci-src]: https://github.com/nuxt-modules/harlem/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-modules/harlem/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-modules/harlem.svg
[codecov-href]: https://codecov.io/gh/nuxt-modules/harlem
[license-src]: https://img.shields.io/npm/l/@nuxtjs/harlem.svg
[license-href]: https://npmjs.com/package/@nuxtjs/harlem
