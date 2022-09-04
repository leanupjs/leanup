import { ApplicationRef, Component, Inject, Input, OnChanges } from '@angular/core';
import { GenericComponent } from '@leanup/lib';

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
  public readonly ctrl: EditSerieController;

  @Input() public resolvedRoute!: ResolvedRoute;

  public constructor(@Inject(ApplicationRef) appRef: ApplicationRef) {
    this.ctrl = new EditSerieController({
      hooks: {
        doRender: appRef.tick.bind(this),
      },
    });
  }

  public ngOnChanges(): void {
    this.ctrl.changeMeasuredSerie(parseInt(this.resolvedRoute.data?.id || '0'));
  }
}
