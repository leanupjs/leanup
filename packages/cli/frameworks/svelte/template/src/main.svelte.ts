import { DI } from '@leanup/lib/helpers/injector';

import App from './components/app/component.svelte';

let app: unknown;

import('svelte/package.json')
  .then((packageJson: any) => {
    DI.register('Framework', {
      ...packageJson.default,
      name: 'Svelte',
    });
    import('./shares/register')
      .then(() => {
        import('./shares/routing')
          .then(() => {
            const htmlDivElement: HTMLDivElement | null = document.querySelector('div#svelte');
            if (htmlDivElement instanceof HTMLDivElement) {
              htmlDivElement.style.display = 'inline';
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              app = new App({
                target: htmlDivElement,
              });
            }
          })
          .catch();
      })
      .catch();
  })
  .catch();

export default app;
