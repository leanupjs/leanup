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

export function configure(aurelia: Aurelia) {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#aurelia');
  htmlDivElement.style.display = 'inline';
  aurelia.use.standardConfiguration().developmentLogging();
  aurelia.start().then(() => {
    aurelia.setRoot(PLATFORM.moduleName('components/app/component.aurelia'), htmlDivElement);
  });
}

bootstrap(configure);
