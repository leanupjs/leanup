module.exports = (argv, config, babelLoader, exclude) => {
  config.module.rules.push({
    test: /\.g(raph)?ql$/,
    exclude: exclude,
    use: ['graphql-tag/loader'],
  });
};
