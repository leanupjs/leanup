import { RouterService } from '../services/router/service';

RouterService.register([
  {
    url: 'series',
  },
  {
    url: 'series/create',
  },
  {
    url: 'series/:id/edit',
  },
]);
