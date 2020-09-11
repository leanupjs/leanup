import { FormControl, InputControl } from '../../input/controller';

export class EditorForm extends FormControl {
  public constructor(name: string) {
    super(name);
    this.addInput(
      new InputControl('title', {
        label: 'Title',
        value: '',
      })
    );
    this.addInput(
      new InputControl('unit', {
        label: 'Unit',
        value: '',
      })
    );
  }
}
