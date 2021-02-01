// Polyfills
import 'core-js/features/reflect';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import * as PACKAGE_JSON from '@angular/core/package.json';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './angular.module';
import { run } from './app.run';
import { APP_HTML_ELEMENT } from './shares/constant';

const ENVs = {
  NODE_ENV: '$$NODE_ENV$$',
};
if (ENVs.NODE_ENV === 'production') {
  enableProdMode();
}

run('Angular', PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#angular');
  if (htmlDivElement instanceof HTMLDivElement) {
    htmlDivElement.appendChild(APP_HTML_ELEMENT);

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(() => {})
      .catch(() => {})
      .finally(() => {});
  }
});
