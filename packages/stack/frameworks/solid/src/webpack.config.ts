import { BABEL_LOADER } from '@leanup/cli-core-babel/lib/webpack.config';
import { webpackConfig } from '@leanup/stack-webpack/lib/webpack.config';

export function webpackSolidConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv, [BABEL_LOADER]);
  return config;
}
