import { webpackConfig } from '@leanup/cli/lib/webpack.config';

const ESBUILD_LOADER_TSX = {
  test: /\.tsx$/,
  loader: 'esbuild-loader',
  options: {
    loader: 'tsx',
  },
};

export function webpackReactConfig(env: any, argv: any): Object {
  return webpackConfig(env, argv, [ESBUILD_LOADER_TSX]);
}
