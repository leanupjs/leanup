module.exports = {
  plugins: [
    require('postcss-windicss'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
