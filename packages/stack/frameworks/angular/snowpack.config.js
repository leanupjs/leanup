const config = require('@leanup/stack-snowpack/snowpack.config');

// config.plugins.push([
//   'angular-snowpack-plugin',
//   {
//     angularJson: './angular.json',
//   },
// ]);
config.plugins.push([
  'snowpack-plugin-angular',
  {
    args: '--project ./tsconfig.app.json',
  },
]);

module.exports = config;
