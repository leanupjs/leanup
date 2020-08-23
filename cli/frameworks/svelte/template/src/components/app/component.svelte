<script>
  import { AppController } from './controller';
  import { RouterService } from '../../services/router/service';
  import ListSerieComponent from '../series/list/component.svelte';
  import CreateSerieComponent from '../series/create/component.svelte';
  import EditSerieComponent from '../series/edit/component.svelte';
  import { currency, date } from '@leanup/lib/shares/filters';

  const ctrl = new AppController();
  let resolvedRoute = {
    url: 'series'
  };
  RouterService.subscribe((route, params, query) => {
    resolvedRoute = {
      params,
      query,
      url: route.url
    };
  });
</script>

<div id="app">
  <h4>{ctrl.framework.name} v{ctrl.framework.version}</h4>
  <small>{ctrl.finishedRendering} ms upcomming time</small>
  {#if resolvedRoute.url === 'series'}
    <ListSerieComponent />
  {/if}
  {#if resolvedRoute.url === 'series/create'}
    <CreateSerieComponent />
  {/if}
  {#if resolvedRoute.url === 'series/:id/edit'}
    <EditSerieComponent {resolvedRoute} />
  {/if}
  <small>Used filters: {date(ctrl.dummies.date)} | {currency(ctrl.dummies.price)} €</small>
</div>
