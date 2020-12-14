module.exports = (env, argv) => {
  const { webpackReactConfig } = require('./lib/webpack.config');
  return webpackReactConfig(env, argv);
};
