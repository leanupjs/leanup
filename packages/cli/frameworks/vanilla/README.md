![GitHub CI - Publish to NPM](https://github.com/leanupjs/leanup/workflows/GitHub%20CI%20-%20Publish%20to%20NPM/badge.svg)
[![npm][npm]][npm-url]
[![downloads][downloads]][downloads-url]
[![install-size][install-size]][install-size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![lernajs][lernajs]][lernajs-url]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[![dependencies][dependencies]][dependencies-url]
[![dev-dependencies][dev-dependencies]][dev-dependencies-url]
[![peer-dependencies][peer-dependencies]][peer-dependencies-url]
[![optional-dependencies][optional-dependencies]][optional-dependencies-url]

[npm]: https://img.shields.io/npm/v/@leanup/cli-vanilla
[npm-url]: https://www.npmjs.com/package/@leanup/cli-vanilla
[dependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/frameworks/vanilla&ref=release/1.2
[dependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/frameworks/vanilla&ref=release/1.2
[dev-dependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/frameworks/vanilla&ref=release/1.2&type=dev
[dev-dependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/frameworks/vanilla&ref=release/1.2&type=dev
[peer-dependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/frameworks/vanilla&ref=release/1.2&type=peer
[peer-dependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/frameworks/vanilla&ref=release/1.2&type=peer
[optional-dependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/frameworks/vanilla&ref=release/1.2&type=optional
[optional-dependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/frameworks/vanilla&ref=release/1.2&type=optional
[vulnerabilities]: https://img.shields.io/snyk/vulnerabilities/npm/@leanup/cli-vanilla
[vulnerabilities-url]: https://snyk.io/test/npm/@leanup/cli-vanilla
[downloads]: https://img.shields.io/npm/dt/@leanup/cli-vanilla
[downloads-url]: https://npmcharts.com/compare/@leanup/cli-vanilla?minimal=true
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/cli-vanilla@next
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/cli-vanilla@next
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org
[@leanup/cli]: https://www.npmjs.com/package/@leanup/cli

# `@leanup/cli-vanilla`

This package contains the [Vanilla](http://vanilla-js.com/) CLI adapter. You can create a new or switch a existing project to the [@leanup/stack](https://www.npmjs.com/package/@leanup/stack).

## Installation

You can create a new project folder or go in a existing folder.

Create a new project folder:

1. `mkdir new-vanilla-app`
2. `cd new-vanilla-app`
3. `npm install -D @leanup/cli @leanup/cli-vanilla`
4. `npx vanilla create`

Go in a existing folder

1. `cd my-vanilla-app`
2. `npm install -D @leanup/cli @leanup/cli-vanilla`
3. `npx vanilla create --only-config --overwrite`
4. Proof the configuration changes and adopt it for your.

## Usage

Execute `npm run` in your terminal. It lists all preconfigured tools commands of the [@leanup/stack](https://www.npmjs.com/package/@leanup/stack).

For example: `npm start` 😉

## Feedback

Please give us feedback of you experience, so that we can continuously improve `@leanup`.
