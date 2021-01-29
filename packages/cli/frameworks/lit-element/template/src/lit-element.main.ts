import './components/app/component.lit-element';

import { DI } from '@leanup/lib/helpers/injector';

import('lit-element/package.json')
  .then((packageJson: any) => {
    DI.register('Framework', {
      ...packageJson.default,
      name: 'lit-element',
    });
    import('./shares/register')
      .then(() => {
        import('./shares/routing')
          .then(() => {
            // Render the template to the document
            const htmlDivElement: HTMLDivElement | null = document.querySelector('div#lit-element');
            if (htmlDivElement instanceof HTMLDivElement) {
              htmlDivElement.style.display = 'inline';
              htmlDivElement.innerHTML = '<app-component />';
            }
          })
          .catch();
      })
      .catch();
  })
  .catch();
