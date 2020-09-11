import { h } from 'preact';

import { PreactComponent } from '../component.preact';
import { HeaderComponent } from '../header/component';
import { AppController } from './controller';

export class AppComponent extends PreactComponent<unknown, unknown> {
  public constructor(props: unknown) {
    super(props, new AppController());
  }

  public render(): preact.JSX.Element {
    return (
      <div class="font-sans">
        <div class="flex bg-white border-b border-gray-200 inset-x-0 z-100 h-24 items-center">
          <div class="w-full max-w-screen-xl relative mx-auto px-6">
            <div class="flex items-center -mx-6">
              <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
                <div class="flex items-center">
                  <a class="block lg:mr-4" href="/" alt="Link to homepage">
                    <img class="h-24" alt="Logo of leanupjs" src="assets/logo.inline.svg"></img>
                  </a>
                </div>
              </div>
              <div class="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5">
                <div class="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12"></div>
                <div class=" flex items-center justify-between xl:w-1/4 px-6">
                  <div class="flex justify-start items-center text-gray-500">
                    <a class="flex items-center hover:text-gray-700 mr-5" href="https://github.com/leanupjs">
                      <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>GitHub</title>
                        <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
                      </svg>
                    </a>
                    {/* <a class="block flex items-center hover:text-gray-700 mr-5" href="https://twitter.com/tailwindcss">
                      <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>Twitter</title>
                        <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                      </svg>
                    </a> */}
                    <a class="block flex items-center hover:text-gray-700" href="https://discord.gg/EMh6De">
                      <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 146">
                        <title>Discord</title>
                        <path
                          d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <main class="lg:container lg:mx-auto">
          <p style="text-align: center; background: white;">
            <a href="https://leanupjs.org">
              <img src="https://leanupjs.org/assets/logo.svg" height="250"></img>
            </a>
            <br />
            <h2 style="text-align: center;">
              <cite>
                <b>Make things pure</b> ... to become lean.
              </cite>
            </h2>
          </p>
          <br />
          <hr />
          <p>
            <a href="https://github.com/leanupjs/cli/blob/master/LICENSE">
              <img src="https://img.shields.io/npm/l/@leanup/cli" alt="license" />
            </a>
            <a href="https://lerna.js.org">
              <img src="https://img.shields.io/badge/managed%20with-lerna-blueviolet" alt="lernajs" />
            </a>
            <a href="https://prettier.io">
              <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="prettier" />
            </a>
          </p>
          <h1>
            leanup<sup style="color: grey; font-size: 75%"> js</sup>
          </h1>
          <p>
            The{' '}
            <strong>
              <code>@leanup</code> ecosystem
            </strong>{' '}
            stands for a lightweight and pure way for application development in JavaScript/TypeScript.
          </p>
          <ul>
            <li>
              <a href="#motivation">Motivation</a>
            </li>
            <li>
              <a href="#what-makes-the-difference">What makes the difference</a>
            </li>
            <li>
              <a href="#tools-and-technologies">Tools and technologies</a>
            </li>
            <li>
              <a href="#principles">Principles</a>
            </li>
            <li>
              <a href="#arguments">Arguments</a>
              <ul>
                <li>
                  <a href="#pro">Pro</a>
                </li>
                <li>
                  <a href="#contra">Contra</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#demo">Demo</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#structure">Structure</a>
              <ul>
                <li>
                  <a href="#extensions">Extensions</a>
                  <ul>
                    <li>
                      <a href="#frameworks">Frameworks</a>
                    </li>
                    <li>
                      <a href="#addons">Addons</a>
                    </li>
                    <li>
                      <a href="#thinks">Thinks</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h2 id="motivation">Motivation</h2>
          <ul>
            <li>Learnability</li>
            <li>Controllability</li>
            <li>Universality</li>
            <li>Flexibility</li>
            <li>Scalability</li>
            <li>Durability</li>
            <li>Transparency</li>
          </ul>
          <h2 id="what-makes-the-difference">What makes the difference</h2>
          <blockquote>
            <p>
              <cite>Stop the transitive knowledge.</cite>
            </p>
          </blockquote>
          <p>
            We use the minimal configuration and build no overhead stuff on top of the popular tools and make every
            native command transparent.
          </p>
          <h2 id="tools-and-technologies">Tools and technologies</h2>
          <p>We use all tools and technologies without cluttered facades.</p>
          <h2 id="principles">Principles</h2>
          <ul>
            <li>convention over configuration</li>
            <li>pure commands under the hood</li>
            <li>don't repeat yourself</li>
            <li>following the generic instead of the influenced way</li>
            <li>keep the dependencies always up to date</li>
          </ul>
          <h2 id="arguments">Arguments</h2>
          <p>The arguments for and against this concept are documented here:</p>
          <h3 id="pro">Pro</h3>
          <ul>
            <li>select only one pure and popular tool for each use case (e.g. bundling, unit-test)</li>
            <li>there are extensible configuration files for each tool</li>
            <li>due to the flat dependencies we can always stay up to date</li>
            <li>the CLI bundles all the necessary tools in a portable/scalable way</li>
            <li>the risk to get vulnerabilites in dependencies is lower</li>
            <li>leanup's own code is kept to a minimum</li>
          </ul>
          <h3 id="contra">Contra</h3>
          <blockquote>
            <ul>
              <li>please give feedback</li>
              <li>please show us your perspective</li>
            </ul>
          </blockquote>
          <h2 id="demo">Demo</h2>
          <p>There are some working examples:</p>
          <ul>
            <li>
              <a href="https://github.modevel.de/poc/">https://github.modevel.de/poc/</a>
            </li>
            <li>
              <a href="https://github.com/martinoppitz/poc-flexible-web-application-architecture#readme">
                PoC - Flexible web application architecture
              </a>
            </li>
            <li>
              <a href="https://github.com/martinoppitz/hello-world-comparison#readme">Hello World - Comparison</a>
            </li>
          </ul>
          <h2 id="features">Features</h2>
          <table>
            <thead>
              <tr>
                <th>Tool/Technology</th>
                <th style="text-align:center">Description</th>
                <th style="text-align:center">Status</th>
                <th style="text-align:left">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="https://babeljs.io">Babel</a>
                </td>
                <td style="text-align:center">Transpiler</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://webpack.js.org">Webpack</a>
                </td>
                <td style="text-align:center">Bundler</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://typescriptlang.org">TypeScript</a>
                </td>
                <td style="text-align:center">Language</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://mochajs.org">Mocha</a>
                </td>
                <td style="text-align:center">Unit-Test-Runner</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.chaijs.com">Chai</a>
                </td>
                <td style="text-align:center">Assertion</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://sinonjs.org">Sinon</a>
                </td>
                <td style="text-align:center">Mocking</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://istanbul.js.org">NYC</a>
                </td>
                <td style="text-align:center">Code-Coverage</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://eslint.org">ESLint</a>
                </td>
                <td style="text-align:center">Code-Checker</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://nightwatchjs.org">Nightwatch.js</a>
                </td>
                <td style="text-align:center">E2E-Test-Runner</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="http://allure.qatools.ru">Allsure</a>
                </td>
                <td style="text-align:center">Report</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://cucumber.io">Cucumber</a>
                </td>
                <td style="text-align:center">BDD</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://robotframework.org">robotframework</a>
                </td>
                <td style="text-align:center">BDD</td>
                <td style="text-align:center">⌛</td>
                <td style="text-align:left">will be evaluated</td>
              </tr>
              <tr>
                <td>
                  <a href="https://storybook.js.org">Storybook</a>
                </td>
                <td style="text-align:center">Documentation</td>
                <td style="text-align:center">⌛</td>
                <td style="text-align:left">in progress</td>
              </tr>
              <tr>
                <td>
                  <a href="https://graphql.org">GraphQL</a>
                </td>
                <td style="text-align:center">API</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://developers.google.com/web/tools/workbox">Workbox</a>
                </td>
                <td style="text-align:center">PWA</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://lerna.js.org">Lerna</a>
                </td>
                <td style="text-align:center">Mono-Repo</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">ready</td>
              </tr>
              <tr>
                <td>
                  <a href="https://ant.design">Ant-Design</a>
                </td>
                <td style="text-align:center">Material Design</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">proved</td>
              </tr>
              <tr>
                <td>
                  <a href="https://material.io">Material</a>
                </td>
                <td style="text-align:center">Material Design</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">proved</td>
              </tr>
              <tr>
                <td>
                  <a href="https://getbootstrap.com">Bootstrap</a>
                </td>
                <td style="text-align:center">Material Design</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">proved</td>
              </tr>
              <tr>
                <td>
                  <a href="http://lesscss.org">Less</a>
                </td>
                <td style="text-align:center">CSS</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">proved</td>
              </tr>
              <tr>
                <td>
                  <a href="https://sass-lang.com">Sass</a>
                </td>
                <td style="text-align:center">CSS</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">proved</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.webhint.io">Webhint</a>
                </td>
                <td style="text-align:center">Webhint</td>
                <td style="text-align:center">✔️</td>
                <td style="text-align:left">moved ***</td>
              </tr>
              <tr>
                <td>
                  <a href="https://devexpress.github.io/testcafe/">TestCafe</a>
                </td>
                <td style="text-align:center">E2E-Test-Runner</td>
                <td style="text-align:center">⌛</td>
                <td style="text-align:left">will be evaluated ****</td>
              </tr>
              <tr>
                <td>
                  <a href="https://palantir.github.io/tslint">TSLint</a>
                </td>
                <td style="text-align:center">Code-Checker</td>
                <td style="text-align:center">❌</td>
                <td style="text-align:left">removed **</td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.cypress.io">Cypress</a>
                </td>
                <td style="text-align:center">E2E-Test-Runner</td>
                <td style="text-align:center">❌</td>
                <td style="text-align:left">excluded *</td>
              </tr>
            </tbody>
          </table>
          <blockquote>
            <p>
              * Arguments agains <a href="https://www.cypress.io">Cypress</a>:
            </p>
            <ul>
              <li>
                reinvent wheel
                <ul>
                  <li>detect css selectors</li>
                  <li>BDD test syntax</li>
                  <li>principals</li>
                </ul>
              </li>
              <li>large tooling</li>
              <li>a lot of binaries</li>
              <li>many dependencies</li>
              <li>ci integration vs selenium hub</li>
            </ul>
            <p>
              It is difficult to keep focus with Cypress as it is more a nice tool than an effective tool. It is
              expected that a lot of time will be invested to justify the requirements of a project.
            </p>
          </blockquote>
          <blockquote>
            <p>** TSLint is deprecated.</p>
          </blockquote>
          <blockquote>
            <p>
              *** Webhint is not practical for the development of components, since component tags often have no
              relation to standard HTML. In addition, the webhint package alone is over 100 MB in size. I have good by
              using a IDE webhint plugin, like{' '}
              <a href="https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint">VSCode webhint</a>.
            </p>
          </blockquote>
          <blockquote>
            <p>
              **** <a href="https://devexpress.github.io/testcafe/">TestCafe</a> The idea that defined TestCafe
              architecture was that you don't really need an external driver to run end-to-end tests in the browser.
              That's interesting.
            </p>
          </blockquote>
          <h2 id="structure">Structure</h2>
          <p>
            Vanilla Java-/TypeScript are supported by default. That means for example custom elements and any plain
            Java-/TypeScript code.
          </p>
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli">
                <code>@leanup/cli</code>
              </a>{' '}
              ✔️
            </li>
          </ul>
          <h3 id="extensions">Extensions</h3>
          <h4 id="frameworks">Frameworks</h4>
          <p>
            Vanilla Java-/TypeScript are supported by default. That means for example custom elements and any plain
            Java-/TypeScript code.
          </p>
          <p>The selection of the following frameworks depends in parts on the following references:</p>
          <ul>
            <li>
              <a href="https://ashleynolan.co.uk/blog/frontend-tooling-survey-2019-results#js-framework-essential">
                report
              </a>
              ,
            </li>
            <li>
              <a href="https://krausest.github.io/js-framework-benchmark/2020/table_chrome_80.html">benchmark</a> and
            </li>
            <li>
              <a href="https://2019.stateofjs.com/front-end-frameworks">survey</a>
            </li>
          </ul>
          <p>Currently the following framework extensions are available:</p>
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-angular">
                <code>@leanup/cli-angular</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-angular">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-angular/badge.svg"
                  alt="vulnerabilities of @leanup/cli-angular"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-angularjs">
                <code>@leanup/cli-angularjs</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-angularjs">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-angularjs/badge.svg"
                  alt="vulnerabilities of @leanup/cli-angularjs"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-aurelia">
                <code>@leanup/cli-aurelia</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-aurelia">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-aurelia/badge.svg"
                  alt="vulnerabilities of @leanup/cli-aurelia"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-inferno">
                <code>@leanup/cli-inferno</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-inferno">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-inferno/badge.svg"
                  alt="vulnerabilities of @leanup/cli-inferno"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-preact">
                <code>@leanup/cli-preact</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-preact">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-preact/badge.svg"
                  alt="vulnerabilities of @leanup/cli-preact"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-react">
                <code>@leanup/cli-react</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-react">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-react/badge.svg"
                  alt="vulnerabilities of @leanup/cli-react"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-svelte">
                <code>@leanup/cli-svelte</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-svelte">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-svelte/badge.svg"
                  alt="vulnerabilities of @leanup/cli-svelte"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-vanilla">
                <code>@leanup/cli-vanilla</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-vanilla">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-vanilla/badge.svg"
                  alt="vulnerabilities of @leanup/cli-vanilla"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-vue">
                <code>@leanup/cli-vue</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-vue">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-vue/badge.svg"
                  alt="vulnerabilities of @leanup/cli-vue"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-vue3">
                <code>@leanup/cli-vue3</code>
              </a>{' '}
              ✔️ (RC){' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-vue3">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-vue3/badge.svg"
                  alt="vulnerabilities of @leanup/cli-vue3"
                />
              </a>
            </li>
          </ul>
          <h4 id="addons">Addons</h4>
          <p>A separate package contains some nice but not required addons for webpack.</p>
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-addons">
                <code>@leanup/cli-addons</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-addons">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-addons/badge.svg"
                  alt="vulnerabilities of @leanup/cli-addons"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-cucumber">
                <code>@leanup/cli-cucumber</code>
              </a>{' '}
              NEW ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-cucumber">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-cucumber/badge.svg"
                  alt="vulnerabilities of @leanup/cli-cucumber"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-graphql">
                <code>@leanup/cli-graphql</code>
              </a>{' '}
              NEW ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-cucumber">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-graphql/badge.svg"
                  alt="vulnerabilities of @leanup/cli-graphql"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-pwa">
                <code>@leanup/cli-pwa</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-pwa">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-pwa/badge.svg"
                  alt="vulnerabilities of @leanup/cli-pwa"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/cli-webhint">
                <code>@leanup/cli-webhint</code>
              </a>{' '}
              ✔️{' '}
              <a href="https://snyk.io/test/npm/@leanup/cli-webhint">
                <img
                  src="https://snyk.io/test/npm/@leanup/cli-webhint/badge.svg"
                  alt="vulnerabilities of @leanup/cli-webhint"
                />
              </a>
            </li>
          </ul>
          <h4 id="thinks">Thinks</h4>
          <p>There a separate packages for important application features.</p>
          <ul>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/lib">
                <code>@leanup/lib</code>
              </a>{' '}
              ✔️ NEW{' '}
              <a href="https://snyk.io/test/npm/@leanup/lib">
                <img src="https://snyk.io/test/npm/@leanup/lib/badge.svg" alt="vulnerabilities of autoprefixer" />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/git-hooks">
                <code>@leanup/git-hooks</code>
              </a>{' '}
              ✔️ NEW{' '}
              <a href="https://snyk.io/test/npm/@leanup/git-hooks">
                <img src="https://snyk.io/test/npm/@leanup/git-hooks/badge.svg" alt="vulnerabilities of autoprefixer" />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/form">
                <code>@leanup/form</code>
              </a>{' '}
              ✔️ NEW{' '}
              <a href="https://snyk.io/test/npm/@leanup/form">
                <img src="https://snyk.io/test/npm/@leanup/form/badge.svg" alt="vulnerabilities of autoprefixer" />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/material-preact">
                <code>@leanup/material-preact</code>
              </a>{' '}
              ⌛{' '}
              <a href="https://snyk.io/test/npm/@leanup/material-preact">
                <img
                  src="https://snyk.io/test/npm/@leanup/material-preact/badge.svg"
                  alt="vulnerabilities of autoprefixer"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/material-vanilla">
                <code>@leanup/material-vanilla</code>
              </a>{' '}
              ⌛{' '}
              <a href="https://snyk.io/test/npm/@leanup/material-vanilla">
                <img
                  src="https://snyk.io/test/npm/@leanup/material-vanilla/badge.svg"
                  alt="vulnerabilities of autoprefixer"
                />
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@leanup/ui">
                <code>@leanup/ui</code>
              </a>{' '}
              ⌛ IN PROGRESS
            </li>
          </ul>
        </main>
      </div>
    );
  }
}
