import { webpackConfig } from '@leanup/stack-webpack/lib/webpack.config';

export function webpackVueConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);

  const VueLoaderPlugin = require('vue-loader/lib/plugin');
  config.plugins.push(new VueLoaderPlugin());

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
  });

  return config;
}
