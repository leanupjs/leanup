const { mergeConfig } = require('vite');
const config = require('@leanup/stack-vite/vite.config');
const solidPlugin = require('vite-plugin-solid');

module.exports = mergeConfig(config, {
  plugins: [solidPlugin()],
});
