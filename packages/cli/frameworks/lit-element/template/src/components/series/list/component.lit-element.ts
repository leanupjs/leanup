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
          <table class="table-auto" key="{i}">
            <thead>
              <tr>
                <th class="w-1/8 border border-emerald-500">#</th>
                <th class="w-1/8 border border-emerald-500">ID</th>
                <th class="w-1/4 border border-emerald-500">Title</th>
                <th class="w-1/5 border border-emerald-500">Unit</th>
                <th class="w-1/5 border border-emerald-500">Action</th>
              </tr>
            </thead>
            <tbody>
              ${this.ctrl.measuredSeries.map((serie: MeasuredSerieModel, index: number) => {
                return html` <tr key="{index}">
                  <td class="text-center border border-emerald-500">${index + 1}</td>
                  <td class="text-center border border-emerald-500">${serie.getId()}</td>
                  <td class="text-center border border-emerald-500">${serie.getTitle()}</td>
                  <td class="text-center border border-emerald-500">${serie.getUnit()}</td>
                  <td class="text-center border border-emerald-500">
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
        <p>
          <button
            class="bg-green-700 hover:bg-green-500"
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
                class="bg-blue-700 hover:bg-blue-500"
                id="start"
                type="button"
                @click=${() => {
                  this.ctrl.onStart();
                }}
              >
                Performance
              </button>`
            : ''}
        </p>
        <br />
        ${tables}
        <br />
        <p>
          <small>Duration: ${this.ctrl.duration} ms</small>
        </p>
      </div>
    `;
  }
}
