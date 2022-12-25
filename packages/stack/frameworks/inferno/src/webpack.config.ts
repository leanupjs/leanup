import { BABEL_LOADER } from '@leanup/stack-plugin-babel/lib/webpack.config';
import webpackConfig from '@leanup/stack-webpack';

export default function webpackInfernoConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv, [BABEL_LOADER]);

  config.resolve.alias['inferno'] =
    process.env.NODE_ENV === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js';

  return config;
}
