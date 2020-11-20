'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

const path = require('path');

module.exports = {
  diff: true,
  extension: ['js', 'jsx', 'ts', 'tsx'],
  opts: false,
  // package: './package.json',
  reporter: 'spec',
  require: ['esbuild-register', 'jsdom-global/register', 'jsdom-global/register', 'esm', 'mock-local-storage'],
  slow: 75,
  spec: ['src/**/*.spec.*s*', 'src/**/*.test.*s*', 'tests/unit/**/*.spec.*s*', 'tests/unit/**/*.test.*s*'],
  timeout: 2000,
  ui: 'bdd',
  'watch-files': this.spec,
  // 'watch-ignore': []
};

// Source: https://github.com/mochajs/mocha/tree/master/example/config
