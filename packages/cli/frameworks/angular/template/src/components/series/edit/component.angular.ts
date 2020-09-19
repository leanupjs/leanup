import { Component, Input, OnChanges } from '@angular/core';
import { GenericComponent } from '@leanup/lib/components/generic';

import { ResolvedRoute } from '../../app/controller';
import { EditSerieController } from './controller';

@Component({
  selector: 'edit-serie',
  template: `
    <form (ngSubmit)="ctrl.onSubmit()">
      <h5>Edit a existing measuring serie</h5>
      <editor-serie [editorForm]="ctrl.editorForm"></editor-serie>
      <button class="btn btn-primary" type="submit" id="submit">Edit</button>
      <button class="btn btn-secondary" type="reset" id="cancel" (click)="ctrl.onCancel()">Abbrechen</button>
      <button class="btn btn-danger" id="delete" type="button" (click)="ctrl.onDelete()">Delete</button>
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
