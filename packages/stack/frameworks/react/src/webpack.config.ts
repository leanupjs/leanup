import { webpackConfig } from '@leanup/stack-webpack/lib/webpack.config';

const ESBUILD_LOADER_TSX = {
  test: /\.tsx$/,
  use: [
    {
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
      },
    },
  ],
};
const SWC_LOADER_TSX = {
  test: /\.tsx$/,
  use: [
    {
      loader: 'swc-loader',
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
        },
      },
    },
  ],
};

export function webpackReactConfig(env: any, argv: any): Object {
  return webpackConfig(env, argv, [SWC_LOADER_TSX]);
}
