import { customElement, html, TemplateResult } from 'lit-element';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { LitElementComponent } from '../../component.lit-element';
import { ListSerieController } from './controller';

@customElement('list-serie-component')
export class ListSerieComponent extends LitElementComponent {
  public ctrl: ListSerieController = new ListSerieController();

  constructor() {
    super();
    this.ctrl.renderView = this.update.bind(this);
  }

  public render(): TemplateResult {
    const tables: any[] = [];
    for (let i = 0; i < this.ctrl.elements.length; i++) {
      tables.push(
        html`
          <table class="table" key="{i}">
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
              ${this.ctrl.measuredSeries.map((serie: MeasuredSerieModel, index: number) => {
                return html` <tr key="{index}">
                  <td>${index + 1}</td>
                  <td>${serie.getId()}</td>
                  <td>${serie.getTitle()}</td>
                  <td>${serie.getUnit()}</td>
                  <td>
                    <button
                      class="btn btn-info"
                      id="edit-${index}"
                      type="button"
                      @click=${() => {
                        this.ctrl.edit(serie);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>`;
              })}
            </tbody>
          </table>
        `
      );
    }
    return html`
      <div>
        <h5>List</h5>
        <div>
          <button
            class="btn btn-success"
            id="add"
            type="button"
            @click=${() => {
              this.ctrl.add();
            }}
          >
            Add
          </button>
          ${this.ctrl.showPerformanceButton
            ? html`<button
                class="btn btn-info"
                id="start"
                type="button"
                @click=${() => {
                  this.ctrl.onStart();
                }}
              >
                Performance
              </button>`
            : ''}
        </div>
        ${tables}
        <small>Duration: ${this.ctrl.duration} ms</small>
      </div>
    `;
  }
}
