import '../editor/component.lit-element';

import { customElement, html, TemplateResult } from 'lit-element';

import { LitElementComponent } from '../../component.lit-element';
import { CreateSerieController } from './controller';

@customElement('create-serie-component')
export class CreateSerieComponent extends LitElementComponent {
  public ctrl: CreateSerieController = new CreateSerieController();

  public connectedCallback(): void {
    super.connectedCallback();
    setTimeout(() => {
      this.querySelector('editor-serie-component').editorForm = this.ctrl.editorForm;
    }, 0);
  }

  public render(): TemplateResult {
    return html`
      <form
        @submit=${(event: Event) => {
          event.preventDefault();
          event.stopPropagation();
          this.ctrl.onSubmit();
        }}
      >
        <h5>Create a new measuring serie</h5>
        <editor-serie-component></editor-serie-component>
        <button class="primary" type="submit" id="submit">Add</button>
        <button
          class="secondary"
          type="reset"
          id="cancel"
          @click=${() => {
            this.ctrl.onCancel();
          }}
        >
          Abbrechen
        </button>
      </form>
    `;
  }
}
