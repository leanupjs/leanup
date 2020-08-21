// https://babeljs.io/docs/en/babel-register
// https://github.com/babel/babel/issues/9961
module.export = require('@babel/register')({
  extensions: ['.ts', '.tsx'],
  only: ['./features', './forms', './material'],
  presets: ['@babel/typescript'],
});
