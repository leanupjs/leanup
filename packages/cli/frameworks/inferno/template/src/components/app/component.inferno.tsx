import { createRef } from 'inferno';

import { GenericComponent } from '@leanup/lib/components/generic';
import { InvernoComponent } from '@leanup/lib/components/inferno';

import { RouterService } from '../../services/router/service';
import { Filters } from '../../shares/filters';
import { CreateSerieComponent } from '../series/create/component.inferno';
import { EditSerieComponent } from '../series/edit/component.inferno';
import { ListSerieComponent } from '../series/list/component.inferno';
import { AppController, ResolvedRoute } from './controller';

export class AppComponent extends InvernoComponent<unknown, AppController> implements GenericComponent {
  public ctrl: AppController = new AppController();
  private resolvedRoute: ResolvedRoute = {
    url: 'series',
  };
  public ref = createRef();

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
        {/* <hr />
        <div style="border: 1px solid; max-width: 350px; background: #ddd">
          <p>
            In this box we study the usage of <a href="https://material.io/">Google Material Design</a> as capsulated
            multiframework components.
          </p>
          <ButtonComponent></ButtonComponent>
          <SliderComponent></SliderComponent>
          <TextFieldComponent></TextFieldComponent>
        </div> */}
      </div>
    );
  }
}
