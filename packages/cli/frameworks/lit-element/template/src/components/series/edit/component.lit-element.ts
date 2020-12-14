import '../editor/component.lit-element';

import { customElement, html, property, TemplateResult } from 'lit-element';

import { ResolvedRoute } from '../../app/controller';
import { LitElementComponent } from '../../component.lit-element';
import { EditSerieController } from './controller';

@customElement('edit-serie-component')
export class EditSerieComponent extends LitElementComponent {
  public ctrl: EditSerieController = new EditSerieController(0);

  @property({ attribute: true, type: Object })
  public resolvedRoute: ResolvedRoute;

  public connectedCallback(): void {
    super.connectedCallback();
    this.ctrl = new EditSerieController(this.resolvedRoute.params.id);
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
        <h5>Edit a existing measuring serie</h5>
        <editor-serie-component></editor-serie-component>
        <button class="btn btn-primary" type="submit" id="submit">Edit</button>
        <button
          class="btn btn-secondary"
          type="reset"
          id="cancel"
          @click=${() => {
            this.ctrl.onCancel();
          }}
        >
          Abbrechen
        </button>
        <button
          class="btn btn-danger"
          id="delete"
          type="button"
          @click=${() => {
            this.ctrl.onDelete();
          }}
        >
          Delete
        </button>
      </form>
    `;
  }
}
