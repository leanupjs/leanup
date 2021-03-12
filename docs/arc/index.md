# Flexible web application architecture

This project demonstrates a scalable, flexible, and framework-neutral JavaScript web application architecture.

# Frameworks

The selection of the following frameworks depends on this [report](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2019-results#js-framework-essential) and [benchmark](https://krausest.github.io/js-framework-benchmark/2019/table_chrome_78.html).

|        Characteristic |   [Angular]    | [AngularJS] | [Aurelia] |    [Inferno]    |    [Preact]     |     [React]     | [Svelte] | Vanilla  |          [Vue]          | [Vue3] |
| --------------------: | :------------: | :---------: | :-------: | :-------------: | :-------------: | :-------------: | :------: | :------: | :---------------------: | ------ |
|               Version |      10.1      |     1.8     |    1.3    |       7.4       |      10.4       |      16.13      |   3.24   |    -     | 2.6 ([Composition API]) | 3.0-rc |
|         Artifact size |    598 KiB     |   213 KiB   |  354 KiB  |    52.4 KiB     |    47.9 KiB     |     160 KiB     | 45.3 KiB | 31.8 KiB |         114 KiB         | - KiB  |
|        Upcomming time |    ~53.5 ms    |   ~50 ms    |  ~10 ms   |     ~11 ms      |     ~12 ms      |     ~13 ms      |  ~13 ms  |    -     |         ~18 ms          | - ms   |
|      Performance test |       ✔️       |     ✔️      |    ✔️     |       ✔️        |       ✔️        |       ✔️        |    ✔️    |    ✔️    |           ✔️            | ✔️     |
| [Devtools](#devtools) |       ✔️       |     ✔️      |    ⌛     |       ✔️        |       ✔️        |       ✔️        |    ✔️    |    ❌    |           ✔️            | ✔️     |
|                Router |       ✔️       |     ✔️      |    ✔️     |       ✔️        |       ✔️        |       ✔️        |    ✔️    |    ✔️    |           ✔️            | ✔️     |
|                    DI |       ✔️       |     ✔️      |    ✔️     |       ✔️        |       ✔️        |       ✔️        |    ✔️    |    ✔️    |           ✔️            | ✔️     |
|                 [SPA] |       ✔️       |     ✔️      |    ✔️     |       ✔️        |       ✔️        |       ✔️        |    ✔️    |    ✔️    |           ✔️            | ✔️     |
|                 [PWA] |       ✔️       |     ✔️      |    ⌛     |       ✔️        |       ✔️        |       ✔️        |    ✔️    |    ✔️    |           ✔️            | ✔️     |
|                 [SSR] |       ✔️       |     ✔️      |    ⌛     |       ✔️        |       ✔️        |       ✔️        |    ✔️    |    ✔️    |           ✔️            | ✔️     |
|   Internet Explorer\* |       ❌       |     ✔️      |    ❌     |       ✔️        |       ✔️        |       ✔️        |    ❌    |    ❌    |           ✔️            | ✔️     |
|         Framework CLI | ✔️<br>(253 KB) |     ❌      |  ✔️\*\*   |       ❌        |       ❌        |       ❌        |    ❌    |    ❌    |     ✔️<br>(121 KB)      | ✔️     |
|            Scoped App |       ✔️       |     ✔️      |    ✔️     |       ✔️        |       ✔️        |       ✔️        |    ✔️    |    ❌    |           ✔️            | ✔️     |
|      Language Support |       ✔️       |     ⌛      |    ⌛     | ✔️<br>[JSX/TSX] | ✔️<br>[JSX/TSX] | ✔️<br>[JSX/TSX] |    ⌛    |    ✔️    |           ✔️            | ✔️     |

\* Maybe more polyfills are required for IE.<br>
\*\* The Aurelia CLI can not be used for this project.

### Devtools

- [Angular Devtools] and language support
- [AngularJS Devtools]
- [React Devtools], also for Inferno and Preact and language support
- [Svelte Devtools]
- [Vue Devtools] and language support

## References

- https://github.com/infernojs/inferno-typescript-example
- https://medium.com/js-dojo/how-to-configure-webpack-4-with-vuejs-a-complete-guide-209e943c4772
- https://vue-composition-api-rfc.netlify.com/
- https://webpack.js.org/plugins/copy-webpack-plugin/
- https://webpack.js.org/plugins/html-webpack-plugin/
- https://vue-loader.vuejs.org/guide/
- https://webpack.js.org/configuration/
- https://webpack.js.org/configuration/dev-server/
- https://vuejs.org/v2/guide/#Getting-Started
- https://reactjs.org/docs/getting-started.html
- https://infernojs.org/docs/guides/getting-started
- https://angular.io/start
- https://docs.angularjs.org/misc/started
- https://babeljs.io/docs/en/configuration
- https://github.com/krausest/js-framework-benchmark
- https://preactjs.com/guide/v10/getting-started/

[babel]: https://babeljs.io
[bootstrap]: https://getbootstrap.com
[material]: https://material.io
[typescript]: https:/typescriptlang.org
[webpack]: https://webpack.js.org
[angular]: https://angular.io
[angularjs]: https://angularjs.org
[inferno]: https://infernojs.org
[preact]: https://preactjs.com
[react]: https://reactjs.org
[vue]: https://vuejs.org
[spa]: https://en.wikipedia.org/wiki/Single-page_application
[pwa]: https://de.wikipedia.org/wiki/Progressive_Web_App
[composition api]: https://vue-composition-api-rfc.netlify.com
[js-benchmark]: https://krausest.github.io/js-framework-benchmark/2019/table_chrome_78.html
[angular cli]: https://cli.angular.io
[vue cli]: https://cli.vuejs.org
[svelte]: https://svelte.dev
[svelte-loader]: https://github.com/sveltejs/svelte-loader
[babel-loader]: https://github.com/babel/babel-loader
[ssr]: https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38
[demo]: https://github.modevel.de/poc
[mocha]: https://mochajs.org
[chai]: https://www.chaijs.com
[nyc]: https://istanbul.js.org
[storybook]: https://storybook.js.org/
[angular devtools]: https://augury.rangle.io
[react devtools]: https://reactjs.org/docs/optimizing-performance.html
[vue devtools]: https://github.com/vuejs/vue-devtools
[angularjs devtools]: https://chrome.google.com/webstore/detail/ng-inspect-for-angularjs/cidepfmbgngpdapgncfhpecbdhmnnemf
[svelte devtools]: https://github.com/RedHatter/svelte-devtools
[aurelia]: https://aurelia.io
[moment]: https://momentjs.com
[cypress]: https://cypress.io
[nightwatch.js]: https://nightwatchjs.org
[jsx/tsx]: https://www.jambit.com/aktuelles/toilet-papers/was-ist-eigentlich-jsx-tsx/
[workbox]: https://developers.google.com/web/tools/workbox
[eslint]: https://eslint.org
[prettier]: https://prettier.io
[ant]: https://ant.design
