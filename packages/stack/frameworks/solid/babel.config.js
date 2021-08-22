const config = require('@leanup/cli-core-babel/babel.config');

config.presets = Array.isArray(config.presets) ? config.presets : [];
config.presets.push('solid');

module.exports = config;
