import { h, render } from 'preact';

import { DI } from '@leanup/lib/helpers/injector';

import { AppComponent } from './components/app/component';

// https://github.com/preactjs/preact/blob/master/README.md#debug-mode
const ENVs = {
  NODE_ENV: '$$NODE_ENV$$',
};
if (ENVs.NODE_ENV === 'development') {
  require('preact/debug');
}

DI.register('Application', {
  ...require('../package.json'),
}).register('Framework', {
  ...require('preact/package.json'),
  name: 'Preact',
});
require('./shares/register');

const htmlDivElement = document.querySelector('#app');
if (htmlDivElement instanceof HTMLElement) {
  render(<AppComponent />, htmlDivElement);
} else {
  throw new Error('App could not start');
}
