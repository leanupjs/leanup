import { ApplicationRef, Component, Inject, Input, OnChanges } from '@angular/core';
import { InputControl } from '@leanup/form';
import { GenericComponent } from '@leanup/lib';

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
  public readonly ctrl: EditorSerieController;

  @Input() public editorForm!: EditorForm;
  public titleInput: InputControl = new InputControl('title');
  public unitInput: InputControl = new InputControl('title');

  public constructor(@Inject(ApplicationRef) appRef: ApplicationRef) {
    this.ctrl = new EditorSerieController({
      hooks: {
        doRender: appRef.tick.bind(this),
      },
    });
  }

  public ngOnChanges(): void {
    this.titleInput = <InputControl>this.editorForm.getControl('title');
    this.unitInput = <InputControl>this.editorForm.getControl('unit');
  }
}
