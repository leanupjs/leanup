module.exports = (...args) => {
  const { webpackAngularConfig } = require('./lib/webpack.config');
  return webpackAngularConfig(...args);
};
