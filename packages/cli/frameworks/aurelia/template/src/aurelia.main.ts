import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { DI } from '@leanup/lib/helpers/injector';

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

import('aurelia-framework/package.json')
  .then((packageJson: any) => {
    DI.register('Framework', {
      ...packageJson.default,
      name: 'Aurelia',
    });
    import('./shares/register')
      .then(() => {
        import('./shares/routing')
          .then(() => {
            bootstrap(configure)
              .then(() => {})
              .catch(() => {})
              .finally(() => {});
          })
          .catch();
      })
      .catch();
  })
  .catch();
