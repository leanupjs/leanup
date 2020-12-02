const config = require('@leanup/cli/babel.config');

config.plugins.push([
  '@babel/plugin-transform-react-jsx',
  {
    pragma: 'h',
    pragmaFrag: 'Fragment',
  },
]);

module.exports = config;
