import { FormControl, InputControl } from '@leanup/form';

export class EditorForm extends FormControl {
  public constructor(name: string) {
    super(name);
    this.addControl(
      new InputControl('title', {
        label: 'Title',
        value: '',
      })
    );
    this.addControl(
      new InputControl('unit', {
        label: 'Unit',
        value: '',
      })
    );
  }
}
