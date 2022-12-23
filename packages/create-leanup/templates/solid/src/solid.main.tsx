import { render } from 'solid-js/web';

import * as PACKAGE_JSON from '../node_modules/solid-js/package.json';
import { run } from './app.run';
import { AppComponent } from './components/app/component.solid';
import { typeIt } from './shares/utils';

const TYPED_PACKAGE_JSON = typeIt<{ version: string }>(PACKAGE_JSON);

run('Solid', TYPED_PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#solid');
  if (htmlDivElement instanceof HTMLDivElement) {
    render(() => <AppComponent />, htmlDivElement);
  }
});
