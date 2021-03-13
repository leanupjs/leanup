module.exports = (...args) => {
  const { webpackSvelteConfig } = require('./lib/webpack.config');
  return webpackSvelteConfig(...args);
};
