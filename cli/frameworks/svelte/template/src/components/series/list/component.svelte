<script>
  import { ListSerieController } from './controller';
  import CreateSerieComponent from '../create/component.svelte';
  import EditSerieComponent from '../edit/component.svelte';
  const ctrl = new ListSerieController();
  let elementsRef = ctrl.elements;
  let durationRef = ctrl.duration;
  let measuredSeriesRef = ctrl.measuredSeries;
  let measuredSerieRef = ctrl.measuredSerie;
  let showPerformanceButtonRef = ctrl.showPerformanceButton;
  ctrl.renderView = () => {
    measuredSeriesRef = ctrl.measuredSeries;
    elementsRef = ctrl.elements;
    durationRef = ctrl.duration;
    showPerformanceButtonRef = ctrl.showPerformanceButton;
  };
</script>

<div>
  <h5>List</h5>
  <div>
    <button
      class="btn btn-success"
      id="add"
      type="button"
      on:click={() => {
        ctrl.add();
      }}>
      Add
    </button>
    {#if showPerformanceButtonRef}
      <button
        class="btn btn-info"
        id="start"
        type="button"
        on:click={() => {
          ctrl.onStart();
        }}>
        Performance
      </button>
    {/if}
  </div>
  {#each elementsRef as serie, index (index)}
    <table class="table">
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
        {#each measuredSeriesRef as serie, index (index)}
          <tr>
            <td>{index + 1}</td>
            <td>{serie.getId()}</td>
            <td>{serie.getTitle()}</td>
            <td>{serie.getUnit()}</td>
            <td>
              <button
                class="btn btn-info"
                id="edit-{index}"
                type="button"
                on:click={() => {
                  ctrl.edit(serie);
                  measuredSerieRef = ctrl.measuredSerie;
                }}>
                Edit
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/each}
  <small>Duration: {durationRef} ms</small>
</div>
