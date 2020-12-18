<p style="text-align: center; background: white;">
  <a href="https://leanupjs.org">
    <img src="https://leanupjs.org/assets/logo.svg" height="250">
  </a><br>
  <h2 style="text-align: center;">
    <cite><b>Make things pure</b> ... to become lean.</cite>
  </h2>
</p>
<br>
<hr>

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

[leanup]: https://leanupjs.org/assets/logo.svg
[leanup-url]: https://leanupjs.org
[downloads]: https://img.shields.io/npm/dt/@leanup/cli.svg
[downloads-url]: https://npmcharts.com/compare/@leanup/cli
[npm]: https://img.shields.io/npm/v/@leanup/cli
[npm-url]: https://www.npmjs.com/package/@leanup/cli
[license]: https://img.shields.io/npm/l/@leanup/cli
[license-url]: https://github.com/leanupjs/leanup/blob/master/LICENSE
[dependencies]: https://david-dm.org/leanupjs/leanup/release%2F1.1/status.svg?path=packages/cli/core
[dependencies-url]: https://david-dm.org/leanupjs/leanup/release%2F1.1?path=packages/cli/core
[devdependencies]: https://img.shields.io/david/dev/leanupjs/leanup?path=packages/cli/core
[devdependencies-url]: https://david-dm.org/leanupjs/leanup/release%2F1.1?path=packages/cli/core&type=dev
[peerdependencies]: https://img.shields.io/david/peer/leanupjs/leanup?path=packages/cli/core
[peerdependencies-url]: https://david-dm.org/leanupjs/leanup/release%2F1.1?path=packages/cli/core&type=peer
[optionaldependencies]: https://img.shields.io/david/optional/leanupjs/leanup?path=packages/cli/core
[optionaldependencies-url]: https://david-dm.org/leanupjs/leanup/release%2F1.1?path=packages/cli/core&type=optional
[vulnerabilities]: https://snyk.io/test/npm/@leanup/cli/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/@leanup/cli
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/cli
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/cli
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://prettier.io

<h1>leanup<sup style="color: grey; font-size: 75%"> CLI</sup></h1>

The **`@leanup` CLI** contains all required popular tools in there minimal default, transparent and extensible configuration to develop JavaScript/TypeScript web applications.

