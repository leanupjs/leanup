const { resolve } = require('path');
const { replaceCodePlugin } = require('vite-plugin-replace');
const { REPLACEMENTS } = require('@leanup/stack/lib/replacements');

// https://vitejs.dev/config/#server-proxy
const { PROXIES } = require('@leanup/stack/lib/proxies');

// https://vitejs.dev/config/
module.exports = {
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        paths: ['node_modules'],
      },
      sass: {
        implementation: require('sass'),
        sassOptions: {
          includePaths: ['node_modules'],
        },
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
      },
    },
  },
  plugins: [
    replaceCodePlugin({
      replacements: REPLACEMENTS,
    }),
  ],
  server: {
    port: 8080,
    proxy: PROXIES,
  },
};
