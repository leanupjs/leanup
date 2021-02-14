const config = require('@leanup/stack-vite/vite.config');

config.resolve = config.resolve || {};
config.resolve.alias = config.resolve.alias || {};
config.resolve.alias['inferno'] =
  process.env.NODE_ENV === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js';

module.exports = config;
 