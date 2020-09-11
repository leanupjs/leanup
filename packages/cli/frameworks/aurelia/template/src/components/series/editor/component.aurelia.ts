import { bindable, bindingMode } from 'aurelia-framework';

import { EditorSerieController } from './controller';

export class EditorSerie extends EditorSerieController {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public editorForm;
}
