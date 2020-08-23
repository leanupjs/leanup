import { mapToExclude, webpackConfig } from '@leanup/cli/lib/webpack.config';
export function webpackVue3Config(env, argv) {
    const config = webpackConfig(env, argv);
    const VueLoader = require('vue-loader');
    config.plugins.push(new VueLoader.VueLoaderPlugin());
    config.module.rules.push({
        test: /\.vue$/,
        exclude: mapToExclude(argv.include),
        loader: 'vue-loader',
    });
    if (argv.vuetify) {
        const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
        config.plugins.push(new VuetifyLoaderPlugin());
    }
    return config;
}
