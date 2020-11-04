module.exports = (env, argv) => {
  const { webpackInfernoConfig } = require('./lib/webpack.config');
  return webpackInfernoConfig(env, argv);
};
