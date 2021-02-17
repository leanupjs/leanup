<script>
import { beforeUpdate } from 'svelte';
import { EditSerieController } from './controller';
import EditorSerieComponent from '../editor/component.svelte';

export let resolvedRoute;

const ctrl = new EditSerieController();
ctrl.changeMeasuredSerie(parseInt(resolvedRoute.data?.id || '0'));
let editorForm = ctrl.editorForm;

beforeUpdate(() => {
  ctrl.changeMeasuredSerie(parseInt(resolvedRoute.data?.id || '0'));
  editorForm = ctrl.editorForm;
});
</script>

<form
  on:submit="{(event) => {
    event.preventDefault();
    event.stopPropagation();
    ctrl.onSubmit();
    editorForm = ctrl.editorForm;
  }}"
>
  <h2>Edit a existing measuring serie</h2>
  <EditorSerieComponent editorForm="{editorForm}" />
  <button class="primary" type="submit" id="submit">Edit</button>
  <button
    class="secondary"
    id="cancel"
    on:click="{(event) => {
      ctrl.onCancel();
    }}"
  >
    Abbrechen
  </button>
  <button
    class="danger"
    id="delete"
    type="button"
    on:click="{() => {
      ctrl.onDelete();
    }}"
  >
    Delete
  </button>
</form>
