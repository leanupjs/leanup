import '../editor/component.lit-element';

import { customElement, html, property, TemplateResult } from 'lit-element';

import { ResolvedRoute } from '../../app/controller';
import { LitElementComponent } from '../../component.lit-element';
import { EditSerieController } from './controller';

@customElement('edit-serie-component')
export class EditSerieComponent extends LitElementComponent {
  public ctrl: EditSerieController = new EditSerieController();

  @property({ attribute: true, type: Object })
  public resolvedRoute!: ResolvedRoute;

  public connectedCallback(): void {
    super.connectedCallback();
    this.ctrl.changeMeasuredSerie(parseInt(this.resolvedRoute.data?.id || '0'));
    setTimeout(() => {
      this.querySelector('editor-serie-component').editorForm = this.ctrl.editorForm;
    }, 50);
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
        <h2>Edit a existing measuring serie</h2>
        <editor-serie-component></editor-serie-component>
        <button class="primary" type="submit" id="submit">Edit</button>
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
        <button
          class="danger"
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
