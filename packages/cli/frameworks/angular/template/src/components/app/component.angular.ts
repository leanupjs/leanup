import { ApplicationRef, Component } from '@angular/core';

import IMG_FRAMEWORK from '../../assets/logo.angular.png';
import IMG_LEANUP from '../../assets/logo.leanupjs.png';
import { RouterService } from '../../services/router/service';
import { AppController, ResolvedRoute } from './controller';

@Component({
  selector: 'app',
  template: `
    <div class="my-app">
      <div class="grid grid-cols-3 items-center">
        <a href="https://angular.io" target="angular" class="text-center">
          <img src="{{ IMG_FRAMEWORK }}" alt="Angular Framework" class="m-auto h-24" />
        </a>
        <div class="text-center text-5xl text-gray-400 font-extrabold">+</div>
        <a href="https://leanupjs.org" target="leanupjs" class="text-center">
          <img src="{{ IMG_LEANUP }}" alt="Leanup Stack" class="m-auto h-24" />
        </a>
      </div>
      <h1>{{ framework.name }} v{{ framework.version }}</h1>
      <small>{{ finishedRendering }} ms upcomming time</small>
      <list-serie *ngIf="resolvedRoute.url === 'series'"></list-serie>
      <create-serie *ngIf="resolvedRoute.url === 'series/create'"></create-serie>
      <edit-serie *ngIf="resolvedRoute.url === 'series/:id/edit'" [resolvedRoute]="resolvedRoute"></edit-serie>
      <small>Used filters: {{ filters.date(dummies.date) }} | {{ filters.currency(dummies.price) }} €</small><br />
      <small>Build with: {{ cli.name }} v{{ cli.version }}</small>
    </div>
  `,
})
export class AppComponent extends AppController {
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
