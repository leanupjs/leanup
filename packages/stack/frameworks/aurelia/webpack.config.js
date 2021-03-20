module.exports = (...args) => {
  const { webpackAureliaConfig } = require('./lib/webpack.config');
  return webpackAureliaConfig(...args);
};
