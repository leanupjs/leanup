import { LEANUP_WEBPACK_RULES, webpackConfig } from '@leanup/stack-webpack/lib/webpack.config';

export function webpackAngularConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);
  const path = require('path');

  const { AngularWebpackPlugin } = require('@ngtools/webpack');

  const index = config.module.rules.indexOf(LEANUP_WEBPACK_RULES.ESBUILD_LOADER_TS);
  if (index >= 0) {
    config.module.rules.splice(index, 1);
  }

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
}
