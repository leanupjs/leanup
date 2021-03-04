const { resolve } = require('path');

// https://vitejs.dev/config/
module.exports = {
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
      sass: {
        implementation: require('sass'),
        sassOptions: {
          includePaths: ['node_modules'],
        },
      },
    },
    postcss: require(resolve(process.cwd(), 'postcss.config')),
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
      },
    },
  },
  server: {
    port: 8080,
  },
};
