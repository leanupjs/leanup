const config = require('@leanup/stack/vite.config');
const vue = require('@vitejs/plugin-vue');

config.plugins = config.plugins || [];
config.plugins.push(vue());

module.exports = config;
