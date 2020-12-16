import { Component, Input, OnChanges } from '@angular/core';
import { GenericComponent } from '@leanup/lib/components/generic';

import { ResolvedRoute } from '../../app/controller';
import { EditSerieController } from './controller';

@Component({
  selector: 'edit-serie',
  template: `
    <form (ngSubmit)="ctrl.onSubmit()">
      <h2>Edit a existing measuring serie</h2>
      <editor-serie [editorForm]="ctrl.editorForm"></editor-serie>
      <button class="primary" type="submit" id="submit">Edit</button>
      <button class="secondary" type="reset" id="cancel" (click)="ctrl.onCancel()">Abbrechen</button>
      <button class="danger" id="delete" type="button" (click)="ctrl.onDelete()">Delete</button>
    </form>
  `,
})
export class EditSerieComponent implements OnChanges, GenericComponent {
  public ctrl: EditSerieController = new EditSerieController(0);
  @Input() public resolvedRoute: ResolvedRoute;

  public ngOnChanges(): void {
    this.ctrl.changeMeasuredSerie(this.resolvedRoute.params.id);
  }
}
