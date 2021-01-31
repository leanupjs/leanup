module.exports = {
  ...require('@leanup/stack-snowpack/snowpack.config'),
  packageOptions: {
    knownEntrypoints: ['angular/package.json'],
  },
};
