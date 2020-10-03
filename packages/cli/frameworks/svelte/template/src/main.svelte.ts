import { DI } from '@leanup/lib/helpers/injector';

import App from './components/app/component.svelte';

DI.register('Framework', {
  ...require('svelte/package.json'),
  name: 'Svelte',
});
require('./shares/register');
require('./shares/routing');

let app: unknown;

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#svelte');
if (htmlDivElement instanceof HTMLDivElement) {
  htmlDivElement.style.display = 'inline';
  app = new App({
    target: htmlDivElement,
  });
}

export default app;
