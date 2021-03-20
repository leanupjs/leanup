module.exports = (...args) => {
  const { webpackInfernoConfig } = require('./lib/webpack.config');
  return webpackInfernoConfig(...args);
};
