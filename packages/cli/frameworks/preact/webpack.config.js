module.exports = (env, argv) => {
  const { webpackPreactConfig } = require('./lib/webpack.config');
  return webpackPreactConfig(env, argv, 'h');
};
