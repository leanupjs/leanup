import { render } from 'inferno';
import * as PACKAGE_JSON from 'inferno-shared/package.json';

import { run } from './app.run';
import { AppComponent } from './components/app/component.inferno';

run('Inferno', PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#inferno');
  if (htmlDivElement instanceof HTMLDivElement) {
    render(<AppComponent />, htmlDivElement);
  }
});
