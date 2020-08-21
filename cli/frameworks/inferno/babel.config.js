const config = require('@leanup/cli/babel.config');

config.plugins.push([
  'babel-plugin-inferno',
  {
    imports: true,
  },
]);

module.exports = config;
