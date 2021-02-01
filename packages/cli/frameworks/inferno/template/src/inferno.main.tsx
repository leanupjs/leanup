import { render } from 'inferno';
import * as PACKAGE_JSON from 'inferno-shared/package.json';

import { run } from './app.run';
import { AppComponent } from './components/app/component.inferno';
import { typeIt } from './shares/utils';

const TYPED_PACKAGE_JSON = typeIt<{ version: string }>(PACKAGE_JSON);

run('Inferno', TYPED_PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#inferno');
  if (htmlDivElement instanceof HTMLDivElement) {
    render(<AppComponent />, htmlDivElement);
  }
});
