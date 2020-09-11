import { FormControl, InputControl } from '@leanup/form/controls/controls';

export class EditorForm extends FormControl {
  public constructor(name: string) {
    super(name);
    this.addConrol(
      new InputControl('title', {
        label: 'Title',
        value: '',
      })
    );
    this.addConrol(
      new InputControl('unit', {
        label: 'Unit',
        value: '',
      })
    );
  }
}
