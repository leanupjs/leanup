![GitHub CI - Publish to NPM](https://github.com/leanupjs/leanup/workflows/GitHub%20CI%20-%20Publish%20to%20NPM/badge.svg)
[![dependencies][dependencies]][dependencies-url]
[![peer-dependencies][peer-dependencies]][peer-dependencies-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![npm][npm]][npm-url]
[![downloads][downloads]][downloads-url]
[![install-size][install-size]][install-size-url]
[![lernajs][lernajs]][lernajs-url]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[npm]: https://img.shields.io/npm/v/@leanup/cli-svelte
[npm-url]: https://www.npmjs.com/package/@leanup/cli-svelte
[dependencies]: https://david-dm.org/leanupjs/leanup/release%2F1.0/status.svg?path=packages/cli/frameworks/svelte
[dependencies-url]: https://david-dm.org/leanupjs/leanup/release%2F1.0?path=packages/cli/frameworks/svelte
[peer-dependencies]: https://img.shields.io/david/peer/leanupjs/leanup?path=packages/cli/frameworks/svelte
[peer-dependencies-url]: https://david-dm.org/leanupjs/leanup/release%2F1.0?path=packages/cli/frameworks/svelte&type=peer
[vulnerabilities]: https://snyk.io/test/npm/@leanup/cli-svelte/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/@leanup/cli-svelte
[downloads]: https://img.shields.io/npm/dm/@leanup/cli-svelte
[downloads-url]: https://npmcharts.com/compare/@leanup/cli-svelte?minimal=true
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/cli-svelte
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/cli-svelte
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org

# `@leanup/cli-svelte`

> This package contains the [svelte](https://svelte.dev) framework extension for the [@leanup/cli](https://www.npmjs.com/package/@leanup/cli).

## Installation

`npm install @leanup/cli @leanup/cli-svelte --save-dev`

## Usage

### Developing

> lean serve -f svelte -h

```bash
Usage: lean serve [options]

Developing

Options:
  -e, --environment <environment>  technical environment (CMS)
  -t, --template <template>        corporate design (Style)
  -o, --open                       open the default browser
  -p, --port                       port
  -h, --help                       output usage information
```

### Building

> lean build -f svelte -h

```bash
Usage: lean build [options]

Building

Options:
  -e, --environment <environment>  technical environment (CMS)
  -t, --template <template>        corporate design (Style)
  -a, --analyzer                   generate an addional analyzer report (@leanup/cli-addons required)
  -g, --gzip                       addional file compression (@leanup/cli-addons required)
  -w, --worker                     split application separate worker files (@leanup/cli-addons required)
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
