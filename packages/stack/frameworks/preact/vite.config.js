let config = require('@leanup/stack-vite/vite.config');
const withPreact = require('@preact/preset-vite');
config = withPreact.default(config, {
  // devtoolsInProd: true
});
delete config.esbuild.jsxInject;
module.exports = config;
