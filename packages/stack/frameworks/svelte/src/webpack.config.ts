import { webpackConfig } from '@leanup/stack-webpack/lib/webpack.config';

export function webpackSvelteConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);

  config.module.rules.push({
    test: /\.svelte$/,
    use: 'svelte-loader',
  });

  return config;
}
