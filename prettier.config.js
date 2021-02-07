module.exports = {
  ...require('./packages/stack/core/prettier.config'),
  svelteSortOrder: 'options-styles-scripts-markup',
  svelteStrictMode: true,
  svelteBracketNewLine: true,
  svelteAllowShorthand: false,
  svelteIndentScriptAndStyle: false,
};
