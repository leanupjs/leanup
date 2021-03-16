const config = require('@leanup/stack/postcss.config');

config.plugins.unshift(require('@tailwindcss/jit'));
config.plugins.push(
  require('cssnano')({
    preset: 'default',
  })
);

module.exports = config;
