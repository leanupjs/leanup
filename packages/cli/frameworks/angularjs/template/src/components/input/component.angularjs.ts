import { InputControl } from '@leanup/form/controls/controls';

import { ANGULARJS_MODULE } from '../../angularjs.module';

interface Scope {
  $apply: Function;
  $ctrl: {
    control: InputControl;
  };
}

ANGULARJS_MODULE.component('appInput', {
  bindings: {
    control: '<',
  },
  controller: [
    '$scope',
    class {
      private $scope: Scope;
      public constructor($scope: Scope) {
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
