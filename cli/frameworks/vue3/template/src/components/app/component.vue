<template>
  <div id="app">
    <h4>{{ framework.name }} v{{ framework.version }}</h4>
    <small>{{ finishedRendering }} ms upcomming time</small>
    <list-serie v-if="resolvedRouteRef.url === 'series'"></list-serie>
    <create-serie v-if="resolvedRouteRef.url === 'series/create'"></create-serie>
    <edit-serie v-if="resolvedRouteRef.url === 'series/:id/edit'" :resolvedRoute="resolvedRouteRef"></edit-serie>
    <small>Used filters: {{ date(dummies.date) }} | {{ currency(dummies.price) }} €</small>
  </div>
</template>

<script>
import { AppController } from './controller';
import { RouterService } from '../../services/router/service';
import InputComponent from '../input/component.vue';
import ListSerieComponent from '../series/list/component.vue';
import CreateSerieComponent from '../series/create/component.vue';
import EditSerieComponent from '../series/edit/component.vue';
import { currency, date } from '@leanup/features/filters';
import { ref } from 'vue';

export default {
  components: {
    'app-input': InputComponent,
    'list-serie': ListSerieComponent,
    'create-serie': CreateSerieComponent,
    'edit-serie': EditSerieComponent,
  },
  setup() {
    const $ctrl = new AppController();
    const resolvedRouteRef = ref({
      url: 'series',
    });
    RouterService.subscribe((route, params, query) => {
      resolvedRouteRef.value = {
        params,
        query,
        url: route.url,
      };
    });
    return {
      finishedRendering: $ctrl.finishedRendering,
      dummies: $ctrl.dummies,
      currency,
      date,
      framework: $ctrl.framework,
      resolvedRouteRef,
    };
  },
};
</script>
