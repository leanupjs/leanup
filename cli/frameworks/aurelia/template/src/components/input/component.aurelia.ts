import { bindable, bindingMode } from 'aurelia-framework';

export class AppInput {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public control;
}
