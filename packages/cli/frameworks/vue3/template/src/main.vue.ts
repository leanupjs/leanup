import { createApp } from 'vue';
import * as PACKAGE_JSON from 'vue/package.json';

import { run } from './app.run';
import App from './components/app/component.vue';
import { APP_HTML_ELEMENT } from './shares/constant';
import { typeIt } from './shares/utils';

const TYPED_PACKAGE_JSON = typeIt<{ version: string }>(PACKAGE_JSON);

run('Vue', TYPED_PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vue3');
  if (htmlDivElement instanceof HTMLDivElement) {
    htmlDivElement.appendChild(APP_HTML_ELEMENT);
    // tslint:disable-next-line: no-unused-expression

    createApp(App).mount(APP_HTML_ELEMENT);
  }
});
