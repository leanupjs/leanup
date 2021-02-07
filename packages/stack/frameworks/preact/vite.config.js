const config = require('@leanup/stack-vite/vite.config');

config.alias = config.alias || {};
config.alias['react'] = 'preact/compat';
config.alias['react-dom'] = 'preact/compat';

config.alias = config.esbuild || {};
config.esbuild['jsxFactory'] = 'h';
config.esbuild['jsxFragment'] = 'Fragment';

module.exports = config;
