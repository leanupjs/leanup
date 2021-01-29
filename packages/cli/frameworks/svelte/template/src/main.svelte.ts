import { importCatch, run } from './app.run';
import App from './components/app/component.svelte';

let app: unknown;

import(`svelte/package.json`)
  .then((packageJson: { default: Object }) => {
    run('Svelte', packageJson, () => {
      const htmlDivElement: HTMLDivElement | null = document.querySelector('div#svelte');
      if (htmlDivElement instanceof HTMLDivElement) {
        htmlDivElement.style.display = 'inline';
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        app = new App({
          target: htmlDivElement,
        });
      }
    });
  })
  .catch(importCatch);

export default app;
