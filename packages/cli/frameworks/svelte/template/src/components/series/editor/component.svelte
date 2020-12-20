<script>
import { EditorSerieController } from './controller';
import InputComponent from '../../input/component.svelte';

const ctrl = new EditorSerieController();
export let editorForm;
</script>

<div>
  <InputComponent control="{editorForm.getControl('title')}" />
  <InputComponent control="{editorForm.getControl('unit')}" />
</div>
