import { VanillaComponent } from '../../component.vanilla';
import { CreateSerieController } from './controller';

function render(): string {
  return `<form submit.delegate="onSubmit()">
    <h2>Create a new measuring serie</h2>
    <editor-serie editor-form.bind="editorForm"></editor-serie>
    <button class="primary" type="submit" id="submit">Add</button>
    <button class="secondary" type="reset" id="cancel" click.delegate="onCancel()">
      Abbrechen
    </button>
  </form>`;
}

class CreateSerieComponent extends VanillaComponent {
  public readonly $ctrl: CreateSerieController = new CreateSerieController();

  protected render() {
    this.dom.innerHTML = render();
    this.dom.querySelector('form').addEventListener('submit', this.$ctrl.onSubmit.bind(this.$ctrl));
    this.dom.querySelector('form').addEventListener('reset', this.$ctrl.onCancel.bind(this.$ctrl));
  }
}
customElements.define('wc-create-serie', CreateSerieComponent);
