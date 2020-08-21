module.exports = (env, argv) => {
  const { webpackAngularJSConfig } = require('./lib/webpack.config');
  return webpackAngularJSConfig(env, argv);
};
