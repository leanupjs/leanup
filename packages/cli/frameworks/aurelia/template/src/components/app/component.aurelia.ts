import IMG_FRAMEWORK from '../../assets/logo.aurelia.png';
import { RouterService } from '../../services/router/service';
import { AppController, ResolvedRoute } from './controller';

export class App extends AppController {
  public readonly frameworkImg: string = IMG_FRAMEWORK as string;
  public resolvedRoute: ResolvedRoute = {
    url: 'series',
  };

  constructor() {
    super();
    RouterService.subscribe((route: { url: string }, params: { id: number }, query: unknown) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url,
      };
    });
  }
}
