import { bindable, bindingMode } from 'aurelia-framework';

import { InputControl } from '@leanup/form/controls/controls';

export class AppInput {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public control!: InputControl;
}
