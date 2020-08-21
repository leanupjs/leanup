[![travis-ci][travis-ci]][travis-ci-url]
[![dependencies][dependencies]][dependencies-url]
[![peer-dependencies][peer-dependencies]][peer-dependencies-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![npm][npm]][npm-url]
[![downloads][downloads]][downloads-url]
[![install-size][install-size]][install-size-url]
[![lernajs][lernajs]][lernajs-url]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[npm]: https://img.shields.io/npm/v/@leanup/cli-inferno
[npm-url]: https://www.npmjs.com/package/@leanup/cli-inferno
[dependencies]: https://img.shields.io/david/martinoppitz/leanup?path=cli/plugins/inferno
[dependencies-url]: https://david-dm.org/martinoppitz/leanup?path=cli/plugins/inferno
[peer-dependencies]: https://img.shields.io/david/peer/martinoppitz/leanup?path=cli/plugins/inferno
[peer-dependencies-url]: https://david-dm.org/martinoppitz/leanup?path=cli/plugins/inferno&type=peer
[vulnerabilities]: https://snyk.io/test/npm/@leanup/cli-inferno/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/@leanup/cli-inferno
[downloads]: https://img.shields.io/npm/dm/@leanup/cli-inferno
[downloads-url]: https://npmcharts.com/compare/@leanup/cli-inferno?minimal=true
[travis-ci]: https://travis-ci.com/martinoppitz/leanup.svg?branch=master
[travis-ci-url]: https://travis-ci.com/martinoppitz/leanup
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/cli-inferno
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/cli-inferno
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org

# `@leanup/cli-inferno`

> This package contains the [Inferno](https://infernojs.org) framework extension for the [@leanup/cli](https://www.npmjs.com/package/@leanup/cli).

## Installation

`npm install @leanup/cli @leanup/cli-inferno --save-dev`

## Usage

## Usage

### Developing

> lean serve -f inferno -h

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

> lean build -f inferno -h

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
