import './angularjs.module';
import './components/app/component.angularjs';
import './components/input/component.angularjs';
import './components/series/create/component.angularjs';
import './components/series/edit/component.angularjs';
import './components/series/editor/component.angularjs';
import './components/series/list/component.angularjs';

import * as angular from 'angular';

import { importCatch, run } from './app.run';
import { APP_HTML_ELEMENT } from './shares/constant';

import(
  /* webpackChunkName: "angularjs.package.json" */
  `angular/package.json`
)
  .then((packageJson: { default: Object }) => {
    run('AngularJS', packageJson, () => {
      const htmlDivElement: HTMLDivElement | null = document.querySelector('div#angularjs');
      if (htmlDivElement instanceof HTMLDivElement) {
        htmlDivElement.style.display = 'inline';
        htmlDivElement.appendChild(APP_HTML_ELEMENT);
        angular.bootstrap(htmlDivElement, ['app']);
      }
    });
  })
  .catch(importCatch);
