module.exports = (argv, config) => {
  // https://slashgear.github.io/why-you-should-use-compression-webpack-plugin/
  const CompressionPlugin = require('compression-webpack-plugin');
  config.plugins.push(
    new CompressionPlugin({
      test: /.(css|js)$/,
    })
  );
  // https://github.com/GoogleChromeLabs/comlink-loader
  config.module.rules.push({
    test: /\.worker\.(js|ts)$/i,
    use: [
      {
        loader: 'comlink-loader',
        options: {
          singleton: true,
        },
      },
    ],
  });
};
