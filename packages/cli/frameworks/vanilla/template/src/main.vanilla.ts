import './components/app/component.vanilla';

import { importCatch, run } from './app.run';

run(
  'Vanilla',
  {
    default: {
      version: null,
    },
  },
  () => {
    const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vanilla');
    const appElement: HTMLElement = document.createElement('wc-app');
    htmlDivElement.appendChild(appElement);
  }
);
