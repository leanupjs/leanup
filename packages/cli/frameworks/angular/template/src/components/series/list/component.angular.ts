import { ApplicationRef, Component, Inject } from '@angular/core';
import { GenericComponent } from '@leanup/lib';

import { ListSerieController } from './controller';

@Component({
  selector: 'list-serie',
  template: `
    <div>
      <h2>List</h2>
      <div>
        <button class="primary" id="add" type="button" (click)="ctrl.add()">Add</button>
        <button class="secondary" id="start" type="button" *ngIf="ctrl.showPerformanceButton" (click)="ctrl.onStart()">
          Performance
        </button>
      </div>
      <table *ngFor="let element of ctrl.elements; index as i">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Unit</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let serie of ctrl.measuredSeries; index as i">
            <td>{{ i + 1 }}</td>
            <td>{{ serie.getId() }}</td>
            <td>{{ serie.getTitle() }}</td>
            <td>{{ serie.getUnit() }}</td>
            <td>
              <button id="edit-{{ i }}" type="button" (click)="ctrl.edit(serie)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <small>Duration: {{ ctrl.duration }} ms</small>
    </div>
  `,
})
export class ListSerieComponent implements GenericComponent {
  public readonly ctrl: ListSerieController;

  public constructor(@Inject(ApplicationRef) appRef: ApplicationRef) {
    this.ctrl = new ListSerieController({
      hooks: {
        doRender: appRef.tick.bind(this),
      },
    });
  }
}
