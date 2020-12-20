const config = require('@leanup/cli/postcss.config');

config.plugins.unshift(require('tailwindcss'));
config.plugins.push(
  require('cssnano')({
    preset: 'default',
  })
);

module.exports = config;
