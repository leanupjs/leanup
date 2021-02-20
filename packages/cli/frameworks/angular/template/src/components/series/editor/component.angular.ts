import { Component, Input, OnChanges } from '@angular/core';
import { InputControl } from '@leanupjs/form/controls/controls';
import { GenericComponent } from '@leanupjs/lib/components/generic';

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
export class EditorSerieComponent implements GenericComponent, OnChanges {
  public readonly ctrl: EditorSerieController = new EditorSerieController();

  @Input() public editorForm!: EditorForm;
  public titleInput: InputControl = new InputControl('title');
  public unitInput: InputControl = new InputControl('title');

  ngOnChanges(): void {
    this.titleInput = <InputControl>this.editorForm.getControl('title');
    this.unitInput = <InputControl>this.editorForm.getControl('unit');
  }
}
