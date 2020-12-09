const config = require('@leanup/cli-core-babel/babel.config');

config.plugins.push([
  'babel-plugin-inferno',
  {
    imports: true,
  },
]);

module.exports = config;
