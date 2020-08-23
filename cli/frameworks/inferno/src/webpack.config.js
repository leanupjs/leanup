import { webpackConfig } from '@leanup/cli/lib/webpack.config';
export function webpackInfernoConfig(env, argv) {
    const config = webpackConfig(env, argv);
    config.resolve.alias['inferno'] =
        argv.mode === 'production' ? 'inferno/dist/index.esm.js' : 'inferno/dist/index.dev.esm.js';
    return config;
}
