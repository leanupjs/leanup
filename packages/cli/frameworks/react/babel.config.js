const config = require('@leanup/cli/babel.config');

config.plugins.push([
  '@babel/plugin-transform-react-jsx',
  {
    runtime: 'automatic',
  },
]);

module.exports = config;
