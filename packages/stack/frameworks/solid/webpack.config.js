module.exports = (...args) => {
  const { webpackSolidConfig } = require('./lib/webpack.config');
  return webpackSolidConfig(...args);
};
