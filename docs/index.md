<p style="text-align: center; background: white;">
  <a href="https://leanupjs.org">
    <img src="https://leanupjs.org/assets/logo.svg" height="200">
  </a><br>
  <h2 style="text-align: center;">
    <cite><b>Make things pure</b> ... to become lean.</cite>
  </h2>
</p>
<hr>

[![license][license]][license-url]&#160;
[![lernajs][lernajs]][lernajs-url]&#160;
[![prettier][prettier]][prettier-url]&#160;
[![@leanup/cli](https://snyk.io/advisor/npm-package/@leanup/cli/badge.svg)](https://snyk.io/advisor/npm-package/@leanup/cli)

[license]: https://img.shields.io/npm/l/@leanup/stack
[license-url]: https://github.com/leanupjs/leanup/blob/release/1.2/LICENSE.md
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://prettier.io

<h1>leanup<sup style="color: grey; font-size: 75%"> js</sup></h1>

The **`@leanup` ecosystem** stands for a lightweight and pure way for application development in JavaScript/TypeScript.

## Motivation

- Learnability
- Controllability
- Universality
- Flexibility
- Scalability
- Durability
- Transparency

## Differences

> ⛔ <cite style="color: red"> Stop the proprietary and transitive knowledge.</cite>

> 📑 <cite style="color: black"> We use the minimal configuration and build no overhead stuff on top of the popular tools and make every native command transparent.</cite>

> 🤸‍♂️ <cite style="color: blue">We are fast and flexible because we have chosen the minimally sensible tool composition and decoupled it in separately serviceable modules.</cite>

## Principles

- convention over configuration
- pure commands under the hood
- don't repeat yourself
- following the generic instead of the influenced way
- keep the dependencies always up to date

## Demo's

There are some working examples:

- [https://github.modevel.de/poc/](https://github.modevel.de/poc/)
- [PoC - Flexible web application architecture](https://github.com/martinoppitz/poc-flexible-web-application-architecture#readme)
- [Hello World - Comparison](https://github.com/martinoppitz/hello-world-comparison#readme)

## Tools

| Tool/Technology  |    Description    | Status | Note                       | Rating                                                                                                                                               |
| ---------------- | :---------------: | :----: | :------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TypeScript]     |     Language      |   ✔️   | ready                      | [![typescript](https://snyk.io/advisor/npm-package/typescript/badge.svg)](https://snyk.io/advisor/npm-package/typescript)                            |
| [Webpack]        |      Bundler      |   ✔️   | ready                      | [![webpack](https://snyk.io/advisor/npm-package/webpack/badge.svg)](https://snyk.io/advisor/npm-package/webpack)                                     |
| [Snowpack]       |      Bundler      |   ⌛   | in progress                | [![webpack](https://snyk.io/advisor/npm-package/snowpack/badge.svg)](https://snyk.io/advisor/npm-package/snowpack)                                   |
| [Vite]           |      Bundler      |   ⌛   | in progress                | [![webpack](https://snyk.io/advisor/npm-package/vite/badge.svg)](https://snyk.io/advisor/npm-package/vite)                                           |
| [ESBuild]        |    Transpiler     |   ✔️   | ready                      | [![esbuild](https://snyk.io/advisor/npm-package/esbuild/badge.svg)](https://snyk.io/advisor/npm-package/esbuild)                                     |
| [Babel]          |    Transpiler     |   ✔️   | ready                      | [![@babel/core](https://snyk.io/advisor/npm-package/@babel/core/badge.svg)](https://snyk.io/advisor/npm-package/@babel/core)                         |
| [Mocha]          | Unit-Test-Runner  |   ✔️   | ready                      | [![mocha](https://snyk.io/advisor/npm-package/mocha/badge.svg)](https://snyk.io/advisor/npm-package/mocha)                                           |
| [Chai]           |     Assertion     |   ✔️   | ready                      | [![chai](https://snyk.io/advisor/npm-package/typescript/badge.svg)](https://snyk.io/advisor/npm-package/chai)                                        |
| [Sinon]          |      Mocking      |   ✔️   | ready                      | [![sinon](https://snyk.io/advisor/npm-package/sinon/badge.svg)](https://snyk.io/advisor/npm-package/sinon)                                           |
| [NYC]            |   Code-Coverage   |   ✔️   | ready                      | [![nyc](https://snyk.io/advisor/npm-package/nyc/badge.svg)](https://snyk.io/advisor/npm-package/nyc)                                                 |
| [ESLint]         |   Code-Checker    |   ✔️   | ready                      | [![eslint](https://snyk.io/advisor/npm-package/eslint/badge.svg)](https://snyk.io/advisor/npm-package/eslint)                                        |
| [Nightwatch.js]  |  E2E-Test-Runner  |   ✔️   | ready                      | [![nightwatch](https://snyk.io/advisor/npm-package/nightwatch/badge.svg)](https://snyk.io/advisor/npm-package/nightwatch)                            |
| [Allsure]        |      Report       |   ✔️   | ready                      |
| [Cucumber]       |        BDD        |   ✔️   | ready                      | [![cucumber](https://snyk.io/advisor/npm-package/cucumber/badge.svg)](https://snyk.io/advisor/npm-package/cucumber)                                  |
| [robotframework] |        BDD        |   ⌛   | will be evaluated          |                                                                                                                                                      |
| [Storybook]      |   Documentation   |   ⌛   | in progress                | [![storybook](https://snyk.io/advisor/npm-package/storybook/badge.svg)](https://snyk.io/advisor/npm-package/storybook)                               |
| [OpenAPI]        |        API        |   ✔️   | ready                      |                                                                                                                                                      |
| [GraphQL]        |        API        |   ✔️   | ready                      | [![graphql](https://snyk.io/advisor/npm-package/graphql/badge.svg)](https://snyk.io/advisor/npm-package/graphql)                                     |
| [Workbox]        |        PWA        |   ✔️   | ready                      | [![workbox](https://snyk.io/advisor/npm-package/workbox/badge.svg)](https://snyk.io/advisor/npm-package/workbox)                                     |
| [Lerna]          |     Mono-Repo     |   ✔️   | ready                      | [![lerna](https://snyk.io/advisor/npm-package/lerna/badge.svg)](https://snyk.io/advisor/npm-package/lerna)                                           |
| [Ant-Design]     |   Design-System   |   ✔️   | proved                     | [![antd](https://snyk.io/advisor/npm-package/antd/badge.svg)](https://snyk.io/advisor/npm-package/antd)                                              |
| [Material]       |   Design-System   |   ✔️   | proved                     | [![@material/textfield](https://snyk.io/advisor/npm-package/@material/textfield/badge.svg)](https://snyk.io/advisor/npm-package/@material/textfield) |
| [Bootstrap]      |   Design-System   |   ✔️   | proved                     | [![bootstrap](https://snyk.io/advisor/npm-package/bootstrap/badge.svg)](https://snyk.io/advisor/npm-package/bootstrap)                               |
| [Tailwindcss]    |   Design-System   |   ✔️   | proved                     | [![tailwindcss](https://snyk.io/advisor/npm-package/tailwindcss/badge.svg)](https://snyk.io/advisor/npm-package/tailwindcss)                         |
| [Nexus IQ]       | Vulnerabiliy-Gate |   ✔️   | ready                      |                                                                                                                                                      |
| [Less]           |        CSS        |   ✔️   | ready                      | [![less](https://snyk.io/advisor/npm-package/less/badge.svg)](https://snyk.io/advisor/npm-package/less)                                              |
| [Sass]           |        CSS        |   ✔️   | ready                      | [![sass](https://snyk.io/advisor/npm-package/sass/badge.svg)](https://snyk.io/advisor/npm-package/sass)                                              |
| [PostCSS]        |        CSS        |   ✔️   | ready                      |
| [TSArch]         |   Architecture    |   ⌛   | in progress                | [![hint](https://snyk.io/advisor/npm-package/tsarch/badge.svg)](https://snyk.io/advisor/npm-package/tsarch)                                          |
| [Webhint]        |      Webhint      |   ✔️   | moved \*\*\*               | [![hint](https://snyk.io/advisor/npm-package/hint/badge.svg)](https://snyk.io/advisor/npm-package/hint)                                              |
| [TestCafe]       |  E2E-Test-Runner  |   ⌛   | will be evaluated \*\*\*\* | [![testcafe](https://snyk.io/advisor/npm-package/testcafe/badge.svg)](https://snyk.io/advisor/npm-package/typescript)                                |
| [TSLint]         |   Code-Checker    |   ❌   | removed \*\*               | [![tslint](https://snyk.io/advisor/npm-package/tslint/badge.svg)](https://snyk.io/advisor/npm-package/tslint)                                        |
| [Cypress]        |  E2E-Test-Runner  |   ❌   | excluded \*                | [![cypress](https://snyk.io/advisor/npm-package/cypress/badge.svg)](https://snyk.io/advisor/npm-package/cypress)                                     |

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
[esbuild]: https://esbuild.github.io
[snowpack]: https://www.snowpack.dev/
[vite]: https://vitejs.dev/
[openapi]: https://openapis.org
[nexus iq]: https://blog.sonatype.com/using-nexus-iq-server-with-webpack
[tsarch]: https://github.com/MaibornWolff/ts-arch
