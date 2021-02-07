module.exports = (env, argv) => {
  const { webpackVue3Config } = require('./lib/webpack.config');
  return webpackVue3Config(env, argv);
};
