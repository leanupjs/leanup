const { mergeConfig } = require('vite');
const preact = require('@preact/preset-vite');
const { unsetConfigPlugin } = require('vite-plugin-unset');

module.exports = mergeConfig(require('@leanup/stack-vite/vite.config'), {
  plugins: [
    preact.default(),
    unsetConfigPlugin({
      esbuild: {
        jsxInject: undefined,
      },
    }),
  ],
});
