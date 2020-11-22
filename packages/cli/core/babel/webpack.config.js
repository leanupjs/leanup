const path = require('path');

export const BABEL_LOADER = {
  test: /\.(j|t)sx$/,
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
