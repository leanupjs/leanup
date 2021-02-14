const config = require('@leanup/stack-vite/vite.config');

config.resolve = config.resolve || {};
config.resolve.alias = config.resolve.alias || {};
config.resolve.alias['react'] = 'preact/compat';
config.resolve.alias['react-dom'] = 'preact/compat';

config.esbuild = config.esbuild || {};
config.esbuild['jsxFactory'] = 'h';
config.esbuild['jsxFragment'] = 'Fragment';

module.exports = config;
