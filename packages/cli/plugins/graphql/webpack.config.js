module.exports = (argv, config) => {
  config.module.rules.push({
    test: /\.g(raph)?ql$/,
    use: ['graphql-tag/loader'],
  });
};
