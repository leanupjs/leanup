import { VanillaComponent } from '../../component.vanilla';
import { ListSerieController } from './controller';
import { MeasuredSerieModel } from '../../../models/measured-series.model';

function render($ctrl: ListSerieController): string {
  let html = `<div>
  <h5>List</h5>
  <div>
    <button class="btn btn-success" id="add" type="button">
      Add
    </button>`;
  if ($ctrl.showPerformanceButton) {
    html += `<button class="btn btn-info" id="start" type="button" ng-if="$ctrl.showPerformanceButton">
      Performance
    </button>`;
  }
  html += `</div>`;
  for (let i = 0; i < $ctrl.elements.length; i++) {
    html += `<table class="table" key="${i}">
     <thead>
       <tr>
         <th scope="col">#</th>
         <th scope="col">ID</th>
         <th scope="col">Title</th>
         <th scope="col">Unit</th>
         <th scope="col">Action</th>
       </tr>
     </thead>
     <tbody>`;
    $ctrl.measuredSeries.forEach((serie: MeasuredSerieModel, index2: number) => {
      html += `<tr key="${index2}">
      <td>${index2 + 1}</td>
      <td>${serie.getId()}</td>
      <td>${serie.getTitle()}</td>
      <td>${serie.getUnit()}</td>
      <td>
        <button class="btn btn-info" id="edit-{{$index}}" type="button">
          Edit
        </button>
      </td>
    </tr>`;
    });
    html += `
     </tbody>
   </table>`;
  }
  html += `<small>Duration: ${$ctrl.duration} ms</small>
  </div>`;
  return html;
}

class ListSerieComponent extends VanillaComponent {
  private readonly $ctrl: ListSerieController = new ListSerieController();

  public constructor() {
    super();
    this.$ctrl.renderView = this.render.bind(this);
    // setInterval(() => {
    //   this.hackMe(this);
    // }, 10000);
  }

  public hackMe(component: ListSerieComponent): void {
    console.log(component);
  }

  protected render() {
    this.dom.innerHTML = render(this.$ctrl);
    this.dom.querySelector('#add').addEventListener('click', this.$ctrl.add.bind(this.$ctrl));
    this.dom.querySelector('#start').addEventListener('click', this.$ctrl.onStart.bind(this.$ctrl));
  }
}
customElements.define('wc-list-serie', ListSerieComponent);
