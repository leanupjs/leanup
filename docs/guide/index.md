<h1>Guide</h1>

The `@leanup stack` only contains the selected tools and their default configuration. No specific things are implemented, such as a dedicated CLI.

This means that all commands for developing, testing or building etc. the app relate to the configuration of the `npm scripts`.

<h2>Table of contents</h2>

- [Installation](#installation)
- [The tools](#the-tools)
  - [Bundler](#bundler)
  - [Transpiler](#transpiler)
  - [Formatter](#formatter)
  - [Linting](#linting)
  - [Testing](#testing)
  - [Unit-Testing](#unit-testing)
  - [E2E-Testing](#e2e-testing)
- [NPM-Scripts](#npm-scripts)

## Installation

Execute the command `npm ci` in your bash.

## The tools

### Bundler

The main legacy bundler is `webpack`. In addition to `webpack`, we have expanded the `@leanup stack` to include the alternatives `vite` and `snowpack`.

**List:**

- Snowpack
- Vite
- Webpack

### Transpiler

The main transpiler is `esbuild`. In addition to `esbuild`, we have provide a `babel` transpiler package for the `@leanup stack`. It is needed by `AngularJS` and `Inferno`.

**List:**

- Babel
- ESBuild

### Formatter

We chose `prettier` for the code formatting.

### Linting

We chose primary `eslint` for the static code checking. In addition to `eslint`, we provide a `tsc` command.

### Testing

Our test strategy focuses on unit- and e2e-testing.

### Unit-Testing

[...]

**List:**

- Mocha

### E2E-Testing

[...]

**List:**

- Nightwatch.js

## NPM-Scripts

The following table lists the `scripts tags` available for `npm scripts`:

> `npm run <script tag>`

| script tag       | command line execution                                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| coverage         | `cross-env NODE_ENV=test nyc mocha`                                                                                                                                                                                                                                 |
| cucumber\*       | `cross-env NIGHTWATCH_ENV=chrome cucumber-js tests/cucumber/features/**/*.feature --require @babel/register --require cucumber.conf.js --require tests/cucumber/step-definitions --format node_modules/cucumber-pretty --format json:.reports/cucumber/report.json` |
| e2e              | `nightwatch`                                                                                                                                                                                                                                                        |
| format           | `prettier --check {src,tests}/**`                                                                                                                                                                                                                                   |
| lint:eslint      | `eslint {src,tests}/**/*.{html,js,json,jsx,ts,tsx,gql,graphql}`                                                                                                                                                                                                     |
| lint:tsc         | `tsc -p tsconfig.json`                                                                                                                                                                                                                                              |
| lint             | `npm run lint:eslint && npm run lint:tsc`                                                                                                                                                                                                                           |
| reinstall        | `npm run remove && npm install`                                                                                                                                                                                                                                     |
| remove           | `rm -rf node_modules package-lock.json`                                                                                                                                                                                                                             |
| test             | `cross-env NODE_ENV=test mocha`                                                                                                                                                                                                                                     |
| update           | `ncu -t minor -u && npm install && ncu`                                                                                                                                                                                                                             |
| snowpack:build\* | `snowpack build`                                                                                                                                                                                                                                                    |
| snowpack:serve\* | `npm run snowpack:start -- --open none`                                                                                                                                                                                                                             |
| snowpack:start\* | `snowpack dev`                                                                                                                                                                                                                                                      |
| vite:build\*     | `vite build`                                                                                                                                                                                                                                                        |
| vite:serve\*     | `vite`                                                                                                                                                                                                                                                              |
| vite:start\*     | `npm run vite:serve -- --open`                                                                                                                                                                                                                                      |
| webpack:build    | `cross-env NODE_ENV=production webpack`                                                                                                                                                                                                                             |
| webpack:serve    | `cross-env NODE_ENV=development webpack serve --devtool=source-map`                                                                                                                                                                                                 |
| webpack:start    | `npm run webpack:serve -- --open=chrome`                                                                                                                                                                                                                            |
| build            | `npm run webpack:build`                                                                                                                                                                                                                                             |
| serve            | `npm run vite:serve`                                                                                                                                                                                                                                                |
| start            | `npm run vite:start`                                                                                                                                                                                                                                                |

> <small>\* This script tags are experimental.</small>
