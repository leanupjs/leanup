import './components/app/component.vanilla';

import { run } from './app.run';

run('Vanilla', null, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vanilla');
  const appElement: HTMLElement = document.createElement('wc-app');
  htmlDivElement.appendChild(appElement);
});
