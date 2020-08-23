import { DI } from '@leanup/lib/helpers/injector';

import App from './components/app/component.svelte';

DI.register('Framework', {
  name: 'Svelte',
  version: require('svelte/package.json').version,
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#svelte');
htmlDivElement.style.display = 'inline';
export default new App({
  target: htmlDivElement,
});
