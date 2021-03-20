module.exports = (...args) => {
  const { webpackReactConfig } = require('./lib/webpack.config');
  return webpackReactConfig(...args);
};
