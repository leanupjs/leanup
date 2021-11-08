import path from 'path';
import webpackConfig, { LEANUP_WEBPACK_RULES } from '@leanup/stack-webpack';
import { AngularWebpackPlugin } from '@ngtools/webpack';
import linkerPlugin from '@angular/compiler-cli/linker/babel';

const LINKER_PLUGIN = {
  test: /\.m?js$/,
  use: {
    loader: 'babel-loader',
    options: {
      plugins: [linkerPlugin],
      compact: false,
      cacheDirectory: true,
    },
  },
};

function removeLoader(config: any, loader: any) {
  const index = config.module.rules.indexOf(loader);
  if (index >= 0) {
    config.module.rules.splice(index, 1);
  }
}

export default function webpackAngularConfig(env: any, argv: any): Object {
  const config: any = webpackConfig(env, argv, [LINKER_PLUGIN]);

  removeLoader(config, LEANUP_WEBPACK_RULES.ESBUILD_LOADER_TS);
  removeLoader(config, LEANUP_WEBPACK_RULES.SWC_LOADER_TS);

  config.module.rules.push({
    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
    use: '@ngtools/webpack',
  });
  config.plugins.push(
    new AngularWebpackPlugin({
      tsconfig: path.join(process.cwd(), 'tsconfig.app.json'),
    })
  );

  return config;
}
