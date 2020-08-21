<template>
  <form @submit="onSubmit">
    <h5>Edit a existing measuring serie</h5>
    <editor-serie v-if="editorFormRef !== null" :editor-form="editorFormRef"></editor-serie>
    <button class="btn btn-primary" type="submit" id="submit">Edit</button>
    <button class="btn btn-secondary" type="reset" id="cancel" @click="onCancel">Abbrechen</button>
    <button class="btn btn-danger" type="button" id="delete" @click="onDelete">Delete</button>
  </form>
</template>

<script>
import { EditSerieController } from './controller';
import EditorSerieComponent from '../editor/component.vue';
import { ref, watch } from 'vue';

export default {
  props: ['resolvedRoute'],
  components: {
    'editor-serie': EditorSerieComponent,
  },
  setup(props) {
    const $ctrl = new EditSerieController(props.resolvedRoute.params.id);
    const editorFormRef = ref(null);

    watch(
      // this function is required for the following function
      () => {
        return props.resolvedRoute;
      },
      // get the return value of the previous function
      (resolvedRoute) => {
        $ctrl.changeMeasuredSerie(resolvedRoute.params.id);
        editorFormRef.value = $ctrl.editorForm;
      }
    );

    const onCancel = (event) => {
      $ctrl.onCancel();
    };
    const onDelete = () => {
      $ctrl.onDelete();
    };
    const onSubmit = (event) => {
      event.preventDefault();
      event.stopPropagation();
      $ctrl.editorForm = editorFormRef.value;
      $ctrl.onSubmit();
    };

    return {
      $ctrl,
      editorFormRef,
      onCancel,
      onDelete,
      onSubmit,
    };
  },
};
</script>
