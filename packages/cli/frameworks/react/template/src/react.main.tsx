import React from 'react';
import ReactDOM from 'react-dom';
import * as PACKAGE_JSON from 'react/package.json';

import { run } from './app.run';
import { AppComponent } from './components/app/component.react';
import { typeIt } from './shares/utils';

const TYPED_PACKAGE_JSON = typeIt<{ version: string }>(PACKAGE_JSON);

run('React', TYPED_PACKAGE_JSON.version, () => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#react');
  if (htmlDivElement instanceof HTMLDivElement) {
    ReactDOM.render(<AppComponent />, htmlDivElement);
  }
});
