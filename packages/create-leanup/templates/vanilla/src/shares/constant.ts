import '../style.sass';

import { Framework } from '../models/framework.interface';

// import { register } from 'register-service-worker';

// register(`sw.js`, {
//   ready() {
//     console.log(
//       'App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB'
//     );
//   },
//   registered() {
//     console.log('Service worker has been registered.');
//   },
//   cached() {
//     console.log('Content has been cached for offline use.');
//   },
//   updatefound() {
//     console.log('New content is downloading.');
//   },
//   updated() {
//     console.log('New content is available; please refresh.');
//   },
//   offline() {
//     console.log('No internet connection found. App is running in offline mode.');
//   },
//   error(error) {
//     console.error('Error during service worker registration:', error);
//   },
// });

export const APP_HTML_ELEMENT: HTMLElement = document.createElement('app');
export const STARTUP_TIMESTAMP: number = Date.now();
export const CLI_DETAILS: Framework = {
  name: '$$CLI_NAME$$',
  version: '$$CLI_VERSION$$',
};
