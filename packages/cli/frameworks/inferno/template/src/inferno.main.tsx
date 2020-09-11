import { render } from 'inferno';

import { DI } from '@leanup/lib/helpers/injector';

import { AppComponent } from './components/app/component.inferno';

DI.register('Framework', {
  ...require('inferno/package.json'),
  name: 'Inferno',
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#inferno');
htmlDivElement.style.display = 'inline';
render(<AppComponent />, htmlDivElement);
