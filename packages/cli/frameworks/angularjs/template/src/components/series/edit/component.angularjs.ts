import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { ResolvedRoute } from '../../app/controller';
import { EditSerieController } from './controller';

ANGULARJS_MODULE.component('editSerie', {
  bindings: {
    resolvedRoute: '<',
  },
  controller: [
    '$scope',
    class extends EditSerieController {
      public resolvedRoute: ResolvedRoute;

      public $onChanges() {
        this.changeMeasuredSerie(this.resolvedRoute.params.id);
      }
    },
  ],
  template: `
    <form ng-submit="$ctrl.onSubmit()">
      <h2>Edit a existing measuring serie</h2>
      <editor-serie editor-form="$ctrl.editorForm"></editor-serie>
      <button class="primary" type="submit" id="submit">Edit</button>
      <button class="secondary" type="reset" id="cancel" ng-click="$ctrl.onCancel()">
        Abbrechen
      </button>
      <button class="danger" id="delete" type="button" ng-click="$ctrl.onDelete()">
        Delete
      </button>
    </form>
`,
});
