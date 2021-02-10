const config = require('@leanup/stack-vite/vite.config');

config.alias = config.alias || {};
config.alias['inferno'] =
  process.env.NODE_ENV === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js';

module.exports = config;
