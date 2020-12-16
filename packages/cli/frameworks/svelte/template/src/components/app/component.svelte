<script>
  import { AppController } from './controller';
  import { RouterService } from '../../services/router/service';
  import ListSerieComponent from '../series/list/component.svelte';
  import CreateSerieComponent from '../series/create/component.svelte';
  import EditSerieComponent from '../series/edit/component.svelte';
  import { currency, date } from '@leanup/lib/shares/filters';
  import IMG_LEANUP from '../../assets/logo.leanupjs.png';
  import IMG_FRAMEWORK from '../../assets/logo.svelte.png';

  const ctrl = new AppController();
  let resolvedRoute = {
    url: 'series',
  };
  RouterService.subscribe((route, params, query) => {
    resolvedRoute = {
      params,
      query,
      url: route.url,
    };
  });
</script>

<div class="my-app">
  <div class="grid grid-cols-3 items-center">
    <a href="https://svelte.dev/" target="svelte" class="text-center">
      <img src={IMG_FRAMEWORK} alt="Svelte Framework" class="m-auto w-24" />
    </a>
    <div class="text-center text-5xl text-gray-400 font-extrabold">+</div>
    <a href="https://leanupjs.org" target="leanupjs" class="text-center">
      <img src={IMG_LEANUP} alt="Leanup Stack" class="m-auto w-24" />
    </a>
  </div>
  <h1>{ctrl.framework.name} v{ctrl.framework.version}</h1>
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
  <small>Used filters: {date(ctrl.dummies.date)} | {currency(ctrl.dummies.price)} €</small><br />
  <small>Build with {ctrl.cli.name} v{ctrl.cli.version}</small>
</div>
