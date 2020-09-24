<template>
  <div>
    <app-input :control="props.editorForm.getControl('title')"></app-input>
    <app-input :control="props.editorForm.getControl('unit')"></app-input>
  </div>
</template>

<script>
import InputComponent from '../../input/component.vue';

export default {
  props: ['editor-form'],
  components: {
    'app-input': InputComponent
  },
  setup(props) {
    // const $ctrl = new EditorSerieController();
    return {
      props
    };
  }
};
</script>
