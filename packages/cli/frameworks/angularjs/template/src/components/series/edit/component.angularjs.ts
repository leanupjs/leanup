import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { EditSerieController } from './controller';

ANGULARJS_MODULE.component('editSerie', {
  bindings: {
    resolvedRoute: '<',
  },
  controller: class extends EditSerieController {
    public resolvedRoute: any;

    public $onChanges() {
      this.changeMeasuredSerie(this.resolvedRoute.params.id);
    }
  },
  template: `
    <form ng-submit="$ctrl.onSubmit()">
      <h5>Edit a existing measuring serie</h5>
      <editor-serie editor-form="$ctrl.editorForm"></editor-serie>
      <button class="btn btn-primary" type="submit" id="submit">Edit</button>
      <button class="btn btn-secondary" type="reset" id="cancel" ng-click="$ctrl.onCancel()">
        Abbrechen
      </button>
      <button class="btn btn-danger" id="delete" type="button" ng-click="$ctrl.onDelete()">
        Delete
      </button>
    </form>
`,
});
