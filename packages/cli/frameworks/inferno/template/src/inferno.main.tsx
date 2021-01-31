import { render } from 'inferno';

import { importCatch, run } from './app.run';
import { AppComponent } from './components/app/component.inferno';

import(
  /* webpackMode: "eager" */
  /* webpackChunkName: "inferno.package.json" */
  `inferno/package.json`
)
  .then((packageJson: { default: Object }) => {
    run('Inferno', packageJson, () => {
      const htmlDivElement: HTMLDivElement | null = document.querySelector('div#inferno');
      if (htmlDivElement instanceof HTMLDivElement) {
        render(<AppComponent />, htmlDivElement);
      }
    });
  })
  .catch(importCatch);
