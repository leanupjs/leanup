import { Component, createSignal, onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';

import IMG_LEANUP from '../../assets/logo.leanupjs.png';
import IMG_FRAMEWORK from '../../assets/logo.solid.png';
import { RouterService } from '../../services/router/service';
import { Filters } from '../../shares/filters';
import { CreateSerieComponent } from '../series/create/component.solid';
import { EditSerieComponent } from '../series/edit/component.solid';
import { ListSerieComponent } from '../series/list/component.solid';
import { AppController, ResolvedRoute } from './controller';

export const AppComponent: Component = () => {
  const [store, setStore] = createStore<AppController>(
    new AppController({
      hooks: {
        doRender: () => setStore({}),
      },
    })
  );
  const [resolvedRoute, setResolvedRoute] = createSignal<ResolvedRoute>({
    url: 'series',
  });

  const routerListener = (
    route: {
      url: string;
    },
    data: {
      id: string;
    }
  ) => {
    setResolvedRoute({
      data,
      url: route.url,
    });
  };

  RouterService.subscribe(routerListener);
  onCleanup(() => {
    RouterService.unsubscribe(routerListener);
  });

  return (
    <div className="my-app">
      <code>- is currently not full implemented -</code>
      <div className="grid grid-cols-3 items-center">
        <a href="https://www.solidjs.com" target="solidjs" className="text-center">
          <img src={IMG_FRAMEWORK as string} alt="{store.framework.name} Framework" className="m-auto h-24" />
        </a>
        <div className="text-center text-5xl text-gray-400 font-extrabold">+</div>
        <a href="https://leanupjs.org" target="leanupjs" className="text-center">
          <img src={IMG_LEANUP as string} alt="Leanup Stack" className="m-auto h-24" />
        </a>
      </div>
      <h1>
        {store.framework.name} v{store.framework.version}
      </h1>
      <small>{store.finishedRendering} ms upcomming time</small>
      <br />
      {resolvedRoute().url === 'series' && <ListSerieComponent />}
      {resolvedRoute().url === 'series/create' && <CreateSerieComponent />}
      {resolvedRoute().url === 'series/:id/edit' && <EditSerieComponent resolvedRoute={resolvedRoute()} />}
      <small>
        Used filters: {Filters.date(store.dummies.date)} | {Filters.currency(store.dummies.price)} €
      </small>
      <br />
      <small>
        Build with: {store.cli.name} v{store.cli.version}
      </small>
    </div>
  );
};
