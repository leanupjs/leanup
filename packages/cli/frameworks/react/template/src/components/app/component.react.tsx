import React from 'react';

import { GenericComponent } from '@leanup/lib/components/generic';
import { ReactComponent } from '@leanup/lib/components/react';

import IMG_LEANUP from '../../assets/logo.leanupjs.png';
import IMG_FRAMEWORK from '../../assets/logo.react.png';
import { RouterService } from '../../services/router/service';
import { Filters } from '../../shares/filters';
import { CreateSerieComponent } from '../series/create/component.react';
import { EditSerieComponent } from '../series/edit/component.react';
import { ListSerieComponent } from '../series/list/component.react';
import { AppController, ResolvedRoute } from './controller';

export class AppComponent extends ReactComponent<unknown, AppController> implements GenericComponent {
  public ctrl: AppController = new AppController();
  private resolvedRoute: ResolvedRoute = {
    url: 'series',
  };

  public constructor(props: unknown) {
    super(props, new AppController());
    RouterService.subscribe((route: { url: string }, params: { id: number }, query: unknown) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url,
      };
      this.forceUpdate();
    });
  }

  public render(): JSX.Element {
    return (
      <div class="my-app">
        <div className="grid grid-cols-3 items-center">
          <a href="https://reactjs.org/" target="reactjs" className="text-center">
            <img src={IMG_FRAMEWORK as string} alt="React Framework" class="m-auto w-24" />
          </a>
          <div className="text-center text-5xl text-gray-400 font-extrabold">+</div>
          <a href="https://leanupjs.org" target="leanupjs" className="text-center">
            <img src={IMG_LEANUP as string} alt="Leanup Stack" class="m-auto w-24" />
          </a>
        </div>
        <h1>
          {this.ctrl.framework.name} v{this.ctrl.framework.version}
        </h1>
        <small>{this.ctrl.finishedRendering} ms upcomming time</small>
        {this.resolvedRoute.url === 'series' && <ListSerieComponent />}
        {this.resolvedRoute.url === 'series/create' && <CreateSerieComponent />}
        {this.resolvedRoute.url === 'series/:id/edit' && <EditSerieComponent resolvedRoute={this.resolvedRoute} />}
        <small>
          Used filters: {Filters.date(this.ctrl.dummies.date)} | {Filters.currency(this.ctrl.dummies.price)} €
        </small>
        <br />
        <small>
          Build with: {this.ctrl.cli.name} v{this.ctrl.cli.version}
        </small>
      </div>
    );
  }
}
