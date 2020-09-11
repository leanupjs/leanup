const config = require('@leanup/cli/babel.config');

config.plugins.push([
  '@babel/plugin-transform-react-jsx',
  {
    pragma: 'h',
  },
]);

const index = config.presets.indexOf('@babel/preset-typescript');
if (index >= 0) {
  config.presets.splice(index, 1);
}
config.presets = [
  [
    '@babel/preset-typescript',
    {
      jsxPragma: 'h',
    },
  ],
];

module.exports = config;
