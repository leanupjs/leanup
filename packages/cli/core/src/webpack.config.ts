const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const packageJsonApp = require(path.join(process.cwd(), 'package.json'));
const packageJsonCli = require(path.join(process.cwd(), 'node_modules', '@leanup', 'cli', 'package.json'));

export function mapToExclude(include: string) {
  include = typeof include === 'string' ? `|${include}` : '';

  const aliasRegExp = /^(@[^/]+)\/.+/;
  let alias = '';
  if (aliasRegExp.test(packageJsonApp.name)) {
    alias = `|${packageJsonApp.name.replace(/^(@[^/]+)\/.+/, '$1')}`;
  }
  return new RegExp(`node_modules(\\/|\\\\)(?!@leanup${alias}${include}).+`);
}

export function webpackConfig(env: any, argv: any): Object {
  argv.host = typeof argv.host === 'string' ? argv.host : 'localhost';

  const exclude = mapToExclude(argv.include);

  const BABEL_LOADER = {
    test: /\.(j|t)sx?$/,
    exclude: exclude,
    use: {
      loader: 'babel-loader',
      options: Object.assign(
        {
          cacheCompression: false,
          cacheDirectory: true,
        },
        require(path.join(process.cwd(), './babel.config'))
      ),
    },
  };
  const FILE_LOADER = {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    exclude: exclude,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  };
  const LESS_LOADER = {
    test: /\.less$/,
    exclude: exclude,
    use: [
      MiniCssExtractPlugin.loader,
      // 'style-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {},
          },
        },
      },
    ],
  };
  const SASS_LOADER = {
    test: /\.(sa|s?c)ss$/,
    exclude: exclude,
    use: [
      MiniCssExtractPlugin.loader,
      // 'style-loader',
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

  const MULTIPLE_REPLACEMENTS = [
    // https://nodejs.org/dist/latest-v14.x/docs/api/process.html#process_process_env
    // https://github.com/webpack/webpack/issues/7074#issuecomment-663855534
    { search: '$$NODE_ENV$$', replace: argv.mode },
  ];

  // https://docs.npmjs.com/files/package.json#people-fields-author-contributors
  if (typeof packageJsonApp.name === 'string') {
    MULTIPLE_REPLACEMENTS.push({ search: '$$APP_NAME$$', replace: packageJsonApp.name });
  }
  if (typeof packageJsonApp.version === 'string') {
    MULTIPLE_REPLACEMENTS.push({ search: '$$APP_VERSION$$', replace: packageJsonApp.version });
  }
  if (typeof packageJsonApp.author === 'string') {
    MULTIPLE_REPLACEMENTS.push({ search: '$$APP_AUTHOR$$', replace: packageJsonApp.author });
  } else if (typeof packageJsonApp.author === 'object' && packageJsonApp.author != null) {
    if (typeof packageJsonApp.author.name === 'string') {
      MULTIPLE_REPLACEMENTS.push({ search: '$$APP_AUTHOR_NAME$$', replace: packageJsonApp.author.name });
    }
    if (typeof packageJsonApp.author.mail === 'string') {
      MULTIPLE_REPLACEMENTS.push({ search: '$$APP_AUTHOR_MAIL$$', replace: packageJsonApp.author.mail });
    }
    if (typeof packageJsonApp.author.url === 'string') {
      MULTIPLE_REPLACEMENTS.push({ search: '$$APP_AUTHOR_URL$$', replace: packageJsonApp.author.url });
    }
  }
  if (typeof packageJsonApp.homepage === 'string') {
    MULTIPLE_REPLACEMENTS.push({ search: '$$APP_HOMEPAGE$$', replace: packageJsonApp.homepage });
  }
  if (typeof packageJsonCli.name === 'string') {
    MULTIPLE_REPLACEMENTS.push({ search: '$$CLI_NAME$$', replace: packageJsonCli.name });
  }
  if (typeof packageJsonCli.version === 'string') {
    MULTIPLE_REPLACEMENTS.push({ search: '$$CLI_VERSION$$', replace: packageJsonCli.version });
  }
  const STRING_REPLACE_LOADER = {
    test: /\.(j|t)sx?$/,
    exclude: exclude,
    loader: 'string-replace-loader',
    options: {
      multiple: MULTIPLE_REPLACEMENTS,
    },
  };

  const config = {
    devServer: {
      compress: true,
      host: argv.host,
      disableHostCheck: true,
    },
    entry: {
      app: path.join(process.cwd(), `src`, `main.ts`),
    },
    module: {
      rules: [STRING_REPLACE_LOADER, BABEL_LOADER, FILE_LOADER, LESS_LOADER, SASS_LOADER],
    },
    node: {
      Buffer: false,
      process: false,
    },
    output: {
      path: path.join(process.cwd(), 'dist'),
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(process.cwd(), 'public'),
          },
        ],
      }),
      new HtmlWebpackPlugin({
        cache: false,
        template: 'public/index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
    resolve: {
      alias: {},
      modules: ['node_modules'],
      extensions: ['.mjs', '.js', '.jsx', '.svelte', '.ts', '.tsx', '.vue', '.gql', '.graphql'],
    },
  };

  const cannotFindCliModule = /Cannot find module.+leanup\/cli/;

  function loadAddon(name: string) {
    try {
      require(`@leanup/cli-${name}/webpack.config`)(argv, config, BABEL_LOADER, exclude);
    } catch (error) {
      if (false === cannotFindCliModule.test(error)) {
        throw error;
      }
    }
  }
  ['addons', 'cucumber', 'graphql', 'pwa', 'webhint'].forEach(loadAddon);

  return config;
}
