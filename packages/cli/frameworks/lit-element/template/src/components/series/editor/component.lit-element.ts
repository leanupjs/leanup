import '../../input/component.lit-element';

import { customElement, html, property, TemplateResult } from 'lit-element';

import { LitElementComponent } from '../../component.lit-element';
import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

@customElement('editor-serie-component')
export class EditorSerieComponent extends LitElementComponent {
  public ctrl: EditorSerieController = new EditorSerieController();

  @property({ attribute: true, type: Object })
  public editorForm!: EditorForm;

  public connectedCallback(): void {
    super.connectedCallback();
    setTimeout(() => {
      const inputs = this.querySelectorAll('input-component');
      inputs[0].control = this.editorForm.getControl('title');
      inputs[1].control = this.editorForm.getControl('unit');
    }, 50);
  }

  public render(): TemplateResult {
    return html`
      <div>
        <input-component></input-component>
        <input-component></input-component>
      </div>
    `;
  }
}
