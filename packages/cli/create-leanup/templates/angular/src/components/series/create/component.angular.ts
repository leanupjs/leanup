import { ApplicationRef, Component, Inject } from '@angular/core';
import { GenericComponent } from '@leanup/lib';

import { CreateSerieController } from './controller';

@Component({
  selector: 'create-serie',
  template: `
    <form (ngSubmit)="ctrl.onSubmit()">
      <h2>Create a new measuring serie</h2>
      <editor-serie [editorForm]="ctrl.editorForm"></editor-serie>
      <button class="primary" type="submit" id="submit">Add</button>
      <button class="secondary" type="reset" id="cancel" (click)="ctrl.onCancel()">Abbrechen</button>
    </form>
  `,
})
export class CreateSerieComponent implements GenericComponent {
  public readonly ctrl: CreateSerieController;

  public constructor(@Inject(ApplicationRef) appRef: ApplicationRef) {
    this.ctrl = new CreateSerieController({
      hooks: {
        doRender: appRef.tick.bind(this),
      },
    });
  }
}
