import * as PACKAGE_JSON from 'svelte/package.json';

import { run } from './app.run';
import App from './components/app/component.svelte';
import { typeIt } from './shares/utils';

const TYPED_PACKAGE_JSON = typeIt<{ version: string }>(PACKAGE_JSON);

let app: unknown;

run('Svelte', TYPED_PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#svelte');
  if (htmlDivElement instanceof HTMLDivElement) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    app = new App({
      target: htmlDivElement,
    });
  }
});

export default app;
