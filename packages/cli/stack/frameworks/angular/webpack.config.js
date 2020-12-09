module.exports = (env, argv) => {
  const { webpackAngularConfig } = require('./lib/webpack.config');
  return webpackAngularConfig(env, argv);
};
