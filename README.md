[![lernajs][lernajs]][lernajs-url]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[npm]: https://img.shields.io/npm/v/@leanup/cli
[npm-url]: https://www.npmjs.com/package/@leanup/cli
[dependencies]: https://img.shields.io/david/dev/modevel/leanup
[dependencies-url]: https://david-dm.org/modevel/leanup?type=dev
[downloads]: https://img.shields.io/npm/dm/@leanup/cli
[downloads-url]: https://npmcharts.com/compare/@leanup/cli?minimal=true
[travis-ci]: https://travis-ci.com/modevel/leanup.svg?branch=master
[travis-ci-url]: https://travis-ci.com/modevel/leanup
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/cli
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/cli
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org

# LEAN⭧up

`@leanup/cli` shows how much is really required to develop, test and build a realisitic sized JavaScript web application.

- [LEAN⭧up](#leanup)
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
- [`@leanup/forms`](https://www.npmjs.com/package/@leanup/forms) ⌛ NEW [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/forms/badge.svg)](https://snyk.io/test/npm/@leanup/forms)
- [`@leanup/material-preact`](https://www.npmjs.com/package/@leanup/material-preact) ⌛ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/material-preact/badge.svg)](https://snyk.io/test/npm/@leanup/material-preact)
- [`@leanup/material-vanilla`](https://www.npmjs.com/package/@leanup/material-vanilla) ⌛ [![vulnerabilities of autoprefixer](https://snyk.io/test/npm/@leanup/material-vanilla/badge.svg)](https://snyk.io/test/npm/@leanup/material-vanilla)

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
