![GitHub CI - Publish to NPM](https://github.com/leanupjs/cli/workflows/GitHub%20CI%20-%20Publish%20to%20NPM/badge.svg)
[![dependencies][dependencies]][dependencies-url]
[![peerDependencies][peerdependencies]][peerdependencies-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![npm][npm]][npm-url]
[![downloads][downloads]][downloads-url]
[![install-size][install-size]][install-size-url]
[![lernajs][lernajs]][lernajs-url]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[npm]: https://img.shields.io/npm/v/@leanup/cli
[npm-url]: https://www.npmjs.com/package/@leanup/cli
[dependencies]: https://img.shields.io/david/martinoppitz/leanup?path=cli/core
[dependencies-url]: https://david-dm.org/martinoppitz/leanup?path=cli/core
[peerdependencies]: https://img.shields.io/david/peer/martinoppitz/leanup?path=cli/core
[peerdependencies-url]: https://david-dm.org/martinoppitz/leanup?path=cli/core&type=peer
[vulnerabilities]: https://snyk.io/test/npm/@leanup/cli/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/@leanup/cli
[downloads]: https://img.shields.io/npm/dm/@leanup/cli
[downloads-url]: https://npmcharts.com/compare/@leanup/cli?minimal=true
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/cli
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/cli
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org

# LEAN⭧up (CLI)

`@leanup/cli` shows how much is really required to develop, test and build a realisitic sized JavaScript web application.

- [LEAN⭧up (CLI)](#leanup-cli)
  - [Motivation](#motivation)
  - [Tools and technologies](#tools-and-technologies)
  - [Principles](#principles)
  - [Arguments](#arguments)
    - [Pro](#pro)
    - [Contra](#contra)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Features](#features)
  - [Structure](#structure)
    - [Extensions](#extensions)
      - [Frameworks](#frameworks)
      - [Addons](#addons)
      - [Thinks](#thinks)
  - [Usage](#usage)
    - [Command-Line-Interface (CLI)](#command-line-interface-cli)
      - [Help](#help)
      - [Create](#create)
      - [Developing](#developing)
      - [Building](#building)
      - [Unit-Testing](#unit-testing)
      - [Test-Coverage](#test-coverage)
      - [E2E-Testing](#e2e-testing)
      - [Formatter](#formatter)
      - [Linter](#linter)
    - [Scripts (NPM)](#scripts-npm)
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

## Tools and technologies

We use all tools and technologies without cluttered facades.

## Principles

- convention over configuration
- pure commands under the hood
- don't repeat yourself
- following the generic instead of the influenced way
- keep the dependencies always up to date

## Arguments

The arguments for and against this concept are documented here:

### Pro

- select only one pure and popular tool for each use case (e.g. bundling, unit-test)
- there are extensible configuration files for each tool
- the CLI bundles all the necessary tools in a portable/scalable way
- the risk to get vulnerabilites in dependencies is lower

### Contra

> - please give feedback
> - please show us your perspective

## Demo

There are some working examples:

- [https://github.modevel.de/poc/](https://github.modevel.de/poc/)
- [PoC - Flexible web application architecture](https://github.com/martinoppitz/poc-flexible-web-application-architecture#readme)
- [Hello World - Comparison](https://github.com/martinoppitz/hello-world-comparison#readme)

## Installation

`npm install @leanup/cli typescript --save-dev` and `npm audit fix`

Install the peer dependencies `chromedriver`, `geckodriver`, `graphql`, `selenium-server` or `typescript` in the required version, if you need that feature.

- `npm install chromedriver --save-dev`
- `npm install geckodriver --save-dev`
- `npm install graphql --save-dev`
- `npm install selenium-server--save-dev`
- `npm install typescript --save-dev`

## Features

| Tool/Technology  |   Description    | Status | Note                       |
| ---------------- | :--------------: | :----: | :------------------------- |
| [Babel]          |    Transpiler    |   ✔️   | ready                      |
| [Webpack]        |     Bundler      |   ✔️   | ready                      |
| [TypeScript]     |     Language     |   ✔️   | ready                      |
| [Mocha]          | Unit-Test-Runner |   ✔️   | ready                      |
| [Chai]           |    Assertion     |   ✔️   | ready                      |
| [Sinon]          |     Mocking      |   ✔️   | ready                      |
| [NYC]            |  Code-Coverage   |   ✔️   | ready                      |
| [ESLint]         |   Code-Checker   |   ✔️   | ready                      |
| [Nightwatch.js]  | E2E-Test-Runner  |   ✔️   | ready                      |
| [Allsure]        |      Report      |   ✔️   | ready                      |
| [Cucumber]       |       BDD        |   ✔️   | ready                      |
| [robotframework] |       BDD        |   ⌛   | will be evaluated          |
| [Storybook]      |  Documentation   |   ⌛   | upcoming                   |
| [GraphQL]        |       API        |   ✔️   | ready                      |
| [Workbox]        |       PWA        |   ✔️   | ready                      |
| [Lerna]          |    Mono-Repo     |   ✔️   | ready                      |
| [Ant-Design]     | Material Design  |   ✔️   | proved                     |
| [Material]       | Material Design  |   ✔️   | proved                     |
| [Bootstrap]      | Material Design  |   ✔️   | proved                     |
| [Less]           |       CSS        |   ✔️   | proved                     |
| [Sass]           |       CSS        |   ✔️   | proved                     |
| [Webhint]        |     Webhint      |   ✔️   | moved \*\*\*               |
| [TestCafe]       | E2E-Test-Runner  |   ⌛   | will be evaluated \*\*\*\* |
| [TSLint]         |   Code-Checker   |   ❌   | removed \*\*               |
| [Cypress]        | E2E-Test-Runner  |   ❌   | excluded \*                |

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

### Extensions

#### Frameworks

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
- [`@leanup/cli-vanilla`](https://www.npmjs.com/package/@leanup/cli-vanilla) ✔️ [![vulnerabilities of @leanup/cli-vanilla](https://snyk.io/test/npm/@leanup/cli-vanilla/badge.svg)](https://snyk.io/test/npm/@leanup/cli-vanilla)
- [`@leanup/cli-vue`](https://www.npmjs.com/package/@leanup/cli-vue) ✔️ [![vulnerabilities of @leanup/cli-vue](https://snyk.io/test/npm/@leanup/cli-vue/badge.svg)](https://snyk.io/test/npm/@leanup/cli-vue)
- [`@leanup/cli-vue3`](https://www.npmjs.com/package/@leanup/cli-vue3) ✔️ (RC) [![vulnerabilities of @leanup/cli-vue3](https://snyk.io/test/npm/@leanup/cli-vue3/badge.svg)](https://snyk.io/test/npm/@leanup/cli-vue3)

#### Addons

A separate package contains some nice but not required addons for webpack.

- [`@leanup/cli-addons`](https://www.npmjs.com/package/@leanup/cli-addons) ✔️ [![vulnerabilities of @leanup/cli-addons](https://snyk.io/test/npm/@leanup/cli-addons/badge.svg)](https://snyk.io/test/npm/@leanup/cli-addons)
- [`@leanup/cli-cucumber`](https://www.npmjs.com/package/@leanup/cli-cucumber) NEW ✔️ [![vulnerabilities of @leanup/cli-cucumber](https://snyk.io/test/npm/@leanup/cli-cucumber/badge.svg)](https://snyk.io/test/npm/@leanup/cli-cucumber)
- [`@leanup/cli-graphql`](https://www.npmjs.com/package/@leanup/cli-graphql) NEW ✔️ [![vulnerabilities of @leanup/cli-graphql](https://snyk.io/test/npm/@leanup/cli-graphql/badge.svg)](https://snyk.io/test/npm/@leanup/cli-cucumber)
- [`@leanup/cli-pwa`](https://www.npmjs.com/package/@leanup/cli-pwa) ✔️ [![vulnerabilities of @leanup/cli-pwa](https://snyk.io/test/npm/@leanup/cli-pwa/badge.svg)](https://snyk.io/test/npm/@leanup/cli-pwa)
- [`@leanup/cli-webhint`](https://www.npmjs.com/package/@leanup/cli-webhint) ✔️ [![vulnerabilities of @leanup/cli-webhint](https://snyk.io/test/npm/@leanup/cli-webhint/badge.svg)](https://snyk.io/test/npm/@leanup/cli-webhint)

#### Thinks

There a separate packages for important application features.

- [`@leanup/lib`](https://www.npmjs.com/package/@leanup/lib) ✔️ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/lib/badge.svg)](https://snyk.io/test/npm/@leanup/lib)
- [`@leanup/git-hooks`](https://www.npmjs.com/package/@leanup/git-hooks) ✔️ NEW [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/git-hooks/badge.svg)](https://snyk.io/test/npm/@leanup/git-hooks)
- [`@leanup/form`](https://www.npmjs.com/package/@leanup/form) ⌛ NEW [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/form/badge.svg)](https://snyk.io/test/npm/@leanup/form)
- [`@leanup/material-preact`](https://www.npmjs.com/package/@leanup/material-preact) ⌛ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/material-preact/badge.svg)](https://snyk.io/test/npm/@leanup/material-preact)
- [`@leanup/material-vanilla`](https://www.npmjs.com/package/@leanup/material-vanilla) ⌛ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/material-vanilla/badge.svg)](https://snyk.io/test/npm/@leanup/material-vanilla)

## Usage

### Command-Line-Interface (CLI)

If the CLI is also installed globally with `npm install -g @leanup/cli`, you can use the command `lean` directly in the bash.

If not, you must use `npx` and put it before the command. Like this: `npx lean`

#### Help

> `> lean -h` (or `npx lean -h`)

#### Create

> `> lean create -h` (or `npx lean create -h`)

#### Developing

> `> lean serve -h` (or `npx lean serve -h`)

#### Building

> `> lean build -h` (or `npx lean build -h`)

#### Unit-Testing

> `> lean test -h` (or `npx lean test -h`)

#### Test-Coverage

> `> lean coverage -h` (or `npx lean coverage -h`)

#### E2E-Testing

> `> lean e2e -h` (or `npx lean e2e -h`)

#### Formatter

> `> lean format -h` (or `npx lean format -h`)

#### Linter

> `> lean lint -h` (or `npx lean lint -h`)

### Scripts (NPM)

The following script commands are exactly the same executions that the CLI has under the hood.

Use this scripts in your `package.json`:

```json
...
  scripts {
    "build": "webpack --config=node_modules/@leanup/cli/webpack.config.js --mode=production",
    "coverage": "cross-env NODE_ENV=test nyc mocha --config=node_modules/@leanup/cli/.mocharc.js && nyc check-coverage",
    "e2e": "nightwatch --config=node_modules/@leanup/cli/nightwatch.conf",
    "format": "prettier \"src/**/*\"",
    "lint": "tslint \"src/**/*.ts*\"",
    "serve": "webpack-dev-server --config=node_modules/@leanup/cli/webpack.config.js --devtool=source-map --progress",
    "test": "cross-env NODE_ENV=test mocha --config=node_modules/@leanup/cli/.mocharc.js"
  }
...
```

- Developing: `npm run serve -- [options]`
- Building: `npm run serve -- [options]`
- Unit-Testing: `npm run test -- [options]`
- Coverage: `npm run coverage`
- E2E-Testing: `npm run e2e -- [options]`
- Formatter: `npm run format -- [options]`
- Linter: `npm run lint -- [options]`

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
|                     copy-webpack-plugin |                                                             [![install size of copy-webpack-plugin](https://packagephobia.now.sh/badge?p=copy-webpack-plugin)](https://packagephobia.now.sh/result?p=copy-webpack-plugin) | [![vulnerabilities of copy-webpack-plugin](https://snyk.io/test/npm/copy-webpack-plugin/badge.svg)](https://snyk.io/test/npm/copy-webpack-plugin)                                                             |
|                              css-loader |                                                                                        [![install size of css-loader](https://packagephobia.now.sh/badge?p=css-loader)](https://packagephobia.now.sh/result?p=css-loader) | [![vulnerabilities of css-loader](https://snyk.io/test/npm/css-loader/badge.svg)](https://snyk.io/test/npm/css-loader)                                                                                        |
|                             file-loader |                                                                                     [![install size of file-loader](https://packagephobia.now.sh/badge?p=file-loader)](https://packagephobia.now.sh/result?p=file-loader) | [![vulnerabilities of file-loader](https://snyk.io/test/npm/file-loader/badge.svg)](https://snyk.io/test/npm/file-loader)                                                                                     |
|                     html-webpack-plugin |                                                             [![install size of html-webpack-plugin](https://packagephobia.now.sh/badge?p=html-webpack-plugin)](https://packagephobia.now.sh/result?p=html-webpack-plugin) | [![vulnerabilities of html-webpack-plugin](https://snyk.io/test/npm/html-webpack-plugin/badge.svg)](https://snyk.io/test/npm/html-webpack-plugin)                                                             |
|                                    less |                                                                                                          [![install size of less](https://packagephobia.now.sh/badge?p=less)](https://packagephobia.now.sh/result?p=less) | [![vulnerabilities of less](https://snyk.io/test/npm/less/badge.svg)](https://snyk.io/test/npm/less)                                                                                                          |
|                             less-loader |                                                                                     [![install size of less-loader](https://packagephobia.now.sh/badge?p=less-loader)](https://packagephobia.now.sh/result?p=less-loader) | [![vulnerabilities of less-loader](https://snyk.io/test/npm/less-loader/badge.svg)](https://snyk.io/test/npm/less-loader)                                                                                     |
|                 mini-css-extract-plugin |                                                 [![install size of mini-css-extract-plugin](https://packagephobia.now.sh/badge?p=mini-css-extract-plugin)](https://packagephobia.now.sh/result?p=mini-css-extract-plugin) | [![vulnerabilities of mini-css-extract-plugin](https://snyk.io/test/npm/mini-css-extract-plugin/badge.svg)](https://snyk.io/test/npm/mini-css-extract-plugin)                                                 |
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
[typescript]: https:/typescriptlang.org
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
