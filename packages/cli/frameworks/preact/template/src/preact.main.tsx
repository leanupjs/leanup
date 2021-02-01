import { h, render } from 'preact';
import * as PACKAGE_JSON from 'preact/package.json';

import { run } from './app.run';
import { AppComponent } from './components/app/component.preact';

// https://github.com/preactjs/preact/blob/master/README.md#debug-mode
const ENVs = {
  NODE_ENV: '$$NODE_ENV$$',
};
if (ENVs.NODE_ENV === 'development') {
  require('preact/debug');
}

run('Preact', PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#preact');
  if (htmlDivElement instanceof HTMLDivElement) {
    render(<AppComponent />, htmlDivElement);
  }
});
