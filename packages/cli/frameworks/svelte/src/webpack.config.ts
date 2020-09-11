import { mapToExclude, webpackConfig } from '@leanup/cli/lib/webpack.config';

export function webpackSvelteConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);

  config.module.rules.push({
    test: /\.svelte$/,
    exclude: mapToExclude(argv.include),
    use: 'svelte-loader',
  });

  return config;
}
