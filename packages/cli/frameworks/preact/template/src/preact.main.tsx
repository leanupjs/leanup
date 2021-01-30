import { h, render } from 'preact';

import { importCatch, run } from './app.run';
import { AppComponent } from './components/app/component.preact';

// https://github.com/preactjs/preact/blob/master/README.md#debug-mode
const ENVs = {
  NODE_ENV: '$$NODE_ENV$$',
};
if (ENVs.NODE_ENV === 'development') {
  require('preact/debug');
}

import(
  /* webpackChunkName: "preact.package.json" */
  `preact/package.json`
)
  .then((packageJson: { default: Object }) => {
    run('React', packageJson, () => {
      const htmlDivElement: HTMLDivElement | null = document.querySelector('div#preact');
      if (htmlDivElement instanceof HTMLDivElement) {
        htmlDivElement.style.display = 'inline';
        render(<AppComponent />, htmlDivElement);
      }
    });
  })
  .catch(importCatch);
