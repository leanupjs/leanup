/**
 * https://www.npmjs.com/package/eslint
 */
module.exports = {
  root: false,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  overrides: [
    /**
     * - https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
     * - https://www.npmjs.com/package/@typescript-eslint/parser
     */
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        ecmaVersion: 2018,
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': ['warn'],
      },
    },
    /**
     * - https://www.npmjs.com/package/eslint-plugin-html
     */
    {
      files: ['**/*.html'],
      plugins: ['html'],
    },
    /**
     * - https://www.npmjs.com/package/eslint-plugin-json
     */
    {
      extends: ['plugin:json/recommended'],
      files: ['**/*.json'],
      plugins: ['json'],
    },
    {
      env: {
        mocha: true,
      },
      files: ['tests/**/*', '**/*.spec.*', '**/*.test.*'],
    },
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'space-before-function-paren': 'off',
  },
};
