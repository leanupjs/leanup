import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

import CopyModulesWebpackPlugin from 'copy-modules-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Sass from 'sass';

import { REPLACEMENTS } from '@leanup/stack';
(REPLACEMENTS as unknown as any[]).forEach((replacement: { from: any; search: any; to: any; replace: any }) => {
  replacement.search = replacement.from;
  replacement.replace = replacement.to;
  delete replacement.from;
  delete replacement.to;
});

// https://webpack.js.org/configuration/dev-server/#devserverproxy
import { PROXIES } from '@leanup/stack';

const ESBUILD_LOADER_JS = {
  test: /\.js$/,
  use: [
    {
      loader: 'esbuild-loader',
    },
  ],
};
const ESBUILD_LOADER_TS = {
  test: /\.ts$/,
  use: [
    {
      loader: 'esbuild-loader',
      options: {
        loader: 'ts',
      },
    },
  ],
};
const SWC_LOADER_JS = {
  test: /\.js$/,
  use: [
    {
      loader: 'swc-loader',
    },
  ],
};
const SWC_LOADER_TS = {
  test: /\.ts$/,
  use: [
    {
      loader: 'swc-loader',
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            decorators: true,
          },
        },
      },
    },
  ],
};

const FONT_FILE_LOADER = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  type: 'asset/resource',
};
const IMAGE_FILE_LOADER = {
  test: /\.(png|svg|jpg|jpeg|gif)$/,
  type: 'asset/resource',
};
const LESS_LOADER = {
  test: /\.less$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ],
};
const SASS_LOADER = {
  test: /\.(sa|s?c)ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: Sass,
        sassOptions: {
          includePaths: ['node_modules'],
        },
      },
    },
  ],
};
const STRING_REPLACE_LOADER = {
  test: /\.(j|t)sx?$/,
  use: [
    {
      loader: 'string-replace-loader',
      options: {
        multiple: REPLACEMENTS,
      },
    },
  ],
};

export const LEANUP_WEBPACK_RULES = {
  STRING_REPLACE_LOADER,
  ESBUILD_LOADER_JS,
  ESBUILD_LOADER_TS,
  SWC_LOADER_JS,
  SWC_LOADER_TS,
  FONT_FILE_LOADER,
  IMAGE_FILE_LOADER,
  LESS_LOADER,
  SASS_LOADER,
};

export default function webpackConfig(_env: any, argv: any, loaders: any[] = []): Object {
  argv.host = typeof argv.host === 'string' ? argv.host : 'localhost';

  const config = {
    devServer: {
      allowedHosts: 'all',
      compress: true,
      devMiddleware: {
        publicPath: '/',
      },
      host: argv.host,
      proxy: PROXIES,
      static: {
        directory: path.join(process.cwd(), `public`),
      },
    },
    entry: {
      main: path.join(process.cwd(), `src`, `main.ts`),
    },
    module: {
      rules: [
        STRING_REPLACE_LOADER,
        ESBUILD_LOADER_JS,
        ESBUILD_LOADER_TS,
        // SWC_LOADER_JS,
        // SWC_LOADER_TS,
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
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
          },
        ],
      }),
      new MiniCssExtractPlugin({
        // - https://webpack.js.org/plugins/mini-css-extract-plugin/#experimentaluseimportmodule
        // - https://github.com/aurelia/webpack-plugin/issues/196
        // - https://github.com/webpack-contrib/mini-css-extract-plugin/issues/863
        experimentalUseImportModule: false,
      }),
    ],
    resolve: {
      alias: {},
      modules: ['node_modules'],
      extensions: ['.mjs', '.js', '.jsx', '.svelte', '.ts', '.tsx', '.vue', '.gql', '.graphql'],
    },
    target: 'web', // https://webpack.js.org/configuration/target/
  };

  const cannotFindCliModule = /Cannot find module.+@leanup\/cli/;

  function loadAddon(name: string) {
    try {
      require(`@leanup/cli-${name}/webpack.config`)(argv, config);
    } catch (error) {
      if (false === cannotFindCliModule.test(error as string)) {
        throw error;
      }
    }
  }
  ['addons', 'cucumber', 'graphql', 'pwa', 'webhint'].forEach(loadAddon);

  return config;
}
