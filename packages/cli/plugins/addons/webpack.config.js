module.exports = (argv, config) => {
  if (argv.analyzer) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: `analyzer.report.html`,
      })
    );
  }

  if (argv.gzip) {
    const CompressionPlugin = require('compression-webpack-plugin');
    config.plugins.push(
      new CompressionPlugin({
        test: /.(css|js)$/,
      })
    );
  }

  if (argv.worker) {
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
  }
};
