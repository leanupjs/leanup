module.exports = (...args) => {
  const { webpackPreactConfig } = require('./lib/webpack.config');
  return webpackPreactConfig(...args);
};
