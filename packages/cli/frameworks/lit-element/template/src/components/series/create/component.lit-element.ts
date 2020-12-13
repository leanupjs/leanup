import '../editor/component.lit-element';

import { customElement, html, TemplateResult } from 'lit-element';

import { LitElementComponent } from '../../component.lit-element';
import { CreateSerieController } from './controller';

@customElement('create-serie-component')
export class CreateSerieComponent extends LitElementComponent {
  public ctrl: CreateSerieController = new CreateSerieController();

  public render(): TemplateResult {
    // <editor-serie-component editorForm=${JSON.stringify(this.ctrl.editorForm)} />
    return html`
      <form
        @submit=${(event: Event) => {
          event.preventDefault();
          event.stopPropagation();
          this.ctrl.onSubmit();
        }}
      >
        <h5>Create a new measuring serie</h5>
        <button class="btn btn-primary" type="submit" id="submit">Add</button>
        <button
          class="btn"
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
