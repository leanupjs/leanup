import IMG_FRAMEWORK from '../../assets/logo.aurelia.png';
import IMG_LEANUP from '../../assets/logo.leanupjs.png';
import { RouterService } from '../../services/router/service';
import { Filters } from '../../shares/filters';
import { AppController, ResolvedRoute } from './controller';

export class App extends AppController {
  public filter: Filters = Filters;
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
