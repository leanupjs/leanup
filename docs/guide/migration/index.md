# Migration

The `@leanup stack` is maximally decoupled, so we can proceed quickly and with only tiny changes.

## Migrate from 1.0 to 1.1

### Changes

1. ✨ ESBuild
2. ✨ Webpack 5
3. ✨ Vite 2
4. ✨ Snowpack 3
5. ⛔ Aurelia: We will no longer be supported as long as the ticket [#39](https://github.com/leanupjs/leanup/issues/39) is not resolved.
6. ✨ Refactoring the @leanup module separation
7. ✨ Much faster stack installation
8. ✨ Much faster script execution (ESBuild)
9. ✋ Builds does only contains the SourceCode-Artifacts (no frame stuff, like public-folder and their assets)

### Migrate

Follow the steps below to update the stack.

#### Fetch changes

```bash
> git checkout -b chore/update-leanup-stack-to-v1.1
> npm i -D @leanup/cli@^1.1 @leanup/cli-<framework>@^1.1
> npx <framework> create --only-config --no-install --overwrite
```

> Available Frameworks
>
> - angular
> - angularjs
> - ~~aurelia~~ (is not Webpack v5 compatible)
> - inferno
> - lit-element
> - preact
> - react
> - svelte
> - vanilla
> - vue
> - vue3

#### Clearing changes

After the changes have been fetched, the changed files must be reviewed. Some changes can then be corrected again.

#### Need frame stuff

If you need the frame stuff from the public folder in you dist-folder. You can configure that like this:

1. Install `npm i -D copy-plugin-webpack`
2. Extends the `webpack.config.js` like this<br>

```js
module.exports = (...args) => {
  // Here using the example for react
  const config = require('@leanup/stack-react/webpack.config')(...args);

  const CopyPlugin = require('copy-webpack-plugin');
  if (args[0].WEBPACK_BUILD) {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
          },
        ],
      })
    );
  }
  return config;
};
```
