import './angularjs.module';
import './components/app/component.angularjs';
import './components/input/component.angularjs';
import './components/series/create/component.angularjs';
import './components/series/edit/component.angularjs';
import './components/series/editor/component.angularjs';
import './components/series/list/component.angularjs';

import * as angular from 'angular';
import * as PACKAGE_JSON from 'angular/package.json';

import { run } from './app.run';
import { APP_HTML_ELEMENT } from './shares/constant';

run('AngularJS', PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#angularjs');
  if (htmlDivElement instanceof HTMLDivElement) {
    htmlDivElement.appendChild(APP_HTML_ELEMENT);
    angular.bootstrap(htmlDivElement, ['app']);
  }
});
