<template>
  <div>
    <h2>List</h2>
    <div>
      <button class="primary" id="add" type="button" @click="onAdd()">Add</button>
      <button class="secondary" id="start" type="button" v-if="showPerformanceButtonRef" @click="onStart()">
        Performance
      </button>
    </div>
    <table class="table" v-for="(element, index) in elementsRef" :key="index">
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
        <tr v-for="(serie, index) in measuredSeriesRef" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ serie.getId() }}</td>
          <td>{{ serie.getTitle() }}</td>
          <td>{{ serie.getUnit() }}</td>
          <td>
            <button :id="'edit-' + index" type="button" @click="onEdit(serie)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <small>Duration: {{ durationRef }} ms</small>
  </div>
</template>

<script>
import { ListSerieController } from './controller';
import CreateSerieComponent from '../create/component.vue';
import EditSerieComponent from '../edit/component.vue';
import { ref } from '@vue/composition-api';
import { MeasuredSerieModel } from '../../../models/measured-series.model';

export default {
  setup() {
    const $ctrl = new ListSerieController();
    const elementsRef = ref($ctrl.elements);
    const durationRef = ref($ctrl.duration);
    const measuredSerieRef = ref($ctrl.measuredSerie);
    const measuredSeriesRef = ref($ctrl.measuredSeries);
    const showPerformanceButtonRef = ref($ctrl.showPerformanceButton);
    const onAdd = () => {
      $ctrl.add();
    };
    const onEdit = (measuredSerie) => {
      $ctrl.edit(measuredSerie);
      measuredSerieRef.value = $ctrl.measuredSerie;
    };
    const onStart = () => {
      $ctrl.onStart();
    };

    $ctrl.renderView = () => {
      elementsRef.value = $ctrl.elements;
      durationRef.value = $ctrl.duration;
      showPerformanceButtonRef.value = $ctrl.showPerformanceButton;
    };

    return {
      elementsRef,
      durationRef,
      measuredSerieRef,
      measuredSeriesRef,
      showPerformanceButtonRef,
      onAdd,
      onStart,
      onEdit,
    };
  },
};
</script>
