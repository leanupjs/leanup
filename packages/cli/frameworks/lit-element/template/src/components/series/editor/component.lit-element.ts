import { customElement, html, property, TemplateResult } from 'lit-element';

import { LitElementComponent } from '../../component.lit-element';
import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

@customElement('editor-serie-component')
export class EditorSerieComponent extends LitElementComponent {
  public ctrl: EditorSerieController = new EditorSerieController();

  @property({ attribute: true, type: Object })
  public editorForm: EditorForm;

  public render(): TemplateResult {
    return html`
      <div>
        <InputComponent control=${JSON.stringify(this.editorForm.getControl('title') as InputControl)} />
        <InputComponent control=${JSON.stringify(this.editorForm.getControl('unit') as InputControl)} />
      </div>
    `;
  }
}
