import { render } from 'inferno';

import { DI } from '@leanup/lib/helpers/injector';

import { AppComponent } from './components/app/component.inferno';

import('inferno/package.json')
  .then((packageJson: any) => {
    DI.register('Framework', {
      ...packageJson.default,
      name: 'Inferno',
    });
    import('./shares/register')
      .then(() => {
        import('./shares/routing')
          .then(() => {
            const htmlDivElement: HTMLDivElement | null = document.querySelector('div#inferno');
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
