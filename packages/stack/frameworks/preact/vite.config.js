const config = require('@leanup/stack-vite/vite.config');
const withPreact = require('@preact/preset-vite');

module.exports = withPreact(config, {
  // devtoolsInProd: true
});
