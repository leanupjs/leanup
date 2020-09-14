import React from 'react';

import { RouterService } from '../../services/router/service';
import { ReactComponent } from '../component.react';
import { CreateSerieComponent } from '../series/create/component.react';
import { EditSerieComponent } from '../series/edit/component.react';
import { ListSerieComponent } from '../series/list/component.react';
import { AppController, Props } from './controller';
import { Filters } from '../../shares/filters';

export class AppComponent extends ReactComponent<Props, unknown> {
  private resolvedRoute: any = {
    url: 'series',
  };

  public constructor(props: any) {
    super(props, new AppController());
    RouterService.subscribe((route: any, params: any, query: any) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url,
      };
      this.forceUpdate();
    });
  }

  public render() {
    return (
      <div id="app">
        <h4>
          {this.$ctrl.framework.name} v{this.$ctrl.framework.version}
        </h4>
        <small>{this.$ctrl.finishedRendering} ms upcomming time</small>
        {this.resolvedRoute.url === 'series' && <ListSerieComponent />}
        {this.resolvedRoute.url === 'series/create' && <CreateSerieComponent />}
        {this.resolvedRoute.url === 'series/:id/edit' && <EditSerieComponent resolvedRoute={this.resolvedRoute} />}
        <small>
          Used filters: {Filters.date(this.$ctrl.dummies.date)} | {Filters.currency(this.$ctrl.dummies.price)} €
        </small>
      </div>
    );
  }
}
