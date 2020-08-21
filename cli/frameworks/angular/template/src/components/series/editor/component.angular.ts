import { Component, Input } from '@angular/core';

import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

@Component({
  selector: 'editor-serie',
  template: `
    <div>
      <app-input [control]="editorForm.getInput('title')"></app-input>
      <app-input [control]="editorForm.getInput('unit')"></app-input>
    </div>
  `,
})
export class EditorSerieComponent extends EditorSerieController {
  @Input() public editorForm: EditorForm;
}
