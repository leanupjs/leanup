import webpackConfig from '@leanup/stack-webpack';

const ESBUILD_LOADER_TSX = {
  test: /\.tsx$/,
  loader: 'esbuild-loader',
  options: {
    loader: 'tsx',
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
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
          transform: {
            react: {
              pragma: 'h',
              pragmaFrag: 'Fragment',
            },
          },
        },
      },
    },
  ],
};

export default function webpackPreactConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv, [ESBUILD_LOADER_TSX]);

  config.resolve.alias['react'] = 'preact/compat';
  config.resolve.alias['react-dom'] = 'preact/compat';

  return config;
}
