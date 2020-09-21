import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { ListSerieController } from './controller';

ANGULARJS_MODULE.component('listSerie', {
  controller: [
    '$scope',
    class extends ListSerieController {
      public constructor($scope: { $apply: Function }) {
        super();
        this.renderView = () => {
          setTimeout(() => {
            $scope.$apply();
          }, 0);
        };
      }
    },
  ],
  template: `
    <div>
      <h5>List</h5>
      <div>
        <button class="btn btn-success" id="add" type="button" ng-click="$ctrl.add()">
          Add
        </button>
        <button class="btn btn-info" id="start" type="button" ng-if="$ctrl.showPerformanceButton" ng-click="$ctrl.onStart()">
          Performance
        </button>
      </div>
      <table class="table" ng-repeat="element in $ctrl.elements track by $index" key="{index}">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Unit</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="serie in $ctrl.measuredSeries" key="{index}">
            <td>{{ $index + 1 }}</td>
            <td>{{ serie.getId() }}</td>
            <td>{{ serie.getTitle() }}</td>
            <td>{{ serie.getUnit() }}</td>
            <td>
              <button class="btn btn-info" id="edit-{{$index}}" type="button" ng-click="$ctrl.edit(serie)">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <small>Duration: {{ $ctrl.duration }} ms</small>
    </div>
`,
});
