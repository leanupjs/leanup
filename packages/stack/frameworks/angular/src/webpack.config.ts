import { webpackConfig } from '@leanup/stack-webpack/lib/webpack.config';

export function webpackAngularConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);
  const path = require('path');

  const { AngularCompilerPlugin } = require('@ngtools/webpack');

  config.module.rules.push({
    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
    use: '@ngtools/webpack',
  });
  config.plugins.push(
    new AngularCompilerPlugin({
      tsConfigPath: path.join(process.cwd(), 'tsconfig.app.json'),
      entryModule: path.join(process.cwd(), 'src', 'angular.module#AppModule'),
      sourceMap: true,
    })
  );

  return config;
}
