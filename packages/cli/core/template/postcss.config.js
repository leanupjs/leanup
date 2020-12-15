const config = require('@leanup/stack/postcss.config');

config.plugins = [require('tailwindcss')].concat([require('autoprefixer')]).concat([
  require('cssnano')({
    preset: 'default',
  }),
]);

module.exports = config;
