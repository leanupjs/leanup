const path = require('path');
const packageJsonApp = require(path.join(process.cwd(), 'package.json'));
const packageJsonCli = require(path.join(process.cwd(), 'node_modules', '@leanup', 'stack', 'package.json'));
let proxyConfig;
try {
  proxyConfig = require(path.join(process.cwd(), `proxy.conf.json`));
} catch (error) {
  proxyConfig = {};
}
const MULTIPLE_REPLACEMENTS = [{ from: '$$NODE_ENV$$', to: process.env.NODE_ENV }];
if (typeof packageJsonApp.name === 'string') {
  MULTIPLE_REPLACEMENTS.push({ from: '$$APP_NAME$$', to: packageJsonApp.name });
}
if (typeof packageJsonApp.version === 'string') {
  MULTIPLE_REPLACEMENTS.push({ from: '$$APP_VERSION$$', to: packageJsonApp.version });
}
if (typeof packageJsonApp.author === 'string') {
  MULTIPLE_REPLACEMENTS.push({ from: '$$APP_AUTHOR$$', to: packageJsonApp.author });
} else if (typeof packageJsonApp.author === 'object' && packageJsonApp.author != null) {
  if (typeof packageJsonApp.author.name === 'string') {
    MULTIPLE_REPLACEMENTS.push({ from: '$$APP_AUTHOR_NAME$$', to: packageJsonApp.author.name });
  }
  if (typeof packageJsonApp.author.mail === 'string') {
    MULTIPLE_REPLACEMENTS.push({ from: '$$APP_AUTHOR_MAIL$$', to: packageJsonApp.author.mail });
  }
  if (typeof packageJsonApp.author.url === 'string') {
    MULTIPLE_REPLACEMENTS.push({ from: '$$APP_AUTHOR_URL$$', to: packageJsonApp.author.url });
  }
}
if (typeof packageJsonApp.homepage === 'string') {
  MULTIPLE_REPLACEMENTS.push({ from: '$$APP_HOMEPAGE$$', to: packageJsonApp.homepage });
}
if (typeof packageJsonCli.name === 'string') {
  MULTIPLE_REPLACEMENTS.push({ from: '$$CLI_NAME$$', to: packageJsonCli.name });
}
if (typeof packageJsonCli.version === 'string') {
  MULTIPLE_REPLACEMENTS.push({ from: '$$CLI_VERSION$$', to: packageJsonCli.version });
}

// https://www.snowpack.dev/reference/configuration
module.exports = {
  mount: {
    public: '/',
    src: '/',
  },
  plugins: [
    [
      'snowpack-plugin-replace',
      {
        list: MULTIPLE_REPLACEMENTS,
      },
    ],
    [
      'snowpack-plugin-less',
      {
        javascriptEnabled: true,
        paths: ['node_modules'],
      },
    ],
    '@snowpack/plugin-sass',
    // [
    //   'snowpack-plugin-sass',
    //   {
    //     implementation: require('sass'),
    //     sassOptions: {
    //       includePaths: ['node_modules'],
    //     },
    //   },
    // ],
    '@snowpack/plugin-postcss',
  ],
  buildOptions: {
    out: 'dist',
  },
  // https://www.snowpack.dev/guides/optimize-and-bundle#option-2%3A-optimize-plugins
  optimize: {
    // entrypoints: 'auto',
    // preload: true,
    // bundle: true, // https://github.com/snowpackjs/snowpack/discussions/2520
    splitting: true,
    treeshake: true,
    manifest: true,
    minify: true,
    target: 'es2018',
  },
};
