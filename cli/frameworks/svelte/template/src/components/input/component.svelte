<script>
  export let control;
</script>

<div class="form-group">
  <label for={control.id}>{control.label}</label>
  <input class="form-control" id={control.id} name={control.name} bind:value={control.value} />
</div>
