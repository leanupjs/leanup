module.exports = {
  ...require('@leanup/stack-snowpack/snowpack.config'),
  packageOptions: {
    knownEntrypoints: ['svelte/package.json'],
  },
};
