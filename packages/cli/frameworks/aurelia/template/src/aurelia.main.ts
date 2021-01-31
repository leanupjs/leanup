import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

import { importCatch, run } from './app.run';

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

import(
  /* webpackMode: "eager" */
  /* webpackChunkName: "aurelia.package.json" */
  `aurelia-framework/package.json`
)
  .then((packageJson: { default: Object }) => {
    run('Aurelia', packageJson, () => {
      bootstrap(configure)
        .then(() => {})
        .catch(() => {})
        .finally(() => {});
    });
  })
  .catch(importCatch);
