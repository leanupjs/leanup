import { BABEL_LOADER } from '@leanup/cli-core-babel/webpack.config';
import { webpackConfig } from '@leanup/cli/lib/webpack.config';

export function webpackAngularJSConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv, [BABEL_LOADER]);

  config.resolve.alias['inferno'] =
    argv.mode === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js';

  return config;
}
