<template>
  <form @submit="onSubmit">
    <h2>Create a new measuring serie</h2>
    <editor-serie :editor-form="editorFormRef"></editor-serie>
    <button class="primary" type="submit" id="submit">Add</button>
    <button class="secondary" type="reset" id="cancel" @click="onCancel">Abbrechen</button>
  </form>
</template>

<script>
import { CreateSerieController } from './controller';
import EditorSerieComponent from '../editor/component.vue';
import { ref } from '@vue/composition-api';

export default {
  components: {
    'editor-serie': EditorSerieComponent,
  },
  setup() {
    const $ctrl = new CreateSerieController();
    const editorFormRef = ref($ctrl.editorForm);

    const onCancel = (event) => {
      $ctrl.onCancel();
    };
    const onSubmit = (event) => {
      event.preventDefault();
      event.stopPropagation();
      $ctrl.onSubmit();
      editorFormRef.value = $ctrl.editorForm;
    };

    return {
      editorFormRef,
      onCancel,
      onSubmit,
    };
  },
};
</script>
