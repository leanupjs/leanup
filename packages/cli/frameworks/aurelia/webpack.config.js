module.exports = (env, argv) => {
  const { webpackAureliaConfig } = require('./lib/webpack.config');
  return webpackAureliaConfig(env, argv);
};
