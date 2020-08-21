import { Component } from '@angular/core';

import { CreateSerieController } from './controller';

@Component({
  selector: 'create-serie',
  template: `
    <form (ngSubmit)="onSubmit()">
      <h5>Create a new measuring serie</h5>
      <editor-serie [editorForm]="editorForm"></editor-serie>
      <button class="btn btn-primary" type="submit" id="submit">Add</button>
      <button class="btn secondary" type="reset" id="cancel" (click)="onCancel()">
        Abbrechen
      </button>
    </form>
  `,
})
export class CreateSerieComponent extends CreateSerieController {}
