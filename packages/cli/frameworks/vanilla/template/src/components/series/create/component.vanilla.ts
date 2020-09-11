import { VanillaComponent } from '../../component.vanilla';
import { CreateSerieController } from './controller';

function render(component: CreateSerieComponent): string {
  return `<form submit.delegate="onSubmit()">
    <h5>Create a new measuring serie</h5>
    <editor-serie editor-form.bind="editorForm"></editor-serie>
    <button class="btn btn-primary" type="submit" id="submit">Add</button>
    <button class="btn secondary" type="reset" id="cancel" click.delegate="onCancel()">
      Abbrechen
    </button>
  </form>`;
}

class CreateSerieComponent extends VanillaComponent {
  public readonly $ctrl: CreateSerieController = new CreateSerieController();

  protected render() {
    this.dom.innerHTML = render(this);
    this.dom.querySelector('form').addEventListener('submit', this.$ctrl.onSubmit.bind(this.$ctrl));
    this.dom.querySelector('form').addEventListener('reset', this.$ctrl.onCancel.bind(this.$ctrl));
  }
}
customElements.define('wc-create-serie', CreateSerieComponent);
