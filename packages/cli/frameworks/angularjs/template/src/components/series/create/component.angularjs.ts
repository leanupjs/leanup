import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { CreateSerieController } from './controller';

ANGULARJS_MODULE.component('createSerie', {
  controller: ['$scope', CreateSerieController],
  template: `
  <form ng-submit="$ctrl.onSubmit()">
    <h2>Create a new measuring serie</h2>
    <editor-serie editor-form="$ctrl.editorForm"></editor-serie>
    <button class="primary" type="submit" id="submit">Add</button>
    <button class="secondary" type="reset" id="cancel" ng-click="$ctrl.onCancel()">
      Abbrechen
    </button>
  </form>
`,
});
