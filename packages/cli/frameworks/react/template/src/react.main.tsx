import React from 'react';
import ReactDOM from 'react-dom';

import { DI } from '@leanup/lib/helpers/injector';

import { AppComponent } from './components/app/component.react';

import('react/package.json')
  .then((packageJson: any) => {
    DI.register('Framework', {
      ...packageJson.default,
      name: 'React',
    });
    import('./shares/register')
      .then(() => {
        import('./shares/routing')
          .then(() => {
            const htmlDivElement: HTMLDivElement | null = document.querySelector('div#react');
            if (htmlDivElement instanceof HTMLDivElement) {
              htmlDivElement.style.display = 'inline';
              ReactDOM.render(<AppComponent />, htmlDivElement);
            }
          })
          .catch();
      })
      .catch();
  })
  .catch();
