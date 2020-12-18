import { webpackConfig } from '@leanup/cli/lib/webpack.config';

export function webpackVue3Config(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);

  const VueLoader = require('vue-loader');
  config.plugins.push(new VueLoader.VueLoaderPlugin());

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
  });

  return config;
}
