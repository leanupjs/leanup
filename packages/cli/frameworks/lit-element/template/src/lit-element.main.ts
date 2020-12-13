import './components/app/component.lit-element';

import { DI } from '@leanup/lib/helpers/injector';

DI.register('Framework', {
  ...require('lit-element/package.json'),
  name: 'lit-element',
});
require('./shares/register');
require('./shares/routing');

// Render the template to the document
const htmlDivElement: HTMLDivElement | null = document.querySelector('div#lit-element');
if (htmlDivElement instanceof HTMLDivElement) {
  htmlDivElement.style.display = 'inline';
  htmlDivElement.innerHTML = '<app-component />';
}
