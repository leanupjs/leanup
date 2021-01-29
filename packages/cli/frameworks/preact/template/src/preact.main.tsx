import { h, render } from 'preact';

import { DI } from '@leanup/lib/helpers/injector';

import { AppComponent } from './components/app/component.preact';

// https://github.com/preactjs/preact/blob/master/README.md#debug-mode
const ENVs = {
  NODE_ENV: '$$NODE_ENV$$',
};
if (ENVs.NODE_ENV === 'development') {
  require('preact/debug');
}

import('preact/package.json')
  .then((packageJson: any) => {
    DI.register('Framework', {
      ...packageJson.default,
      name: 'Preact',
    });
    import('./shares/register')
      .then(() => {
        import('./shares/routing')
          .then(() => {
            const htmlDivElement: HTMLDivElement | null = document.querySelector('div#preact');
            if (htmlDivElement instanceof HTMLDivElement) {
              htmlDivElement.style.display = 'inline';
              render(<AppComponent />, htmlDivElement);
            }
          })
          .catch();
      })
      .catch();
  })
  .catch();
