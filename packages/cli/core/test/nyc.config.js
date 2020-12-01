const path = require('path');
module.exports = {
  include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  exclude: ['**/*.d.ts', '**/*.mock.ts', '**/*.spec.ts', '**/*.test.ts'],
  all: true,
  cache: false,
  reporter: ['html', 'lcov', 'text'],
  'report-dir': path.resolve(process.cwd(), '.reports/coverage'),
  'temp-dir': path.resolve(process.cwd(), '.reports/nyc'),
  require: ['esm', 'esbuild-register'],
  watermarks: {
    lines: [50, 75],
    functions: [50, 75],
    branches: [50, 75],
    statements: [50, 75],
  },
  sourceMap: false,
  instrument: true,
  statements: 50,
  branches: 50,
  functions: 50,
  lines: 50,
};
