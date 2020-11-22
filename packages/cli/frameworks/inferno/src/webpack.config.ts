import { webpackConfig } from '@leanup/cli/lib/webpack.config';

import { BABEL_LOADER } from '../../../core/babel/webpack.config';

export function webpackAngularJSConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv, [BABEL_LOADER]);

  config.resolve.alias['inferno'] =
    argv.mode === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js';

  return config;
}
