import { webpackConfig } from '@leanup/cli/lib/webpack.config';

import { BABEL_LOADER } from '../../../core/babel/webpack.config';

export function webpackAngularJSConfig(env: any, argv: any): Object {
  return webpackConfig(env, argv, [BABEL_LOADER]);
}
