import { h, render } from 'preact';

import { DI } from '@leanup/lib/helpers/injector';

import { AppComponent } from './components/app/component.preact';

// https://github.com/preactjs/preact/blob/master/README.md#debug-mode
if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

DI.register('Framework', {
  name: 'Preact',
  version: require('preact/package.json').version,
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#preact');
htmlDivElement.style.display = 'inline';
render(<AppComponent />, htmlDivElement);
