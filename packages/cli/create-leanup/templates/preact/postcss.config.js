// ## Migrate from 1.1 to 1.2

// ### Changes

// 1. ⛔ `autoprefixer` was removed from stack, it is to handle in project scope
// 2. ⛔ `cssnano` was removed from default template, it is to handle in project scope
// 3. ⛔ `postcss.config.js` was removed from stack, it is to handle in project scope

module.exports = {
  plugins: [
    require('postcss-windicss')({
      touchMode: 'insert-comment',
    }),
  ],
};
