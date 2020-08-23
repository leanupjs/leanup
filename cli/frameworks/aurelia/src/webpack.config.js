import { mapToExclude, webpackConfig } from '@leanup/cli/lib/webpack.config';
export function webpackAureliaConfig(env, argv) {
    const config = webpackConfig(env, argv);
    const path = require('path');
    const { AureliaPlugin } = require('aurelia-webpack-plugin');
    config.plugins.push(new AureliaPlugin());
    config.module.rules.push({
        test: /\.html$/,
        exclude: mapToExclude(argv.include),
        loader: 'html-loader',
        options: {
            attrs: false,
        },
    });
    config.resolve.alias['aurelia-binding'] = path.join(process.cwd(), 'node_modules/aurelia-binding');
    config.resolve.modules.push('src');
    return config;
}
