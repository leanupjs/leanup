import { ANGULARJS_MODULE } from '../../angularjs.module';

ANGULARJS_MODULE.component('appInput', {
  bindings: {
    control: '<',
  },
  template: `
  <div class="form-group">
    <label for="{{$ctrl.control.id}}">{{$ctrl.control.label}}</label>
    <input
      class="form-control"
      id="{{$ctrl.control.id}}"
      name="{{$ctrl.control.name}}"
      ng-model="$ctrl.control.value"
    />
  </div>
`,
});
