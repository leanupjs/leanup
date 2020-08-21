import { createApp } from 'vue';
import { DI } from '@leanup/features/injector';

import App from './components/app/component.vue';
import { APP_HTML_ELEMENT } from './shares/constant';

DI.register('Framework', {
  name: 'Vue',
  version: require('vue/package.json').version,
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vue3');
if (htmlDivElement instanceof HTMLDivElement) {
  htmlDivElement.style.display = 'inline';
  htmlDivElement.appendChild(APP_HTML_ELEMENT);
  // tslint:disable-next-line: no-unused-expression

  createApp(App).mount(APP_HTML_ELEMENT);
}
