<template>
  <form @submit="onSubmit">
    <h2>Edit a existing measuring serie</h2>
    <editor-serie v-if="editorFormRef !== null" :editor-form="editorFormRef"></editor-serie>
    <button class="primary" type="submit" id="submit">Edit</button>
    <button class="secondary" type="reset" id="cancel" @click="onCancel">Abbrechen</button>
    <button class="danger" type="button" id="delete" @click="onDelete">Delete</button>
  </form>
</template>

<script>
import { EditSerieController } from './controller';
import EditorSerieComponent from '../editor/component.vue';
import { ref, watchEffect } from '@vue/composition-api';

export default {
  props: ['resolvedRoute'],
  components: {
    'editor-serie': EditorSerieComponent,
  },
  setup(props) {
    const $ctrl = new EditSerieController();
    $ctrl.changeMeasuredSerie(parseInt(props.resolvedRoute.data?.id || '0'));
    const editorFormRef = ref(null);

    watchEffect(() => {
      editorFormRef.value = $ctrl.editorForm;
    });

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
