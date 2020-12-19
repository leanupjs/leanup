const config = require('@leanup/cli/postcss.config');

config.plugins.unshift();
config.plugins.push(
  require('cssnano')({
    preset: 'default',
  })
);

module.exports = config;
