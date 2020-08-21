import { ANGULARJS_MODULE } from '../../angularjs.module';
import { RouterService } from '../../services/router/service';
import { AppController } from './controller';

ANGULARJS_MODULE.component('app', {
  controller: [
    '$scope',
    class extends AppController {
      public resolvedRoute: any = {
        url: 'series',
      };

      public constructor($scope: any) {
        super();
        RouterService.subscribe((route: any, params: any, query: any) => {
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
  <div id="app">
    <h4>{{ $ctrl.framework.name }} v{{ $ctrl.framework.version }}</h4>
    <small>{{ $ctrl.finishedRendering }} ms upcomming time</small>
    <list-serie ng-if="$ctrl.resolvedRoute.url === 'series'"></list-serie>
    <create-serie ng-if="$ctrl.resolvedRoute.url === 'series/create'"></create-serie>
    <edit-serie ng-if="$ctrl.resolvedRoute.url === 'series/:id/edit'" resolved-route="$ctrl.resolvedRoute" test="$ctrl.resolvedRoute"></edit-serie>
    <small>Used filters: {{ $ctrl.filters.date($ctrl.dummies.date) }} | {{ $ctrl.filters.currency($ctrl.dummies.price) }} €</small>
  </div>
`,
});
