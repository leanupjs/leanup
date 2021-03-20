module.exports = (...args) => {
  const { webpackConfig } = require('./lib/webpack.config');
  return webpackConfig(...args);
};
