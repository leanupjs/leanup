import Vue from 'vue';
import { CreateElement, VNode } from 'vue/types/umd';

import { DI } from '@leanup/lib/helpers/injector';
import VueCompositionApi from '@vue/composition-api';

import App from './components/app/component.vue';
import { APP_HTML_ELEMENT } from './shares/constant';

// https://github.com/vuejs/vue-devtools
const ENVs = {
  NODE_ENV: '$$NODE_ENV$$'
};
Vue.config.devtools = ENVs.NODE_ENV === 'development';

DI.register('Framework', {
  ...require('vue/package.json'),
  name: 'Vue'
});
require('./shares/register');
require('./shares/routing');

Vue.use(VueCompositionApi);

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vue');
if (htmlDivElement instanceof HTMLDivElement) {
  htmlDivElement.style.display = 'inline';
  htmlDivElement.appendChild(APP_HTML_ELEMENT);
  // tslint:disable-next-line: no-unused-expression
  new Vue({
    el: APP_HTML_ELEMENT,
    render: (h: CreateElement): VNode => h(App)
  });
}
