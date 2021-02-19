import { bindable, bindingMode } from 'aurelia-framework';

import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

export class EditorSerie extends EditorSerieController {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public editorForm!: EditorForm;
}
