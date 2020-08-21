import { webpackConfig } from '@leanup/cli/lib/webpack.config';

export function webpackInfernoConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);

  config.resolve.alias['inferno'] =
    argv.mode === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js';

  return config;
}
