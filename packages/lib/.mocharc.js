'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

const path = require('path');

module.exports = {
  extension: ['js', 'jsx', 'ts', 'tsx'],
  package: './package.json',
  reporter: 'spec',
  require: ['esbuild-register', 'jsdom-global/register', 'mock-local-storage'],
  spec: ['src/**/*.spec.*s*', 'src/**/*.test.*s*', 'tests/unit/**/*.spec.*s*', 'tests/unit/**/*.test.*s*'],
  ui: 'bdd',
};

// Source: https://github.com/mochajs/mocha/tree/master/example/config
