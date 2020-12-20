<script>
import { CreateSerieController } from './controller';
import EditorSerieComponent from '../editor/component.svelte';

const ctrl = new CreateSerieController();
let editorForm = ctrl.editorForm;
</script>

<form
  on:submit="{(event) => {
    event.preventDefault();
    event.stopPropagation();
    ctrl.onSubmit();
    editorForm = ctrl.editorForm;
  }}"
>
  <h2>Create a new measuring serie</h2>
  <EditorSerieComponent editorForm="{editorForm}" />
  <button class="primary" type="submit" id="submit">Add</button>
  <button
    class="secondary"
    id="cancel"
    on:click="{(event) => {
      ctrl.onCancel();
    }}"
  >
    Abbrechen
  </button>
</form>
