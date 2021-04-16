const path = require('path');

const CopyModulesWebpackPlugin = require('copy-modules-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { REPLACEMENTS } = require('@leanup/stack/lib/replacements');
REPLACEMENTS.forEach((replacement: { from: any; search: any; to: any; replace: any }) => {
  replacement.search = replacement.from;
  replacement.replace = replacement.to;
  delete replacement.from;
  delete replacement.to;
});

// https://webpack.js.org/configuration/dev-server/#devserverproxy
const { PROXIES } = require('@leanup/stack/lib/proxies');

export function webpackConfig(env: any, argv: any, loaders: any[] = []): Object {
  argv.host = typeof argv.host === 'string' ? argv.host : 'localhost';

  const ESBUILD_LOADER_JS = {
    test: /\.js$/,
    loader: 'esbuild-loader',
  };
  const ESBUILD_LOADER_TS = {
    test: /\.ts$/,
    loader: 'esbuild-loader',
    options: {
      loader: 'ts',
    },
  };
  const FONT_FILE_LOADER = {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts',
        },
      },
    ],
  };
  const IMAGE_FILE_LOADER = {
    test: /\.(png|svg|jpg|jpeg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images',
        },
      },
    ],
  };
  const LESS_LOADER = {
    test: /\.less$/,
    use: [
      // MiniCssExtractPlugin.loader,
      'style-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true,
            // paths: ['node_modules'],
          },
        },
      },
    ],
  };
  const SASS_LOADER = {
    test: /\.(sa|s?c)ss$/,
    use: [
      // MiniCssExtractPlugin.loader,
      'style-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sassOptions: {
            includePaths: ['node_modules'],
          },
        },
      },
    ],
  };

  const STRING_REPLACE_LOADER = {
    test: /\.(j|t)sx?$/,
    loader: 'string-replace-loader',
    options: {
      multiple: REPLACEMENTS,
    },
  };

  const config = {
    devServer: {
      compress: true,
      contentBase: path.join(process.cwd(), `public`),
      host: argv.host,
      disableHostCheck: true,
      publicPath: '/',
      proxy: PROXIES,
    },
    entry: {
      main: path.join(process.cwd(), `src`, `main.ts`),
    },
    module: {
      rules: [
        STRING_REPLACE_LOADER,
        ESBUILD_LOADER_JS,
        ESBUILD_LOADER_TS,
        FONT_FILE_LOADER,
        IMAGE_FILE_LOADER,
        LESS_LOADER,
        SASS_LOADER,
      ].concat(loaders),
    },
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new ESBuildMinifyPlugin({
    //       target: 'es2015',
    //     }),
    //   ],
    // },
    output: {
      path: path.join(process.cwd(), 'dist'),
    },
    plugins: [
      new CopyModulesWebpackPlugin({
        destination: '.reports/nexus-iq',
        includePackageJsons: true,
      }),
      // new MiniCssExtractPlugin(),
    ],
    resolve: {
      alias: {},
      modules: ['node_modules'],
      extensions: ['.mjs', '.js', '.jsx', '.svelte', '.ts', '.tsx', '.vue', '.gql', '.graphql'],
    },
  };

  const cannotFindCliModule = /Cannot find module.+@leanup\/cli/;

  function loadAddon(name: string) {
    try {
      require(`@leanup/cli-${name}/webpack.config`)(argv, config);
    } catch (error) {
      if (false === cannotFindCliModule.test(error)) {
        throw error;
      }
    }
  }
  ['addons', 'cucumber', 'graphql', 'pwa', 'webhint'].forEach(loadAddon);

  return config;
}
