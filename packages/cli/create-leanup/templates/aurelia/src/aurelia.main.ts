import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';
import * as PACKAGE_JSON from 'aurelia-framework/package.json';
import { PLATFORM } from 'aurelia-pal';

import { run } from './app.run';
import { typeIt } from './shares/utils';

const TYPED_PACKAGE_JSON = typeIt<{ version: string }>(PACKAGE_JSON);

export function configure(aurelia: Aurelia): void {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#aurelia');
  if (htmlDivElement instanceof HTMLDivElement) {
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

run('Aurelia', TYPED_PACKAGE_JSON.version, () => {
  bootstrap(configure)
    .then(() => {})
    .catch(() => {})
    .finally(() => {});
});
