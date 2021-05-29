console.log(
  `ADVICE: The config file 'postcss.config.js' and the 'autoprefixer' dependency will be removed from '@leanup/stack' package in the next release v1.2. Please make your 'postcss.config.js' independend from us.`
);

module.exports = {
  plugins: [require('autoprefixer')],
};
