import { webpackConfig } from '@leanup/stack-webpack/lib/webpack.config';

const ESBUILD_LOADER_TSX = {
  test: /\.tsx$/,
  loader: 'esbuild-loader',
  options: {
    loader: 'tsx',
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
};

export function webpackPreactConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv, [ESBUILD_LOADER_TSX]);

  config.resolve.alias['react'] = 'preact/compat';
  config.resolve.alias['react-dom'] = 'preact/compat';

  return config;
}
