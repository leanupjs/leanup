import { createApp } from 'vue';

import { DI } from '@leanup/lib/helpers/injector';

import App from './components/app/component.vue';
import { APP_HTML_ELEMENT } from './shares/constant';

DI.register('Framework', {
  ...require('vue/package.json'),
  name: 'Vue',
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
