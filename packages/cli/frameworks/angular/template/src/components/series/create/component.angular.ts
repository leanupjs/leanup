import { Component } from '@angular/core';

import { CreateSerieController } from './controller';

@Component({
  selector: 'create-serie',
  template: `
    <form (ngSubmit)="onSubmit()">
      <h2>Create a new measuring serie</h2>
      <editor-serie [editorForm]="editorForm"></editor-serie>
      <button class="primary" type="submit" id="submit">Add</button>
      <button class="secondary" type="reset" id="cancel" (click)="onCancel()">Abbrechen</button>
    </form>
  `,
})
export class CreateSerieComponent extends CreateSerieController {
  // Den Overhead braucht nur Angular?!
  constructor() {
    super();
  }
}
