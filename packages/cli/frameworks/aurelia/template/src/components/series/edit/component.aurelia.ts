import { bindable, bindingMode } from 'aurelia-framework';

import { ResolvedRoute } from '../../app/controller';
import { EditSerieController } from '../edit/controller';

export class EditSerie extends EditSerieController {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public resolvedRoute!: ResolvedRoute;

  public bind(): void {
    this.changeMeasuredSerie(parseInt(this.resolvedRoute.data?.id || '0'));
  }
}
