# Usage

The `@leanup stack` only contains the selected tools and their default configuration. No specific things are implemented, such as a dedicated CLI.

This means that all commands for developing, testing or building etc. the app relate to the configuration of the `npm scripts`.

## NPM-Scripts

The following table lists the `scripts tags` available for `npm scripts`:

> `npm run <script tag>`

| script tag  | command line execution                                                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| reinstall   | `npm run remove && npm install`                                                                                                                                                                                                                                     |
| update      | `ncu -t minor -u && npm install && ncu`                                                                                                                                                                                                                             |
| preview     | `vite preview --open`                                                                                                                                                                                                                                               |
| format      | `prettier --check {src,tests}/**`                                                                                                                                                                                                                                   |
| lint        | `npm run lint:eslint && npm run lint:tsc`                                                                                                                                                                                                                           |
| lint:eslint | `eslint {src,tests}/**/*.{html,js,json,jsx,ts,tsx,gql,graphql}`                                                                                                                                                                                                     |
| lint:tsc    | `tsc -p tsconfig.json`                                                                                                                                                                                                                                              |
| test        | `cross-env NODE_ENV=test mocha`                                                                                                                                                                                                                                     |
| coverage    | `cross-env NODE_ENV=test nyc mocha`                                                                                                                                                                                                                                 |
| e2e         | `nightwatch`                                                                                                                                                                                                                                                        |
| remove      | `rm -rf node_modules package-lock.json`                                                                                                                                                                                                                             |
| build       | `cross-env NODE_ENV=production webpack`                                                                                                                                                                                                                             |
| serve       | `cross-env NODE_ENV=development webpack serve --devtool=source-map --no-live-reload --hot`                                                                                                                                                                          |
| start       | `npm run serve -- --open=chrome`                                                                                                                                                                                                                                    |
| cucumber\*  | `cross-env NIGHTWATCH_ENV=chrome cucumber-js tests/cucumber/features/**/*.feature --require @babel/register --require cucumber.conf.js --require tests/cucumber/step-definitions --format node_modules/cucumber-pretty --format json:.reports/cucumber/report.json` |

> <small>\* This script tags are experimental.</small>
