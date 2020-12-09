module.exports = (env, argv) => {
  const { webpackSvelteConfig } = require('./lib/webpack.config');
  return webpackSvelteConfig(env, argv);
};