- [Motivation](#motivation)
- [Principles](#principles)
- [Demo](#demo)
- [Installation](#installation)
- [Features](#features)
- [Structure](#structure)
  - [Frameworks](#frameworks)
  - [Extensions](#extensions)
  - [Thinks](#thinks)
- [Usage](#usage)
  - [Help](#help)
  - [Create](#create)
  - [Developing](#developing)
  - [Building](#building)
  - [Unit-Testing](#unit-testing)
  - [Test-Coverage](#test-coverage)
  - [E2E-Testing](#e2e-testing)
  - [Formatter](#formatter)
  - [Linter](#linter)
- [Replaced environment variables](#replaced-environment-variables)
- [Dependencies](#dependencies)
- [Peer dependencies](#peer-dependencies)
- [Optional tools](#optional-tools)

## Motivation

- Learnability
- Controllability
- Universality
- Flexibility
- Scalability
- Durability
- Transparency

## Principles

- convention over configuration
- pure commands under the hood
- don't repeat yourself
- following the generic instead of the influenced way
- keep the dependencies always up to date

## Demo

There are some working examples:

- [https://github.modevel.de/poc/](https://github.modevel.de/poc/)
- [PoC - Flexible web application architecture](https://github.com/martinoppitz/poc-flexible-web-application-architecture#readme)
- [Hello World - Comparison](https://github.com/martinoppitz/hello-world-comparison#readme)

## Installation

To install the **`@leanup` CLI** execute the following command:

> `npm install @leanup/cli typescript --save-dev`

And a non-framework or framework strategy must also be selected:

Non-framework:

> `npm install @leanup/cli-vanilla --save-dev`

Or with framework:

`npm install @leanup/cli-angular --save-dev` or<br>
`npm install @leanup/cli-angularjs --save-dev` or<br>
`npm install @leanup/cli-aurelia --save-dev` or<br>
`npm install @leanup/cli-inferno --save-dev` or<br>
`npm install @leanup/cli-preact --save-dev` or<br>
`npm install @leanup/cli-react --save-dev` or<br>
`npm install @leanup/cli-svelte --save-dev` or<br>
`npm install @leanup/cli-vue --save-dev` or<br>
`npm install @leanup/cli-vue3 --save-dev`

Install the peer dependencies `chromedriver`, `geckodriver` or `selenium-server` in the required version, if you need that features.

- `npm install chromedriver --save-dev`
- `npm install geckodriver --save-dev`
- `npm install selenium-server--save-dev`

## Features

| Tool/Technology  |    Description    | Status | Note                       |
| ---------------- | :---------------: | :----: | :------------------------- |
| [Babel]          |    Transpiler     |   ✔️   | ready                      |
| [Webpack]        |      Bundler      |   ✔️   | ready                      |
| [TypeScript]     |     Language      |   ✔️   | ready                      |
| [Mocha]          | Unit-Test-Runner  |   ✔️   | ready                      |
| [Chai]           |     Assertion     |   ✔️   | ready                      |
| [Sinon]          |      Mocking      |   ✔️   | ready                      |
| [NYC]            |   Code-Coverage   |   ✔️   | ready                      |
| [ESLint]         |   Code-Checker    |   ✔️   | ready                      |
| [Nightwatch.js]  |  E2E-Test-Runner  |   ✔️   | ready                      |
| [Allsure]        |      Report       |   ✔️   | ready                      |
| [Cucumber]       |        BDD        |   ✔️   | ready                      |
| [robotframework] |        BDD        |   ⌛   | will be evaluated          |
| [Storybook]      |   Documentation   |   ⌛   | in progress                |
| [GraphQL]        |        API        |   ✔️   | ready                      |
| [Workbox]        |        PWA        |   ✔️   | ready                      |
| [Lerna]          |     Mono-Repo     |   ✔️   | ready                      |
| [Ant-Design]     |   Design-System   |   ✔️   | proved                     |
| [Material]       |   Design-System   |   ✔️   | proved                     |
| [Bootstrap]      |   Design-System   |   ✔️   | proved                     |
| [Tailwindcss]    |   Design-System   |   ✔️   | proved                     |
| [Nexus IQ]       | Vulnerabiliy-Gate |   ✔️   | ready                      |
| [Less]           |        CSS        |   ✔️   | ready                      |
| [Sass]           |        CSS        |   ✔️   | ready                      |
| [PostCSS]        |        CSS        |   ✔️   | ready                      |
| [Webhint]        |      Webhint      |   ✔️   | moved \*\*\*               |
| [TestCafe]       |  E2E-Test-Runner  |   ⌛   | will be evaluated \*\*\*\* |
| [TSLint]         |   Code-Checker    |   ❌   | removed \*\*               |
| [Cypress]        |  E2E-Test-Runner  |   ❌   | excluded \*                |

> \*
> Arguments agains [Cypress]:
>
> - reinvent wheel
>   - detect css selectors
>   - BDD test syntax
>   - principals
> - large tooling
> - a lot of binaries
> - many dependencies
> - ci integration vs selenium hub
>
> It is difficult to keep focus with Cypress as it is more a nice tool than an effective tool. It is expected that a lot of time will be invested to justify the requirements of a project.

> \*\* TSLint is deprecated.

> \*\*\* Webhint is not practical for the development of components, since component tags often have no relation to standard HTML. In addition, the webhint package alone is over 100 MB in size. I have good by using a IDE webhint plugin, like [VSCode webhint](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint).

> \*\*\*\* [TestCafe] The idea that defined TestCafe architecture was that you don't really need an external driver to run end-to-end tests in the browser. That's interesting.

## Structure

Vanilla Java-/TypeScript are supported by default. That means for example custom elements and any plain Java-/TypeScript code.

- [`@leanup/cli`](https://www.npmjs.com/package/@leanup/cli) ✔️
- [`@leanup/cli-vanilla`](https://www.npmjs.com/package/@leanup/cli-vanilla) (optional) ✔️ [![vulnerabilities of @leanup/cli-vanilla](https://snyk.io/test/npm/@leanup/cli-vanilla/badge.svg)](https://snyk.io/test/npm/@leanup/cli-vanilla)

### Frameworks

Vanilla Java-/TypeScript are supported by default. That means for example custom elements and any plain Java-/TypeScript code.

The selection of the following frameworks depends in parts on the following references:

- [report](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2019-results#js-framework-essential),
- [benchmark](https://krausest.github.io/js-framework-benchmark/2020/table_chrome_80.html) and
- [survey](https://2019.stateofjs.com/front-end-frameworks)

Currently the following framework extensions are available:

- [`@leanup/cli-angular`](https://www.npmjs.com/package/@leanup/cli-angular) ✔️ [![vulnerabilities of @leanup/cli-angular](https://snyk.io/test/npm/@leanup/cli-angular/badge.svg)](https://snyk.io/test/npm/@leanup/cli-angular)
- [`@leanup/cli-angularjs`](https://www.npmjs.com/package/@leanup/cli-angularjs) ✔️ [![vulnerabilities of @leanup/cli-angularjs](https://snyk.io/test/npm/@leanup/cli-angularjs/badge.svg)](https://snyk.io/test/npm/@leanup/cli-angularjs)
- [`@leanup/cli-aurelia`](https://www.npmjs.com/package/@leanup/cli-aurelia) ✔️ [![vulnerabilities of @leanup/cli-aurelia](https://snyk.io/test/npm/@leanup/cli-aurelia/badge.svg)](https://snyk.io/test/npm/@leanup/cli-aurelia)
- [`@leanup/cli-inferno`](https://www.npmjs.com/package/@leanup/cli-inferno) ✔️ [![vulnerabilities of @leanup/cli-inferno](https://snyk.io/test/npm/@leanup/cli-inferno/badge.svg)](https://snyk.io/test/npm/@leanup/cli-inferno)
- [`@leanup/cli-preact`](https://www.npmjs.com/package/@leanup/cli-preact) ✔️ [![vulnerabilities of @leanup/cli-preact](https://snyk.io/test/npm/@leanup/cli-preact/badge.svg)](https://snyk.io/test/npm/@leanup/cli-preact)
- [`@leanup/cli-react`](https://www.npmjs.com/package/@leanup/cli-react) ✔️ [![vulnerabilities of @leanup/cli-react](https://snyk.io/test/npm/@leanup/cli-react/badge.svg)](https://snyk.io/test/npm/@leanup/cli-react)
- [`@leanup/cli-svelte`](https://www.npmjs.com/package/@leanup/cli-svelte) ✔️ [![vulnerabilities of @leanup/cli-svelte](https://snyk.io/test/npm/@leanup/cli-svelte/badge.svg)](https://snyk.io/test/npm/@leanup/cli-svelte)
- [`@leanup/cli-vue`](https://www.npmjs.com/package/@leanup/cli-vue) ✔️ [![vulnerabilities of @leanup/cli-vue](https://snyk.io/test/npm/@leanup/cli-vue/badge.svg)](https://snyk.io/test/npm/@leanup/cli-vue)
- [`@leanup/cli-vue3`](https://www.npmjs.com/package/@leanup/cli-vue3) ✔️ (RC) [![vulnerabilities of @leanup/cli-vue3](https://snyk.io/test/npm/@leanup/cli-vue3/badge.svg)](https://snyk.io/test/npm/@leanup/cli-vue3)

### Extensions

A separate package contains some nice but not required addons for webpack.

- [`@leanup/cli-addons`](https://www.npmjs.com/package/@leanup/cli-addons) ✔️ [![vulnerabilities of @leanup/cli-addons](https://snyk.io/test/npm/@leanup/cli-addons/badge.svg)](https://snyk.io/test/npm/@leanup/cli-addons)
- [`@leanup/cli-cucumber`](https://www.npmjs.com/package/@leanup/cli-cucumber) ✔️ [![vulnerabilities of @leanup/cli-cucumber](https://snyk.io/test/npm/@leanup/cli-cucumber/badge.svg)](https://snyk.io/test/npm/@leanup/cli-cucumber)
- [`@leanup/cli-graphql`](https://www.npmjs.com/package/@leanup/cli-graphql) ✔️ [![vulnerabilities of @leanup/cli-graphql](https://snyk.io/test/npm/@leanup/cli-graphql/badge.svg)](https://snyk.io/test/npm/@leanup/cli-cucumber)
- [`@leanup/cli-pwa`](https://www.npmjs.com/package/@leanup/cli-pwa) ✔️ [![vulnerabilities of @leanup/cli-pwa](https://snyk.io/test/npm/@leanup/cli-pwa/badge.svg)](https://snyk.io/test/npm/@leanup/cli-pwa)
- [`@leanup/cli-webhint`](https://www.npmjs.com/package/@leanup/cli-webhint) ✔️ [![vulnerabilities of @leanup/cli-webhint](https://snyk.io/test/npm/@leanup/cli-webhint/badge.svg)](https://snyk.io/test/npm/@leanup/cli-webhint)

### Thinks

There a separate packages for important application features.

- [`@leanup/git-hooks`](https://www.npmjs.com/package/@leanup/git-hooks) ✔️ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/git-hooks/badge.svg)](https://snyk.io/test/npm/@leanup/git-hooks)
- [`@leanup/form`](https://www.npmjs.com/package/@leanup/form) ✔️ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/form/badge.svg)](https://snyk.io/test/npm/@leanup/form)
- [`@leanup/lib`](https://www.npmjs.com/package/@leanup/lib) ✔️ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/lib/badge.svg)](https://snyk.io/test/npm/@leanup/lib)
- [`@leanup/material-preact`](https://www.npmjs.com/package/@leanup/material-preact) ⌛ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/material-preact/badge.svg)](https://snyk.io/test/npm/@leanup/material-preact)
- [`@leanup/material-vanilla`](https://www.npmjs.com/package/@leanup/material-vanilla) ⌛ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/material-vanilla/badge.svg)](https://snyk.io/test/npm/@leanup/material-vanilla)
- @leanup/ul ⌛

## Usage

If the CLI is also installed globally with `npm install -g @leanup/cli`, you can use the command `lean` directly in the bash.

If not, you must use `npx` and put it before the command. Like this: `npx lean`

### Help

> `> lean -h` (or `npx lean -h`)

### Create

> `> lean create -h` (or `npx lean create -h`)

### Developing

> `> lean serve -h` (or `npx lean serve -h`)

### Building

> `> lean build -h` (or `npx lean build -h`)

### Unit-Testing

> `> lean test -h` (or `npx lean test -h`)

### Test-Coverage

> `> lean coverage -h` (or `npx lean coverage -h`)

### E2E-Testing

> `> lean e2e -h` (or `npx lean e2e -h`)

### Formatter

> `> lean format -h` (or `npx lean format -h`)

### Linter

> `> lean lint -h` (or `npx lean lint -h`)

## Replaced environment variables

The following variable names are replaced by the values from `package.json` file in the bundle:

| Name         | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| APP_AUTHER   | The value of the `author` attribute from the package.json file.   |
| APP_HOMEPAGE | The value of the `homepage` attribute from the package.json file. |
| APP_NAME     | The value of the `name` attribute from the package.json file.     |
| APP_VERSION  | The value of the `version` attribute from the package.json file.  |
| NODE_ENV     | The value of the `version` attribute from the package.json file.  |

**For example:**

`package.json`:

```json
{
  "name": "@scope/my-app",
  "version": "1.1.0",
  "description": "This CLI brings along all required tools to serve, test and build multi framework SPAs",
  "author": "Martin Oppitz <npmjs@martinoppitz.com>",
  "homepage": "https://leanupjs.org",
  ...
```

App code:

```js
const APP_METADATA = {
  author: '$$APP_AUTHER$$',
  homepage: '$$APP_HOMEPAGE$$',
  name: '$$APP_NAME$$',
  version: '$$APP_VERSION$$',
  environment: '$$NODE_ENV$$', // development | test | production ⌛
};
console.log(APP_METADATA);
```

<!-- | $1 | [![install size of $1](https://packagephobia.now.sh/badge?p=$1)](https://packagephobia.now.sh/result?p=$1) | [![vulnerabilities of $1](https://snyk.io/test/npm/$1/badge.svg)](https://snyk.io/test/npm/$1) | -->

## Dependencies

|                                 Package |                                                                                                                                                                                                                      Size | Vulnerabilities                                                                                                                                                                                               |
| --------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                             @babel/core |                                                                                     [![install size of @babel/core](https://packagephobia.now.sh/badge?p=@babel/core)](https://packagephobia.now.sh/result?p=@babel/core) | [![vulnerabilities of @babel/core](https://snyk.io/test/npm/@babel/core/badge.svg)](https://snyk.io/test/npm/@babel/core)                                                                                     |
| @babel/plugin-proposal-class-properties | [![install size of @babel/plugin-proposal-class-properties](https://packagephobia.now.sh/badge?p=@babel/plugin-proposal-class-properties)](https://packagephobia.now.sh/result?p=@babel/plugin-proposal-class-properties) | [![vulnerabilities of @babel/plugin-proposal-class-properties](https://snyk.io/test/npm/@babel/plugin-proposal-class-properties/badge.svg)](https://snyk.io/test/npm/@babel/plugin-proposal-class-properties) |
|       @babel/plugin-proposal-decorators |                   [![install size of @babel/plugin-proposal-decorators](https://packagephobia.now.sh/badge?p=@babel/plugin-proposal-decorators)](https://packagephobia.now.sh/result?p=@babel/plugin-proposal-decorators) | [![vulnerabilities of @babel/plugin-proposal-decorators](https://snyk.io/test/npm/@babel/plugin-proposal-decorators/badge.svg)](https://snyk.io/test/npm/@babel/plugin-proposal-decorators)                   |
|                       @babel/preset-env |                                                                   [![install size of @babel/preset-env](https://packagephobia.now.sh/badge?p=@babel/preset-env)](https://packagephobia.now.sh/result?p=@babel/preset-env) | [![vulnerabilities of @babel/preset-env](https://snyk.io/test/npm/@babel/preset-env/badge.svg)](https://snyk.io/test/npm/@babel/preset-env)                                                                   |
|                @babel/preset-typescript |                                              [![install size of @babel/preset-typescript](https://packagephobia.now.sh/badge?p=@babel/preset-typescript)](https://packagephobia.now.sh/result?p=@babel/preset-typescript) | [![vulnerabilities of @babel/preset-typescript](https://snyk.io/test/npm/@babel/preset-typescript/badge.svg)](https://snyk.io/test/npm/@babel/preset-typescript)                                              |
|                    @leanup/cli-core-e2e |                                                          [![install size of @leanup/cli-core-e2e](https://packagephobia.now.sh/badge?p=@leanup/cli-core-e2e)](https://packagephobia.now.sh/result?p=@leanup/cli-core-e2e) | [![vulnerabilities of @leanup/cli-core-e2e](https://snyk.io/test/npm/@leanup/cli-core-e2e/badge.svg)](https://snyk.io/test/npm/@leanup/cli-core-e2e)                                                          |
|                 @leanup/cli-core-format |                                                 [![install size of @leanup/cli-core-format](https://packagephobia.now.sh/badge?p=@leanup/cli-core-format)](https://packagephobia.now.sh/result?p=@leanup/cli-core-format) | [![vulnerabilities of @leanup/cli-core-format](https://snyk.io/test/npm/@leanup/cli-core-format/badge.svg)](https://snyk.io/test/npm/@leanup/cli-core-format)                                                 |
|                   @leanup/cli-core-lint |                                                       [![install size of @leanup/cli-core-lint](https://packagephobia.now.sh/badge?p=@leanup/cli-core-lint)](https://packagephobia.now.sh/result?p=@leanup/cli-core-lint) | [![vulnerabilities of @leanup/cli-core-lint](https://snyk.io/test/npm/@leanup/cli-core-lint/badge.svg)](https://snyk.io/test/npm/@leanup/cli-core-lint)                                                       |
|                   @leanup/cli-core-test |                                                       [![install size of @leanup/cli-core-test](https://packagephobia.now.sh/badge?p=@leanup/cli-core-test)](https://packagephobia.now.sh/result?p=@leanup/cli-core-test) | [![vulnerabilities of @leanup/cli-core-test](https://snyk.io/test/npm/@leanup/cli-core-test/badge.svg)](https://snyk.io/test/npm/@leanup/cli-core-test)                                                       |
|                             @types/node |                                                                                     [![install size of @types/node](https://packagephobia.now.sh/badge?p=@types/node)](https://packagephobia.now.sh/result?p=@types/node) | [![vulnerabilities of @types/node](https://snyk.io/test/npm/@types/node/badge.svg)](https://snyk.io/test/npm/@types/node)                                                                                     |
|                            autoprefixer |                                                                                          [![install size of chai](https://packagephobia.now.sh/badge?p=autoprefixer)](https://packagephobia.now.sh/result?p=autoprefixer) | [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/autoprefixer/badge.svg)](https://snyk.io/test/npm/autoprefixer)                                                                                  |
|                            babel-loader |                                                                                  [![install size of babel-loader](https://packagephobia.now.sh/badge?p=babel-loader)](https://packagephobia.now.sh/result?p=babel-loader) | [![vulnerabilities of babel-loader](https://snyk.io/test/npm/babel-loader/badge.svg)](https://snyk.io/test/npm/babel-loader)                                                                                  |
|                                   chalk |                                                                                                        [![install size of chai](https://packagephobia.now.sh/badge?p=chalk)](https://packagephobia.now.sh/result?p=chalk) | [![vulnerabilities of chalk](https://snyk.io/test/npm/chalk/badge.svg)](https://snyk.io/test/npm/chalk)                                                                                                       |
|                               commander |                                                                                           [![install size of commander](https://packagephobia.now.sh/badge?p=commander)](https://packagephobia.now.sh/result?p=commander) | [![vulnerabilities of commander](https://snyk.io/test/npm/commander/badge.svg)](https://snyk.io/test/npm/commander)                                                                                           |
|             copy-modules-webpack-plugin |                                     [![install size of copy-modules-webpack-plugin](https://packagephobia.now.sh/badge?p=copy-modules-webpack-plugin)](https://packagephobia.now.sh/result?p=copy-modules-webpack-plugin) | [![vulnerabilities of copy-modules-webpack-plugin](https://snyk.io/test/npm/copy-modules-webpack-plugin/badge.svg)](https://snyk.io/test/npm/copy-modules-webpack-plugin)                                     |
|                              css-loader |                                                                                        [![install size of css-loader](https://packagephobia.now.sh/badge?p=css-loader)](https://packagephobia.now.sh/result?p=css-loader) | [![vulnerabilities of css-loader](https://snyk.io/test/npm/css-loader/badge.svg)](https://snyk.io/test/npm/css-loader)                                                                                        |
|                          esbuild-loader |                                                                            [![install size of esbuild-loader](https://packagephobia.now.sh/badge?p=esbuild-loader)](https://packagephobia.now.sh/result?p=esbuild-loader) | [![vulnerabilities of esbuild-loader](https://snyk.io/test/npm/esbuild-loader/badge.svg)](https://snyk.io/test/npm/esbuild-loader)                                                                            |
|                             file-loader |                                                                                     [![install size of file-loader](https://packagephobia.now.sh/badge?p=file-loader)](https://packagephobia.now.sh/result?p=file-loader) | [![vulnerabilities of file-loader](https://snyk.io/test/npm/file-loader/badge.svg)](https://snyk.io/test/npm/file-loader)                                                                                     |
|                                    less |                                                                                                          [![install size of less](https://packagephobia.now.sh/badge?p=less)](https://packagephobia.now.sh/result?p=less) | [![vulnerabilities of less](https://snyk.io/test/npm/less/badge.svg)](https://snyk.io/test/npm/less)                                                                                                          |
|                             less-loader |                                                                                     [![install size of less-loader](https://packagephobia.now.sh/badge?p=less-loader)](https://packagephobia.now.sh/result?p=less-loader) | [![vulnerabilities of less-loader](https://snyk.io/test/npm/less-loader/badge.svg)](https://snyk.io/test/npm/less-loader)                                                                                     |
|                                 postcss |                                                                                                 [![install size of postcss](https://packagephobia.now.sh/badge?p=postcss)](https://packagephobia.now.sh/result?p=postcss) | [![vulnerabilities of postcss](https://snyk.io/test/npm/postcss/badge.svg)](https://snyk.io/test/npm/postcss)                                                                                                 |
|                          postcss-loader |                                                                            [![install size of postcss-loader](https://packagephobia.now.sh/badge?p=postcss-loader)](https://packagephobia.now.sh/result?p=postcss-loader) | [![vulnerabilities of postcss-loader](https://snyk.io/test/npm/postcss-loader/badge.svg)](https://snyk.io/test/npm/postcss-loader)                                                                            |
|                                    sass |                                                                                                          [![install size of sass](https://packagephobia.now.sh/badge?p=sass)](https://packagephobia.now.sh/result?p=sass) | [![vulnerabilities of sass](https://snyk.io/test/npm/sass/badge.svg)](https://snyk.io/test/npm/sass)                                                                                                          |
|                             sass-loader |                                                                                     [![install size of sass-loader](https://packagephobia.now.sh/badge?p=sass-loader)](https://packagephobia.now.sh/result?p=sass-loader) | [![vulnerabilities of sass-loader](https://snyk.io/test/npm/sass-loader/badge.svg)](https://snyk.io/test/npm/sass-loader)                                                                                     |
|                   string-replace-loader |                                                       [![install size of string-replace-loader](https://packagephobia.now.sh/badge?p=string-replace-loader)](https://packagephobia.now.sh/result?p=string-replace-loader) | [![vulnerabilities of string-replace-loader](https://snyk.io/test/npm/string-replace-loader/badge.svg)](https://snyk.io/test/npm/string-replace-loader)                                                       |
|                            style-loader |                                                                                  [![install size of style-loader](https://packagephobia.now.sh/badge?p=style-loader)](https://packagephobia.now.sh/result?p=style-loader) | [![vulnerabilities of fibers](https://snyk.io/test/npm/style-loader/badge.svg)](https://snyk.io/test/npm/style-loader)                                                                                        |
|                                 webpack |                                                                                                 [![install size of webpack](https://packagephobia.now.sh/badge?p=webpack)](https://packagephobia.now.sh/result?p=webpack) | [![vulnerabilities of webpack](https://snyk.io/test/npm/webpack/badge.svg)](https://snyk.io/test/npm/webpack)                                                                                                 |
|                             webpack-cli |                                                                                     [![install size of webpack-cli](https://packagephobia.now.sh/badge?p=webpack-cli)](https://packagephobia.now.sh/result?p=webpack-cli) | [![vulnerabilities of webpack-cli](https://snyk.io/test/npm/webpack-cli/badge.svg)](https://snyk.io/test/npm/webpack-cli)                                                                                     |
|                      webpack-dev-server |                                                                [![install size of webpack-dev-server](https://packagephobia.now.sh/badge?p=webpack-dev-server)](https://packagephobia.now.sh/result?p=webpack-dev-server) | [![vulnerabilities of webpack-dev-server](https://snyk.io/test/npm/webpack-dev-server/badge.svg)](https://snyk.io/test/npm/webpack-dev-server)                                                                |

## Peer dependencies

|         Package |                                                                                                                                              Size |                                                            Vulnerabilities                                                            |
| --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
|    chromedriver |          [![install size of chromedriver](https://packagephobia.now.sh/badge?p=chromedriver)](https://packagephobia.now.sh/result?p=chromedriver) |     [![vulnerabilities of chromedriver](https://snyk.io/test/npm/chromedriver/badge.svg)](https://snyk.io/test/npm/chromedriver)      |
|     geckodriver |             [![install size of geckodriver](https://packagephobia.now.sh/badge?p=geckodriver)](https://packagephobia.now.sh/result?p=geckodriver) |       [![vulnerabilities of geckodriver](https://snyk.io/test/npm/geckodriver/badge.svg)](https://snyk.io/test/npm/geckodriver)       |
|         graphql |                         [![install size of graphql](https://packagephobia.now.sh/badge?p=graphql)](https://packagephobia.now.sh/result?p=graphql) |             [![vulnerabilities of graphql](https://snyk.io/test/npm/graphql/badge.svg)](https://snyk.io/test/npm/graphql)             |
| selenium-server | [![install size of selenium-server](https://packagephobia.now.sh/badge?p=selenium-server)](https://packagephobia.now.sh/result?p=selenium-server) | [![vulnerabilities of selenium-server](https://snyk.io/test/npm/selenium-server/badge.svg)](https://snyk.io/test/npm/selenium-server) |
|      typescript |                [![install size of typescript](https://packagephobia.now.sh/badge?p=typescript)](https://packagephobia.now.sh/result?p=typescript) |        [![vulnerabilities of typescript](https://snyk.io/test/npm/typescript/badge.svg)](https://snyk.io/test/npm/typescript)         |

## Optional tools

|            Package |                                                                                                                                                       Size |                                                                Vulnerabilities                                                                 |
| -----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: |
|  @leanup/git-hooks |    [![install size of @leanup/git-hooks](https://packagephobia.now.sh/badge?p=@leanup/git-hooks)](https://packagephobia.now.sh/result?p=@leanup/git-hooks) |  [![vulnerabilities of @leanup/git-hooks](https://snyk.io/test/npm/@leanup/git-hooks/badge.svg)](https://snyk.io/test/npm/@leanup/git-hooks)   |
| allure-commandline | [![install size of allure-commandline](https://packagephobia.now.sh/badge?p=allure-commandline)](https://packagephobia.now.sh/result?p=allure-commandline) | [![vulnerabilities of allure-commandline](https://snyk.io/test/npm/allure-commandline/badge.svg)](https://snyk.io/test/npm/allure-commandline) |
|              lerna |                                        [![install size of lerna](https://packagephobia.now.sh/badge?p=lerna)](https://packagephobia.now.sh/result?p=lerna) |                    [![vulnerabilities of lerna](https://snyk.io/test/npm/lerna/badge.svg)](https://snyk.io/test/npm/lerna)                     |
|        workbox-cli |                      [![install size of workbox-cli](https://packagephobia.now.sh/badge?p=workbox-cli)](https://packagephobia.now.sh/result?p=workbox-cli) |           [![vulnerabilities of workbox-cli](https://snyk.io/test/npm/workbox-cli/badge.svg)](https://snyk.io/test/npm/workbox-cli)            |

[babel]: https://babeljs.io
[typescript]: https://typescriptlang.org
[webpack]: https://webpack.js.org
[mocha]: https://mochajs.org
[chai]: https://www.chaijs.com
[sinon]: https://sinonjs.org
[nyc]: https://istanbul.js.org
[storybook]: https://storybook.js.org
[svelte devtools]: https://github.com/RedHatter/svelte-devtools
[nightwatch.js]: https://nightwatchjs.org
[tslint]: https://palantir.github.io/tslint
[eslint]: https://eslint.org
[graphql]: https://graphql.org
[sass]: https://sass-lang.com
[less]: http://lesscss.org
[lerna]: https://lerna.js.org
[workbox]: https://developers.google.com/web/tools/workbox
[ant-design]: https://ant.design
[allsure]: http://allure.qatools.ru
[bootstrap]: https://getbootstrap.com
[material]: https://material.io
[cucumber]: https://cucumber.io
[cypress]: https://www.cypress.io
[webhint]: https://www.webhint.io
[testcafe]: https://devexpress.github.io/testcafe/
[robotframework]: https://robotframework.org
[tailwindcss]: https://tailwindcss.com
[postcss]: https://postcss.org
[nexus iq]: https://blog.sonatype.com/using-nexus-iq-server-with-webpack
