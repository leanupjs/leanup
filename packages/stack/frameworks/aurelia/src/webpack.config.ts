import webpackConfig from '@leanup/stack-webpack';

export function webpackAureliaConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv);
  const path = require('path');

  const { AureliaPlugin } = require('aurelia-webpack-plugin');
  config.plugins.push(new AureliaPlugin());

  config.module.rules.push({
    test: /\.html$/,
    loader: 'html-loader',
    options: {
      attrs: false,
    },
  });

  config.resolve.modules.push(path.resolve(process.cwd(), 'src'));
  config.resolve.modules.push(path.resolve(process.cwd(), 'node_modules'));

  return config;
}
