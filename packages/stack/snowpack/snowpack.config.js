const { REPLACEMENTS } = require('@leanup/stack/lib/replacements');

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
        list: REPLACEMENTS,
      },
    ],
    [
      'snowpack-plugin-less',
      {
        javascriptEnabled: true,
        paths: ['node_modules'],
      },
    ],
    [
      '@snowpack/plugin-sass',
      {
        compilerOptions: {
          loadPath: ['node_modules'],
        },
      },
    ],
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
