import { RouterService } from '../../services/router/service';
import { AppController } from './controller';

export class App extends AppController {
  public resolvedRoute: any = {
    url: 'series',
  };

  constructor() {
    super();
    RouterService.subscribe((route: any, params: any, query: any) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url,
      };
    });
  }
}
