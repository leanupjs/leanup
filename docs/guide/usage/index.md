# Usage

The `@leanup stack` only contains the selected tools and their default configuration. No specific things are implemented, such as a dedicated CLI.

This means that all commands for developing, testing or building etc. the app relate to the configuration of the `npm scripts`.

## NPM-Scripts

The following table lists the `scripts tags` available for `npm scripts`:

> `npm run <script tag>`

| script tag       | command line execution                                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| reinstall        | `npm run remove && npm install`                                                                                                                                                                                                                                     |
| update           | `ncu -t minor -u && npm install && ncu`                                                                                                                                                                                                                             |
| start            | `npm run vite:start`                                                                                                                                                                                                                                                |
| serve            | `npm run vite:serve`                                                                                                                                                                                                                                                |
| build            | `npm run webpack:build`                                                                                                                                                                                                                                             |
| preview          | `vite preview --open`                                                                                                                                                                                                                                               |
| format           | `prettier --check {src,tests}/**`                                                                                                                                                                                                                                   |
| lint             | `npm run lint:eslint && npm run lint:tsc`                                                                                                                                                                                                                           |
| lint:eslint      | `eslint {src,tests}/**/*.{html,js,json,jsx,ts,tsx,gql,graphql}`                                                                                                                                                                                                     |
| lint:tsc         | `tsc -p tsconfig.json`                                                                                                                                                                                                                                              |
| test             | `cross-env NODE_ENV=test mocha`                                                                                                                                                                                                                                     |
| coverage         | `cross-env NODE_ENV=test nyc mocha`                                                                                                                                                                                                                                 |
| e2e              | `nightwatch`                                                                                                                                                                                                                                                        |
| remove           | `rm -rf node_modules package-lock.json`                                                                                                                                                                                                                             |
| snowpack:build\* | `snowpack build`                                                                                                                                                                                                                                                    |
| snowpack:serve\* | `npm run snowpack:start -- --open none`                                                                                                                                                                                                                             |
| snowpack:start\* | `snowpack dev`                                                                                                                                                                                                                                                      |
| vite:build\*     | `vite build`                                                                                                                                                                                                                                                        |
| vite:serve\*     | `vite`                                                                                                                                                                                                                                                              |
| vite:start\*     | `npm run vite:serve -- --open`                                                                                                                                                                                                                                      |
| webpack:build    | `cross-env NODE_ENV=production webpack`                                                                                                                                                                                                                             |
| webpack:serve    | `cross-env NODE_ENV=development webpack serve --devtool=source-map`                                                                                                                                                                                                 |
| webpack:start    | `npm run webpack:serve -- --open=chrome`                                                                                                                                                                                                                            |
| cucumber\*       | `cross-env NIGHTWATCH_ENV=chrome cucumber-js tests/cucumber/features/**/*.feature --require @babel/register --require cucumber.conf.js --require tests/cucumber/step-definitions --format node_modules/cucumber-pretty --format json:.reports/cucumber/report.json` |

> <small>\* This script tags are experimental.</small>
