import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { DI } from '@leanup/lib/helpers/injector';

DI.register('Framework', {
  ...require('aurelia-framework/package.json'),
  name: 'Aurelia',
});
require('./shares/register');
require('./shares/routing');

export function configure(aurelia: Aurelia): void {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#aurelia');
  if (htmlDivElement instanceof HTMLDivElement) {
    htmlDivElement.style.display = 'inline';
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia
      .start()
      .then(() => {
        aurelia
          .setRoot(PLATFORM.moduleName('components/app/component.aurelia'), htmlDivElement)
          .then(() => {})
          .catch(() => {})
          .finally(() => {});
      })
      .catch(() => {})
      .finally(() => {});
  }
}

bootstrap(configure)
  .then(() => {})
  .catch(() => {})
  .finally(() => {});
