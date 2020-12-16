import { ANGULARJS_MODULE } from '../../angularjs.module';
import IMG_FRAMEWORK from '../../assets/logo.angularjs.png';
import IMG_LEANUP from '../../assets/logo.leanupjs.png';
import { RouterService } from '../../services/router/service';
import { AppController, ResolvedRoute } from './controller';

ANGULARJS_MODULE.component('app', {
  controller: [
    '$scope',
    class extends AppController {
      public resolvedRoute: ResolvedRoute = {
        url: 'series',
      };

      public constructor($scope: { $apply: Function }) {
        super();
        RouterService.subscribe((route: { url: string }, params: { id: number }, query: unknown) => {
          this.resolvedRoute = {
            params,
            query,
            url: route.url,
          };
          $scope.$apply();
        });
      }
    },
  ],
  template: `
  <div class="my-app">
    <div class="grid grid-cols-3 items-center">
      <a href="https://angular.io" target="angular" class="text-center">
        <img src="{{ IMG_FRAMEWORK }}" alt="Angular Framework" class="m-auto w-24" />
      </a>
      <div class="text-center text-5xl text-gray-400 font-extrabold">+</div>
      <a href="https://leanupjs.org" target="leanupjs" class="text-center">
        <img src="{{ IMG_LEANUP }}" alt="Leanup Stack" class="m-auto w-24" />
      </a>
    </div>
    <h1>{{ $ctrl.framework.name }} v{{ $ctrl.framework.version }}</h1>
    <small>{{ $ctrl.finishedRendering }} ms upcomming time</small>
    <list-serie ng-if="$ctrl.resolvedRoute.url === 'series'"></list-serie>
    <create-serie ng-if="$ctrl.resolvedRoute.url === 'series/create'"></create-serie>
    <edit-serie ng-if="$ctrl.resolvedRoute.url === 'series/:id/edit'" resolved-route="$ctrl.resolvedRoute" test="$ctrl.resolvedRoute"></edit-serie>
    <small>Used filters: {{ $ctrl.filters.date($ctrl.dummies.date) }} | {{ $ctrl.filters.currency($ctrl.dummies.price) }} €</small><br />
    <small>Build with: {{ $ctrl.cli.name }} v{{ $ctrl.cli.version }}</small>
  </div>
`,
});
