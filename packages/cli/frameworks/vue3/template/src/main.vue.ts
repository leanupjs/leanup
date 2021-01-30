import { createApp } from 'vue';

import { importCatch, run } from './app.run';
import App from './components/app/component.vue';
import { APP_HTML_ELEMENT } from './shares/constant';

import(
  /* webpackChunkName: "vue3.package.json" */
  `vue/package.json`
)
  .then((packageJson: { default: Object }) => {
    run('Vue', packageJson, () => {
      const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vue3');
      if (htmlDivElement instanceof HTMLDivElement) {
        htmlDivElement.style.display = 'inline';
        htmlDivElement.appendChild(APP_HTML_ELEMENT);
        // tslint:disable-next-line: no-unused-expression

        createApp(App).mount(APP_HTML_ELEMENT);
      }
    });
  })
  .catch(importCatch);
