const config = require('@leanup/cli/postcss.config');

config.plugins = [
  require('tailwindcss'),
  require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.sass', './src/**/*.tsx'],
    defaultExtractor: (content) => {
      let include = 'class';

      let regexp = /'([^']*)'/g;
      let matches = content.match(regexp) || [];
      matches.forEach((match) => {
        include += ` ${match.replace(regexp, '$1')}`;
      });

      regexp = /class(Name)?="([^"]*)"/g;
      matches = content.match(regexp) || [];
      matches.forEach((match) => {
        include += ` ${match.replace(regexp, '$2')}`;
      });

      regexp = /@apply (.+)/g;
      matches = content.match(regexp) || [];
      matches.forEach((match) => {
        include += ` ${match.replace(regexp, '$1')}`;
      });

      include = include.replace(/ {2,}/g, ' ').trim();

      const includes = [];
      include.split(' ').forEach((name) => {
        if (name.length > 0 && includes.indexOf(name) === -1) {
          includes.push(name);
        }
      });

      return includes;
    },
  }),
]
  .concat(config.plugins)
  .concat([
    // require('cssnano')({
    //   preset: 'default',
    // }),
  ]);

module.exports = config;
