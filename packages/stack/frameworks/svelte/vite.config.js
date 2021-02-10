const config = require('@leanup/stack/vite.config');
const svelte = require('vite-plugin-svelte');

config.plugins = config.plugins || [];
config.plugins.push(svelte());

module.exports = config;
