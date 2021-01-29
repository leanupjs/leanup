import React from 'react';
import ReactDOM from 'react-dom';

import { importCatch, run } from './app.run';
import { AppComponent } from './components/app/component.react';

import(`react/package.json`)
  .then((packageJson: { default: Object }) => {
    run('React', packageJson, () => {
      const htmlDivElement: HTMLDivElement | null = document.querySelector('div#react');
      if (htmlDivElement instanceof HTMLDivElement) {
        htmlDivElement.style.display = 'inline';
        ReactDOM.render(<AppComponent />, htmlDivElement);
      }
    });
  })
  .catch(importCatch);
