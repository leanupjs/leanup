import { webpackConfig } from '@leanup/cli/lib/webpack.config';

export function webpackPreactConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);

  config.resolve.alias['react'] = 'preact/compat';
  config.resolve.alias['react-dom'] = 'preact/compat';

  return config;
}
