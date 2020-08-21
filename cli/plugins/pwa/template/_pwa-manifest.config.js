const path = require('path');
module.exports = {
  name: '<%PROJECT_NAME%> - SPA/PWA',
  short_name: '<%PROJECT_NAME%>',
  description: '...',
  lang: 'de-DE',
  start_url: 'https://',
  display: 'standalone',
  orientation: 'any',
  theme_color: '#C8A2C8',
  background_color: '#DCD0FF',
  filename: 'manifest.json',
  icons: [
    {
      src: path.resolve('public/assets/pwa.icon.png'),
      sizes: [96, 128, 192, 256, 384, 512]
    }
  ],
  crossorigin: null,
  inject: true,
  fingerprints: false,
  ios: false,
  publicPath: null,
  includeDirectory: true
};
