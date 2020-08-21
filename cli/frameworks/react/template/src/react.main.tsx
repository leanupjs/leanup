import React, { version } from 'react';
import ReactDOM from 'react-dom';

import { DI } from '@leanup/features/injector';

import { AppComponent } from './components/app/component.react';

DI.register('Framework', {
  name: 'React',
  version,
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#react');
htmlDivElement.style.display = 'inline';
ReactDOM.render(<AppComponent />, htmlDivElement);
