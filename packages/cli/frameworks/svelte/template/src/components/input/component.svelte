<script>
  export let control;
</script>

<div>
  <label for={control.id}>{control.label}</label>
  <input id={control.id} name={control.name} bind:value={control.value} />
</div>
