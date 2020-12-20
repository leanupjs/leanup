![GitHub CI - Publish to NPM](https://github.com/leanupjs/leanup/workflows/GitHub%20CI%20-%20Publish%20to%20NPM/badge.svg)

[![downloads][downloads]][downloads-url]
[![npm][npm]][npm-url]
[![license][license]][license-url]

[![dependencies][dependencies]][dependencies-url]
[![devDependencies][devdependencies]][devdependencies-url]
[![peerDependencies][peerdependencies]][peerdependencies-url]
[![optionalDependencies][optionaldependencies]][optionaldependencies-url]

[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![install-size][install-size]][install-size-url]

[![lernajs][lernajs]][lernajs-url]
[![prettier][prettier]][prettier-url]

[npm]: https://img.shields.io/npm/v/@leanup/cli-core-test
[npm-url]: https://www.npmjs.com/package/@leanup/cli-core-test
[dependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/core/test&ref=release/1.0
[dependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/core/test&ref=release/1.0
[devdependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/core/test&ref=release/1.0&type=dev
[devdependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/core/test&ref=release/1.0&type=dev
[peerdependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/core/test&ref=release/1.0&type=peer
[peerdependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/core/test&ref=release/1.0&type=peer
[optionaldependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/core/test&ref=release/1.0&type=optional
[optionaldependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/core/test&ref=release/1.0&type=optional
[vulnerabilities]: https://snyk.io/test/npm/@leanup/cli-core-test/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/@leanup/cli-core-test
[downloads]: https://img.shields.io/npm/dt/@leanup/cli-core-test
[downloads-url]: https://npmcharts.com/compare/@leanup/cli-core-test?minimal=true
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/cli-core-test
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/cli-core-test
[license]: https://img.shields.io/npm/l/@leanup/cli
[license-url]: https://github.com/leanupjs/leanup/blob/master/LICENSE
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://prettier.io

# `@leanup/cli-core-test`

> This module contains some test ([mocha](https://mochajs.org/)) feature for the [@leanup/cli](https://www.npmjs.com/package/@leanup/cli).

## Dependencies

|               Package |                                                                                                                                                                Size |                                                                     Vulnerabilities                                                                     |
| --------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: |
|       @babel/register |                   [![install size of @babel/register](https://packagephobia.now.sh/badge?p=@babel/register)](https://packagephobia.now.sh/result?p=@babel/register) |          [![vulnerabilities of @babel/register](https://snyk.io/test/npm/@babel/register/badge.svg)](https://snyk.io/test/npm/@babel/register)          |
|           @types/chai |                               [![install size of @types/chai](https://packagephobia.now.sh/badge?p=@types/chai)](https://packagephobia.now.sh/result?p=@types/chai) |                [![vulnerabilities of @types/chai](https://snyk.io/test/npm/@types/chai/badge.svg)](https://snyk.io/test/npm/@types/chai)                |
|          @types/mocha |                            [![install size of @types/mocha](https://packagephobia.now.sh/badge?p=@types/mocha)](https://packagephobia.now.sh/result?p=@types/mocha) |              [![vulnerabilities of @types/mocha](https://snyk.io/test/npm/@types/mocha/badge.svg)](https://snyk.io/test/npm/@types/mocha)               |
|          @types/sinon |                            [![install size of @types/sinon](https://packagephobia.now.sh/badge?p=@types/sinon)](https://packagephobia.now.sh/result?p=@types/sinon) |              [![vulnerabilities of @types/sinon](https://snyk.io/test/npm/@types/sinon/badge.svg)](https://snyk.io/test/npm/@types/sinon)               |
| babel-plugin-istanbul | [![install size of babel-plugin-istanbul](https://packagephobia.now.sh/badge?p=babel-plugin-istanbul)](https://packagephobia.now.sh/result?p=babel-plugin-istanbul) | [![vulnerabilities of babel-plugin-istanbul](https://snyk.io/test/npm/babel-plugin-istanbul/badge.svg)](https://snyk.io/test/npm/babel-plugin-istanbul) |
|                  chai |                                                    [![install size of chai](https://packagephobia.now.sh/badge?p=chai)](https://packagephobia.now.sh/result?p=chai) |                          [![vulnerabilities of chai](https://snyk.io/test/npm/chai/badge.svg)](https://snyk.io/test/npm/chai)                           |
|             cross-env |                                     [![install size of cross-env](https://packagephobia.now.sh/badge?p=cross-env)](https://packagephobia.now.sh/result?p=cross-env) |                   [![vulnerabilities of cross-env](https://snyk.io/test/npm/cross-env/badge.svg)](https://snyk.io/test/npm/cross-env)                   |
|                   esm |                                                       [![install size of esm](https://packagephobia.now.sh/badge?p=esm)](https://packagephobia.now.sh/result?p=esm) |                            [![vulnerabilities of esm](https://snyk.io/test/npm/esm/badge.svg)](https://snyk.io/test/npm/esm)                            |
|                 jsdom |                                                 [![install size of jsdom](https://packagephobia.now.sh/badge?p=jsdom)](https://packagephobia.now.sh/result?p=jsdom) |                         [![vulnerabilities of jsdom](https://snyk.io/test/npm/jsdom/badge.svg)](https://snyk.io/test/npm/jsdom)                         |
|          jsdom-global |                            [![install size of jsdom-global](https://packagephobia.now.sh/badge?p=jsdom-global)](https://packagephobia.now.sh/result?p=jsdom-global) |              [![vulnerabilities of jsdom-global](https://snyk.io/test/npm/jsdom-global/badge.svg)](https://snyk.io/test/npm/jsdom-global)               |
|                 mocha |                                                 [![install size of mocha](https://packagephobia.now.sh/badge?p=mocha)](https://packagephobia.now.sh/result?p=mocha) |                         [![vulnerabilities of mocha](https://snyk.io/test/npm/mocha/badge.svg)](https://snyk.io/test/npm/mocha)                         |
|    mock-local-storage |          [![install size of mock-local-storage](https://packagephobia.now.sh/badge?p=mock-local-storage)](https://packagephobia.now.sh/result?p=mock-local-storage) |     [![vulnerabilities of mock-local-storage](https://snyk.io/test/npm/mock-local-storage/badge.svg)](https://snyk.io/test/npm/mock-local-storage)      |
|                   nyc |                                                       [![install size of nyc](https://packagephobia.now.sh/badge?p=nyc)](https://packagephobia.now.sh/result?p=nyc) |                            [![vulnerabilities of nyc](https://snyk.io/test/npm/nyc/badge.svg)](https://snyk.io/test/npm/nyc)                            |
|                 sinon |                                                 [![install size of sinon](https://packagephobia.now.sh/badge?p=sinon)](https://packagephobia.now.sh/result?p=sinon) |                         [![vulnerabilities of sinon](https://snyk.io/test/npm/sinon/badge.svg)](https://snyk.io/test/npm/sinon)                         |
