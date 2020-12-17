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
          <table key="{i}">
            <thead>
              <tr>
                <th class="w-1/8">#</th>
                <th class="w-1/8">ID</th>
                <th class="w-1/4">Title</th>
                <th class="w-1/5">Unit</th>
                <th class="w-1/5">Action</th>
              </tr>
            </thead>
            <tbody>
              ${this.ctrl.measuredSeries.map((serie: MeasuredSerieModel, index: number) => {
                return html` <tr key="{index}">
                  <td class="text-center">${index + 1}</td>
                  <td class="text-center">${serie.getId()}</td>
                  <td class="text-center">${serie.getTitle()}</td>
                  <td class="text-center">${serie.getUnit()}</td>
                  <td class="text-center">
                    <button
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
        <h3>List</h3>
        <div>
          <button
            class="primary"
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
                class="secondary"
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
