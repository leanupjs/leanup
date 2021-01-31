module.exports = {
  ...require('@leanup/stack-snowpack/snowpack.config'),
  packageOptions: {
    knownEntrypoints: ['preact/package.json'],
  },
};
