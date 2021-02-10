const { resolve } = require('path');

// https://vitejs.dev/config/
module.exports = {
  css: {
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
