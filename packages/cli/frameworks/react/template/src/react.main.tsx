import React from 'react';
import ReactDOM from 'react-dom';

import { importCatch, run } from './app.run';
import { AppComponent } from './components/app/component.react';

import(
  /* webpackMode: "eager" */
  /* webpackChunkName: "react.package.json" */
  `react/package.json`
)
  .then((packageJson: { default: Object }) => {
    run('React', packageJson, () => {
      const htmlDivElement: HTMLDivElement | null = document.querySelector('div#react');
      if (htmlDivElement instanceof HTMLDivElement) {
        ReactDOM.render(<AppComponent />, htmlDivElement);
      }
    });
  })
  .catch(importCatch);
