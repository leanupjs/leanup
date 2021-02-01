import './components/app/component.lit-element';

import * as PACKAGE_JSON from 'lit-element/package.json';

import { run } from './app.run';

run('lit-element', PACKAGE_JSON.version, () => {
  // Render the template to the document
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#lit-element');
  if (htmlDivElement instanceof HTMLDivElement) {
    htmlDivElement.innerHTML = '<app-component />';
  }
});
