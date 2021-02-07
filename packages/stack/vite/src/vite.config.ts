import { defineConfig } from 'vite';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: require(path.resolve(process.cwd(), 'postcss.config')),
  },
});
