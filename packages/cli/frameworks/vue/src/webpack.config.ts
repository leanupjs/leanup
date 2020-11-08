import { mapToExclude, webpackConfig } from '@leanup/cli/lib/webpack.config';

export function webpackVueConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);

  const VueLoaderPlugin = require('vue-loader/lib/plugin');
  config.plugins.push(new VueLoaderPlugin());

  config.module.rules.push({
    test: /\.vue$/,
    exclude: mapToExclude(argv.include),
    loader: 'vue-loader',
  });

  return config;
}
