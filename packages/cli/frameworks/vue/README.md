![GitHub CI - Publish to NPM](https://github.com/leanupjs/leanup/workflows/GitHub%20CI%20-%20Publish%20to%20NPM/badge.svg)
[![dependencies][dependencies]][dependencies-url]
[![peerDependencies][peerdependencies]][peerdependencies-url]
[![optionalDependencies][optionaldependencies]][optionaldependencies-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![npm][npm]][npm-url]
[![downloads][downloads]][downloads-url]
[![install-size][install-size]][install-size-url]
[![lernajs][lernajs]][lernajs-url]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[npm]: https://img.shields.io/npm/v/@leanup/cli-vue
[npm-url]: https://www.npmjs.com/package/@leanup/cli-vue
[dependencies]: https://img.shields.io/david/leanupjs/leanup?path=packages/cli/frameworks/vue
[dependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/frameworks/vue
[peerdependencies]: https://img.shields.io/david/peer/leanupjs/leanup?path=packages/cli/frameworks/vue
[peerdependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/frameworks/vue&type=peer
[optionaldependencies]: https://img.shields.io/david/optional/leanupjs/leanup?path=packages/cli/frameworks/vue
[optionaldependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/frameworks/vue&type=optional
[vulnerabilities]: https://snyk.io/test/npm/@leanup/cli-vue/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/@leanup/cli-vue
[downloads]: https://img.shields.io/npm/dm/@leanup/cli-vue
[downloads-url]: https://npmcharts.com/compare/@leanup/cli-vue?minimal=true
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/cli-vue
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/cli-vue
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org

# `@leanup/cli-vue`

> This package contains the [vue](https://vuejs.org) framework extension for the [@leanup/cli](https://www.npmjs.com/package/@leanup/cli).

## Vue 3 Alpha

> https://medium.com/@mario.brendel1990/vue-3-alpha-has-started-d1b3b49869a4

## Installation

`npm install @leanup/cli @leanup/cli-vue --save-dev`

## Usage

### Developing

> lean serve -f vue -h

```bash
Usage: lean serve [options]

Developing

Options:
  -e, --environment <environment>  technical environment (CMS)
  -t, --template <template>        corporate design (Style)
  -o, --open                       open the default browser
  -p, --port                       port
  --vuetify                        add optional loader for vuetify (@leanup/cli-vue and vuetify-loader required)
  -h, --help                       output usage information
```

### Building

> lean build -f vue -h

```bash
Usage: lean build [options]

Building

Options:
  -e, --environment <environment>  technical environment (CMS)
  -t, --template <template>        corporate design (Style)
  -a, --analyzer                   generate an addional analyzer report (@leanup/cli-addons required)
  -g, --gzip                       addional file compression (@leanup/cli-addons required)
  -w, --worker                     split application separate worker files (@leanup/cli-addons required)
  --vuetify                        add optional loader for vuetify (@leanup/cli-vue and vuetify-loader required)
  -h, --help                       output usage information
```

### Unit-Testing

> see [@leanup/cli]

### Test-Coverage

> see [@leanup/cli]

### E2E-Testing

> see [@leanup/cli]

### Formatter

> see [@leanup/cli]

### Linter

> see [@leanup/cli]

[@leanup/cli]: https://www.npmjs.com/package/@leanup/cli
