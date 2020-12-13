import '../series/create/component.lit-element';
import '../series/edit/component.lit-element';
import '../series/list/component.lit-element';

import { customElement, html, TemplateResult } from 'lit-element';

import { RouterService } from '../../services/router/service';
import { LitElementComponent } from '../component.lit-element';
import { AppController, ResolvedRoute } from './controller';

@customElement('app-component')
export class AppComponent extends LitElementComponent {
  private readonly ctrl: AppController = new AppController();
  private resolvedRoute: ResolvedRoute = {
    url: 'series',
  };

  public constructor() {
    super();
    RouterService.subscribe((route: { url: string }, params: { id: number }, query: unknown) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url,
      };
      this.update(new Map());
    });
  }

  public render(): TemplateResult {
    return html`<div id="app">
      <code>- is currently not full implemented -</code>
      <h4>${this.ctrl.framework.name} v${this.ctrl.framework.version}</h4>
      <small>${this.ctrl.finishedRendering} ms upcomming time</small>
      ${this.resolvedRoute.url === 'series' ? html`<list-serie-component />` : ''}
      ${this.resolvedRoute.url === 'series/create' ? html`<create-serie-component />` : ''}
      ${this.resolvedRoute.url === 'series/:id/edit'
        ? html`<edit-serie-component isTrue resolvedRoute="${JSON.stringify(this.resolvedRoute)}" />`
        : ''}
      <br />
      <small> Build with: ${this.ctrl.cli.name} v${this.ctrl.cli.version} </small>
    </div>`;
  }
}
