<template>
  <div>
    <label :for="props.control.id">{{ props.control.label }}</label>
    <input :id="props.control.id" :name="props.control.name" v-model="props.control.value" />
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  props: ['control'],
  setup(props) {
    return {
      props,
    };
  },
};
</script>
