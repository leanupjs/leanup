import './components/app/component.vanilla';

import { DI } from '@leanup/lib/helpers/injector';

DI.register('Framework', {
  name: 'Vanilla',
  version: null,
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vanilla');
htmlDivElement.style.display = 'inline';
const appElement: HTMLElement = document.createElement('wc-app');
htmlDivElement.appendChild(appElement);
