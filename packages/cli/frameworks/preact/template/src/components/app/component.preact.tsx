import { createRef, h } from 'preact';

import { GenericComponent } from '@leanup/lib/components/generic';
import { PreactComponent } from '@leanup/lib/components/preact';

// import { ButtonComponent } from '@leanup/material-preact/button.component';
// import { SliderComponent } from '@leanup/material-preact/slider.component';
// import { TextFieldComponent } from '@leanup/material-preact/text-field.component';
import { RouterService } from '../../services/router/service';
import { Filters } from '../../shares/filters';
import { CreateSerieComponent } from '../series/create/component.preact';
import { EditSerieComponent } from '../series/edit/component.preact';
import { ListSerieComponent } from '../series/list/component.preact';
import { AppController, Props, ResolvedRoute } from './controller';

export class AppComponent extends PreactComponent<Props, AppController> implements GenericComponent {
  public ctrl: AppController = new AppController();
  private resolvedRoute: ResolvedRoute = {
    url: 'series',
  };
  public ref = createRef();

  public constructor(props: Props) {
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

  public render(): preact.JSX.Element {
    return (
      <div id="app">
        <h4>
          {this.ctrl.framework.name} v{this.ctrl.framework.version}
        </h4>
        <small>{this.ctrl.finishedRendering} ms upcomming time</small>
        {this.resolvedRoute.url === 'series' && <ListSerieComponent />}
        {this.resolvedRoute.url === 'series/create' && <CreateSerieComponent />}
        {this.resolvedRoute.url === 'series/:id/edit' && <EditSerieComponent resolvedRoute={this.resolvedRoute} />}
        <small>
          Used filters: {Filters.date(this.ctrl.dummies.date)} |{Filters.currency(this.ctrl.dummies.price)} €
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
