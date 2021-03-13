module.exports = (...args) => {
  const { webpackAngularJSConfig } = require('./lib/webpack.config');
  return webpackAngularJSConfig(...args);
};
