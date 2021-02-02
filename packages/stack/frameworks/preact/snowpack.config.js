const config = require('@leanup/stack-snowpack/snowpack.config');

config.alias = config.alias || {};
config.alias['react'] = 'preact/compat';
config.alias['react-dom'] = 'preact/compat';

module.exports = config;
