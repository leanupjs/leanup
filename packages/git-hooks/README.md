![GitHub CI - Publish to NPM](https://github.com/leanupjs/leanup/workflows/GitHub%20CI%20-%20Publish%20to%20NPM/badge.svg)
[![dependencies][dependencies]][dependencies-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![npm][npm]][npm-url]
[![downloads][downloads]][downloads-url]
[![install-size][install-size]][install-size-url]
[![lernajs][lernajs]][lernajs-url]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

[npm]: https://img.shields.io/npm/v/@leanup/git-hooks
[npm-url]: https://www.npmjs.com/package/@leanup/git-hooks
[dependencies]: https://david-dm.org/leanupjs/leanup/release%2Fwebpack-v5/status.svg?path=packages/cli/plugins/addons
[dependencies-url]: https://david-dm.org/leanupjs/leanup/release%2Fwebpack-v5?path=packages/cli/plugins/addons
[vulnerabilities]: https://snyk.io/test/npm/@leanup/git-hooks/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/@leanup/git-hooks
[downloads]: https://img.shields.io/npm/dm/@leanup/git-hooks
[downloads-url]: https://npmcharts.com/compare/@leanup/git-hooks?minimal=true
[install-size]: https://packagephobia.now.sh/badge?p=@leanup/git-hooks
[install-size-url]: https://packagephobia.now.sh/result?p=@leanup/git-hooks
[lernajs]: https://img.shields.io/badge/managed%20with-lerna-blueviolet
[lernajs-url]: https://lerna.js.org

# `@leanup/git-hooks`

This module contains some nice tools to organize git hooks for NodeJs projects.

## Installation

`npm install @leanup/git-hooks --save-dev`

## Configuration

Add the following configuration to you `package.json`:

```json
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "{src,tests}/**/*.{html,js,json,jsx,ts,tsx,gql,graphql}": [
      "eslint"
    ],
    "{src,tests}/**": [
      "prettier --check"
    ]
  },
  ...
}
```

After that create a commitlint configuration file `commitlint.config.js` in your project folder and insert the following code:

```js
module.exports = require('@leanup/git-hooks/commitlint.config');
```

## References

- https://commitlint.js.org
- https://github.com/typicode/husky
- https://github.com/okonet/lint-staged
