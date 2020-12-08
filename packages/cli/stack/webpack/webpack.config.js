module.exports = (env, argv) => {
  const { webpackConfig } = require('./lib/webpack.config');
  return webpackConfig(env, argv);
};
