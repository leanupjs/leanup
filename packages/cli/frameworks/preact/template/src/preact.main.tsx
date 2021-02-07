import 'preact/debug';

import { h, render } from 'preact';
import * as PACKAGE_JSON from 'preact/package.json';

import { run } from './app.run';
import { AppComponent } from './components/app/component.preact';
import { typeIt } from './shares/utils';

const TYPED_PACKAGE_JSON = typeIt<{ version: string }>(PACKAGE_JSON);

run('Preact', TYPED_PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#preact');
  if (htmlDivElement instanceof HTMLDivElement) {
    render(<AppComponent />, htmlDivElement);
  }
});
