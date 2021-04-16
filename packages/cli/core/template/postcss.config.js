module.exports = {
  plugins: [
    require('postcss-windicss')({
      touchMode: 'insert-comment',
    }),
  ],
};
