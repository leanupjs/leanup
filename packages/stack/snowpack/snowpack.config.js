module.exports = (env, argv) => {
  const { snowpackConfig } = require('./lib/snowpack.config');
  return snowpackConfig(env, argv);
};
