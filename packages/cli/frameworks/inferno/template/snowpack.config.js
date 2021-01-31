module.exports = {
  ...require('@leanup/stack-snowpack/snowpack.config'),
  packageOptions: {
    knownEntrypoints: ['inferno-shared/package.json'],
  },
};
