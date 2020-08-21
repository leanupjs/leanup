const config = require('@leanup/cli-graphql/.eslintrc');

/**
 * - https://www.npmjs.com/package/eslint-plugin-graphql
 */
config.overrides.push({
  files: ['**/*.gql', '**/*.graphql'],
  plugins: ['graphql'],
});

module.exports = config;
