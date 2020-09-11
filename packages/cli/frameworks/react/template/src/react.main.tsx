import React from 'react';
import ReactDOM from 'react-dom';

import { DI } from '@leanup/lib/helpers/injector';

import { AppComponent } from './components/app/component.react';

DI.register('Framework', {
  ...require('react/package.json'),
  name: 'React',
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#react');
htmlDivElement.style.display = 'inline';
ReactDOM.render(<AppComponent />, htmlDivElement);
