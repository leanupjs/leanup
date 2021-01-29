import './components/app/component.vanilla';

import { DI } from '@leanup/lib/helpers/injector';

DI.register('Framework', {
  name: 'Vanilla',
  version: null,
});
import('./shares/register')
  .then(() => {
    import('./shares/routing')
      .then(() => {
        const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vanilla');
        htmlDivElement.style.display = 'inline';
        const appElement: HTMLElement = document.createElement('wc-app');
        htmlDivElement.appendChild(appElement);
      })
      .catch();
  })
  .catch();
