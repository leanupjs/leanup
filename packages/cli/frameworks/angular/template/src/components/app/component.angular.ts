import { ApplicationRef, Component } from '@angular/core';

import { RouterService } from '../../services/router/service';
import { Filters } from '../../shares/filters';
import { AppController, ResolvedRoute } from './controller';

@Component({
  selector: 'app',
  template: `
    <div id="app">
      <h4>{{ framework.name }} v{{ framework.version }}</h4>
      <small>{{ finishedRendering }} ms upcomming time</small>
      <list-serie *ngIf="resolvedRoute.url === 'series'"></list-serie>
      <create-serie *ngIf="resolvedRoute.url === 'series/create'"></create-serie>
      <edit-serie *ngIf="resolvedRoute.url === 'series/:id/edit'" [resolvedRoute]="resolvedRoute"></edit-serie>
      <small>Used filters: {{ filters.date(dummies.date) }} | {{ filters.currency(dummies.price) }} €</small>
    </div>
  `,
})
export class AppComponent extends AppController {
  public filters = Filters;
  public resolvedRoute: ResolvedRoute = {
    url: 'series',
  };

  public constructor(appRef: ApplicationRef) {
    super();
    RouterService.subscribe((route: { url: string }, params: { id: number }, query: unknown) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url,
      };
      appRef.tick();
    });
  }
}
