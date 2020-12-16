<template>
  <div class="my-app">
    <div class="grid grid-cols-3 items-center">
      <a href="https://v3.vuejs.org/" target="vuejs" class="text-center">
        <img src="{{IMG_FRAMEWORK as string}}" alt="Vue Framework" class="m-auto w-24" />
      </a>
      <div class="text-center text-5xl text-gray-400 font-extrabold">+</div>
      <a href="https://leanupjs.org" target="leanupjs" class="text-center">
        <img src="{{IMG_LEANUP as string}}" alt="Leanup Stack" class="m-auto w-24" />
      </a>
    </div>
    <h1>{{ framework.name }} v{{ framework.version }}</h1>
    <small>{{ finishedRendering }} ms upcomming time</small>
    <list-serie v-if="resolvedRouteRef.url === 'series'"></list-serie>
    <create-serie v-if="resolvedRouteRef.url === 'series/create'"></create-serie>
    <edit-serie v-if="resolvedRouteRef.url === 'series/:id/edit'" :resolvedRoute="resolvedRouteRef"></edit-serie>
    <small>Used filters: {{ date(dummies.date) }} | {{ currency(dummies.price) }} €</small><br />
    <small>Build with {{ cli.name }} v{{ cli.version }}</small>
  </div>
</template>

<script>
import { AppController } from './controller';
import { RouterService } from '../../services/router/service';
import InputComponent from '../input/component.vue';
import ListSerieComponent from '../series/list/component.vue';
import CreateSerieComponent from '../series/create/component.vue';
import EditSerieComponent from '../series/edit/component.vue';
import { currency, date } from '@leanup/lib/shares/filters';
import { ref } from 'vue';
import IMG_LEANUP from '../../assets/logo.leanupjs.png';
import IMG_FRAMEWORK from '../../assets/logo.vue.png';

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
      cli: $ctrl.cli,
      resolvedRouteRef,
    };
  },
};
</script>
