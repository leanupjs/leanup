module.exports = (...args) => {
  const { webpackVueConfig } = require('./lib/webpack.config');
  return webpackVueConfig(...args);
};
