import { webpackConfig } from '@leanup/cli/lib/webpack.config';
export function webpackAngularJSConfig(env, argv) {
    const config = webpackConfig(env, argv);
    config.resolve.alias['react'] = 'angularjs/compat';
    config.resolve.alias['react-dom'] = 'angularjs/compat';
    return config;
}
