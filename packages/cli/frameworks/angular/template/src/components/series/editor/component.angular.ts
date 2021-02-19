import { Component, Input, OnChanges } from '@angular/core';
import { InputControl } from '@leanup/form/controls/controls';

import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

@Component({
  selector: 'editor-serie',
  template: `
    <div>
      <app-input [control]="titleInput"></app-input>
      <app-input [control]="unitInput"></app-input>
    </div>
  `,
})
export class EditorSerieComponent extends EditorSerieController implements OnChanges {
  @Input() public editorForm!: EditorForm;
  public titleInput: InputControl = new InputControl('title');
  public unitInput: InputControl = new InputControl('title');

  ngOnChanges(): void {
    this.titleInput = <InputControl>this.editorForm.getControl('title');
    this.unitInput = <InputControl>this.editorForm.getControl('unit');
  }
}
