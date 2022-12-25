import { BABEL_LOADER } from '@leanupjs/stack-plugin-babel/lib/webpack.config';
import webpackConfig from '@leanup/stack-webpack';

export default function webpackSolidConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv, [BABEL_LOADER]);
  return config;
}
