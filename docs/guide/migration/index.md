# Migration

The `@leanup stack` is maximally decoupled, so we can proceed quickly and with only tiny changes.

## Migrate from 1.0 to 1.1

### Changes

1. ✨ Refactoring the @leanup module separation
2. ✨ Maximal Major-Upgrade from all dependencies
3. ✨ Remove some not really important dependencies (e.g. `copy-webpack-plugin`, `html-webpack-plugin`, `copy-modules-webpack-plugin`)
4. ✨ Global CLI installation
5. ✨ Webpack 5
6. ✨ ESBuild
7. ✨ Much faster stack installation
8. ✨ Much faster script execution (ESBuild)
9. ⚽ Vite 2 (experimental)
10. ⚽ Snowpack 3 (experimental)
11. ✋ Builds does only contains the SourceCode-Artifacts (no frame material, like public-folder and their assets)
12. ✋ The bundled artifact name (`app.js`) was change to `main.js`.
13. ✋ The separate css artifact file (`app.css`) is now included inside the `main.js`.
14. ✋ The script tag in the `index.html` must now be inserted yourself.
15. ⛔ We can not longer be supported [Aurelia](https://aurelia.io/) as long as the ticket [#39](https://github.com/leanupjs/leanup/issues/39) is not resolved.

### Migrate

Follow the steps below to update the stack.

#### Fetch changes

```bash
> git checkout -b chore/update-leanup-stack-to-v1.1
> npm i -D @leanup/cli@^1.1 @leanup/cli-<framework>@^1.1
> npx <framework> create --only-config --overwrite --no-install
```

Available Frameworks: `angular`, `angularjs`, ~~`aurelia`~~\*, `inferno`, `lit-element`, `preact`, `react`,`svelte`,`vanilla`,`vue` and `vue3`

> <small style="color: #d00">\* Aurelia is not Webpack v5 compatible.</small>

#### Clearing changes

After the changes have been fetched, the changed files must be reviewed. Some changes can then be corrected again.

#### Install dependencies

Now execute `npm install`.

#### Edit you index.html

Add the following script tag in you `index.html` body.

```html{2}
    ...
    <script src="main.js"></script>
  <body>
</html>
```

#### If you need the frame material

If you need the frame material from the public folder in your dist folder. You can configure this as follows:

1. Install `npm i -D copy-webpack-plugin`
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
