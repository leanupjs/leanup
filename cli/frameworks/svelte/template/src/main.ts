import { DI } from '@leanup/lib/helpers/injector';

import App from './components/app/component.svelte';

DI.register('Framework', {
  ...require('svelte/package.json'),
  name: 'Svelte',
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#svelte');
htmlDivElement.style.display = 'inline';
export default new App({
  target: htmlDivElement,
});
