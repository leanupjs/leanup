<script>
  import { beforeUpdate } from 'svelte';
  import { EditSerieController } from './controller';
  import EditorSerieComponent from '../editor/component.svelte';

  export let resolvedRoute;

  const ctrl = new EditSerieController(resolvedRoute.params.id);
  let editorForm = ctrl.editorForm;

  beforeUpdate(() => {
    ctrl.changeMeasuredSerie(resolvedRoute.params.id);
    editorForm = ctrl.editorForm;
  });
</script>

<form
  on:submit={event => {
    event.preventDefault();
    event.stopPropagation();
    ctrl.onSubmit();
    editorForm = ctrl.editorForm;
  }}>
  <h5>Edit a existing measuring serie</h5>
  <EditorSerieComponent {editorForm} />
  <button class="btn btn-primary" type="submit" id="submit">Edit</button>
  <button
    class="btn btn-secondary"
    id="cancel"
    on:click={event => {
      ctrl.onCancel();
    }}>
    Abbrechen
  </button>
  <button
    class="btn btn-danger"
    id="delete"
    type="button"
    on:click={() => {
      ctrl.onDelete();
    }}>
    Delete
  </button>
</form>
