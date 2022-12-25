const config = require('@leanup/stack-plugin-babel/babel.config');

config.plugins.push([
  'babel-plugin-inferno',
  {
    imports: true,
  },
]);

module.exports = config;
