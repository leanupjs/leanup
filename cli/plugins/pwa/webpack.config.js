module.exports = (argv, config) => {
  if (argv.pwa) {
    const path = require('path');
    const WebpackPwaManifest = require('webpack-pwa-manifest');
    const pwaManifestConfigPath = path.resolve(process.cwd(), 'pwa-manifest.config.js');
    const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
    const workboxConfigPath = path.resolve(process.cwd(), 'workbox-config.js');

    config.plugins.push(new WebpackPwaManifest(require(pwaManifestConfigPath)));

    switch (argv.pwa) {
      case 'injectManifest':
        config.plugins.push(new InjectManifest(require(workboxConfigPath)));
        break;
      case 'generateSW':
      default:
        config.plugins.push(new GenerateSW(require(workboxConfigPath)));
    }
  }
};
