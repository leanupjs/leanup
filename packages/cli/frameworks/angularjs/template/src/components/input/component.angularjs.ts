import { InputControl } from '@leanup/form/controls/controls';

import { ANGULARJS_MODULE } from '../../angularjs.module';

ANGULARJS_MODULE.component('appInput', {
  bindings: {
    control: '<',
  },
  controller: [
    '$scope',
    class {
      private $scope: { $apply: Function; $ctrl?: { control: InputControl } };
      public constructor($scope: { $apply: Function }) {
        this.$scope = $scope;
      }

      public $onInit() {
        this.$scope.$ctrl.control.changeListeners.add(this.$scope.$apply.bind(this));
      }

      public $onDestroy() {
        this.$scope.$ctrl.control.changeListeners.remove(this.$scope.$apply.bind(this));
      }
    },
  ],
  template: `
  <div>
    <label for="{{$ctrl.control.id}}">{{$ctrl.control.label}}</label>
    <input
     
      id="{{$ctrl.control.id}}"
      name="{{$ctrl.control.name}}"
      ng-model="$ctrl.control.value"
    />
  </div>
`,
});
