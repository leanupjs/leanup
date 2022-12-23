import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { EditorSerieController } from './controller';

ANGULARJS_MODULE.component('editorSerie', {
  bindings: {
    editorForm: '<',
  },
  controller: ['$scope', EditorSerieController],
  template: `
  <div>
    <app-input control="$ctrl.editorForm.getControl('title')"></app-input>
    <app-input control="$ctrl.editorForm.getControl('unit')"></app-input>
  </div>
`,
});
