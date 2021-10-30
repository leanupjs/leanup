import { LEANUP_WEBPACK_RULES, webpackConfig } from '@leanup/stack-webpack/lib/webpack.config';

function removeLoader(config: any, loader: any) {
  const index = config.module.rules.indexOf(loader);
  if (index >= 0) {
    config.module.rules.splice(index, 1);
  }
}

export function webpackVue3Config(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv, [
    LEANUP_WEBPACK_RULES.ESBUILD_LOADER_JS,
    LEANUP_WEBPACK_RULES.ESBUILD_LOADER_TS,
  ]);

  removeLoader(config, LEANUP_WEBPACK_RULES.SWC_LOADER_JS);
  removeLoader(config, LEANUP_WEBPACK_RULES.SWC_LOADER_TS);

  const VueLoader = require('vue-loader');
  config.plugins.push(new VueLoader.VueLoaderPlugin());

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
  });

  return config;
}
