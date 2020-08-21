import { bindable, bindingMode } from 'aurelia-framework';

import { EditSerieController } from '../edit/controller';

export class EditSerie extends EditSerieController {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public resolvedRoute;

  public bind() {
    this.changeMeasuredSerie(this.resolvedRoute.params.id);
  }
}
