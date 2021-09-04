![GitHub CI - Publish to NPM](https://github.com/leanupjs/leanup/workflows/GitHub%20CI%20-%20Publish%20to%20NPM/badge.svg)
[![dependencies][dependencies]][dependencies-url]
[![peer-dependencies][peer-dependencies]][peer-dependencies-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![npm][npm]][npm-url]
[![downloads][downloads]][downloads-url]
[![install-size][install-size]][install-size-url]
[![lernajs][lernajs]][lernajs-url]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[npm]: https://img.shields.io/npm/v/@leanup/cli-angularjs
[npm-url]: https://www.npmjs.com/package/@leanup/cli-angularjs
[dependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/frameworks/angularjs&ref=release/1.2
[dependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/frameworks/angularjs&ref=release/1.2
[peer-dependencies]: https://status.david-dm.org/gh/leanupjs/leanup.svg?path=packages/cli/frameworks/angularjs&ref=release/1.2&type=peer
[peer-dependencies-url]: https://david-dm.org/leanupjs/leanup?path=packages/cli/frameworks/angularjs&ref=release/1.2&type=peer
[vulnerabilities]: https://img.shields.io/snyk/vulnerabilities/npm/@leanup/cli-angularjs
[vulnerabilities-url]: https://snyk.io/test/npm/@leanup/cli-angularjs
[downloads]: https://img.shields.io/npm/dt/@leanup/cli-angularjs
[downloads-url]: https://npmcharts.com/compare/@leanup/cli-angularjs?minimal=true
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/cli-angularjs@next
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/cli-angularjs@next
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org

# `@leanup/cli-angularjs`

> This package contains the [AngularJS](https://angularjs.org/) CLI adapter. You can create a new or switch a existing project to the [@leanup/stack](https://www.npmjs.com/package/@leanup/stack).

## Installation

You can create a new project folder or go in a existing folder.

Create a new project folder:

1. `mkdir new-angularjs-app`
2. `cd new-angularjs-app`
3. `npm install -D @leanup/cli @leanup/cli-angularjs`
4. `npx angularjs create`

Go in a existing folder

1. `cd my-angularjs-app`
2. `npm install -D @leanup/cli @leanup/cli-angularjs`
3. `npx angularjs create --only-config --overwrite`
4. Proof the configuration changes and adopt it for your.

## Usage

Execute `npm run` in your terminal. It lists all preconfigured tools commands of the [@leanup/stack](https://www.npmjs.com/package/@leanup/stack).

For example: `npm start` 😉

## Feedback

Please give us feedback of you experience, so that we can continuously improve `@leanup`.
