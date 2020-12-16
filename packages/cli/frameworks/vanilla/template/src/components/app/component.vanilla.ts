import '../series/create/component.vanilla';
import '../series/list/component.vanilla';

import IMG_LEANUP from '../../assets/logo.leanupjs.png';
import IMG_FRAMEWORK from '../../assets/logo.vanilla.png';
import { RouterService } from '../../services/router/service';
import { Filters } from '../../shares/filters';
import { VanillaComponent } from '../component.vanilla';
import { AppController } from './controller';

function render(component: AppComponent) {
  let html = `<div class="my-app">
  <code>- is currently not full implemented -</code>
  <div class="grid grid-cols-3 items-center">
    <a href="https://developer.mozilla.org/de/docs/Web/Web_Components/Using_custom_elements" target="vanilla" class="text-center">
      <img src="${IMG_FRAMEWORK as string}" alt="Vanilla Framework" class="m-auto h-24" />
    </a>
    <div class="text-center text-5xl text-gray-400 font-extrabold">+</div>
    <a href="https://leanupjs.org" target="leanupjs" class="text-center">
      <img src="${IMG_LEANUP as string}" alt="Leanup Stack" class="m-auto h-24" />
    </a>
  </div>
  <h1>${component.$ctrl.framework.name}</h1>
  <small>${component.$ctrl.finishedRendering} ms upcomming time</small>`;
  if (component.resolvedRoute.url === 'series') {
    html += `<wc-list-serie></wc-list-serie>`;
  } else if (component.resolvedRoute.url === 'series/create') {
    html += `<wc-create-serie></wc-create-serie>`;
  } else if (component.resolvedRoute.url === 'series/edit') {
    html += `<wc-edit-serie></wc-edit-serie>`;
  }
  html += `<!-- small>${component.counter} s ticks</small -->
  <small>Used filters: ${Filters.date(component.$ctrl.dummies.date)} | ${Filters.currency(
    component.$ctrl.dummies.price
  )} €</small><br />
  <small>Build with: ${component.$ctrl.cli.name} v${component.$ctrl.cli.version}}</small>
  </div>`;
  return html;
}

type ResolveRoute = {
  params?: unknown;
  query?: unknown;
  url: string;
};

class AppComponent extends VanillaComponent {
  public readonly $ctrl: AppController = new AppController();
  public counter = 0;
  public resolvedRoute: ResolveRoute = {
    url: 'series',
  };

  public constructor() {
    super();
    RouterService.subscribe((route: { url: string }, params: unknown, query: unknown) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url,
      };
      this.render();
    });
  }

  protected render() {
    this.dom.innerHTML = render(this);
  }
}
customElements.define('wc-app', AppComponent);

// const hackThis = window.customElements.get('wc-app');
// hackThis.prototype.render = function() {
//   this.dom.innerHTML =
//     render(this.$ctrl, this.counter) +
//     `<span style="color: red; background-color: yellow">Hacked (${this.counter} s)!</span>`;
// };
