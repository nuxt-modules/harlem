# @nuxtjs/harlem

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [Harlem](https://harlemjs.com/) integration for [Nuxt](https://v3.nuxtjs.org)

## Features

- 👌 Zero-config required
- 🐨 Simple, functional state management
- 🧱 Easily extensible
- 💯 Nuxt 3 support

## Quick setup

1. Add `@nuxtjs/harlem` dependency to your project

```bash
yarn add @nuxtjs/harlem # or npm install @nuxtjs/harlem
```

2. Add `@nuxtjs/harlem` to the `modules` section of `nuxt.config.ts`

3. Follow the [Harlem guide on how to create and use your stores](https://harlemjs.com/guide/introduction/getting-started.html#create-your-first-store).

   **Note**: `createStore` will be auto-imported wherever you use it, so you don't need to import it yourself.

## Development

- Run `yarn prepare` to generate type stubs.
- Use `yarn dev` to start [playground](./playground) in development mode.

## Licence

[MIT Licence](./LICENCE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/harlem/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/harlem
[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxtjs/harlem.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/harlem
[github-actions-ci-src]: https://github.com/nuxt-community/harlem-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/harlem-module/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/harlem-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/harlem-module
[license-src]: https://img.shields.io/npm/l/@nuxtjs/harlem.svg
[license-href]: https://npmjs.com/package/@nuxtjs/harlem
