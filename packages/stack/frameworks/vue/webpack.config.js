module.exports = (env, argv) => {
  const { webpackVueConfig } = require('./lib/webpack.config');
  return webpackVueConfig(env, argv);
};
