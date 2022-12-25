const config = require('@leanupjs/stack-plugin-babel/babel.config');

config.plugins.push([
  'babel-plugin-inferno',
  {
    imports: true,
  },
]);

module.exports = config;
