import './components/app/component.lit-element';

import { importCatch, run } from './app.run';

import(
  /* webpackMode: "eager" */
  /* webpackChunkName: "lit-element.package.json" */
  `lit-element/package.json`
)
  .then((packageJson: { default: Object }) => {
    run('lit-element', packageJson, () => {
      // Render the template to the document
      const htmlDivElement: HTMLDivElement | null = document.querySelector('div#lit-element');
      if (htmlDivElement instanceof HTMLDivElement) {
        htmlDivElement.innerHTML = '<app-component />';
      }
    });
  })
  .catch(importCatch);
