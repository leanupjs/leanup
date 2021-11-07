function removeLoader(config: any, loader: any) {
  const index = config.module.rules.indexOf(loader);
  if (index >= 0) {
    config.module.rules.splice(index, 1);
  }
}

export default (env: any, argv: any): Object => {
  const { LEANUP_WEBPACK_RULES, webpackConfig } = require('@leanup/stack-webpack');
  const config: any = webpackConfig(env, argv);
  const path = require('path');

  const { AngularWebpackPlugin } = require('@ngtools/webpack');

  removeLoader(config, LEANUP_WEBPACK_RULES.ESBUILD_LOADER_TS);
  removeLoader(config, LEANUP_WEBPACK_RULES.SWC_LOADER_TS);

  config.module.rules.push({
    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
    use: '@ngtools/webpack',
  });
  config.plugins.push(
    new AngularWebpackPlugin({
      tsconfig: path.join(process.cwd(), 'tsconfig.app.json'),
    })
  );

  return config;
};
