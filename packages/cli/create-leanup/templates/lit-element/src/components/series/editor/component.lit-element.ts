import '../../input/component.lit-element';

import { customElement, html, property, TemplateResult } from 'lit-element';

import { LitElementComponent } from '../../component.lit-element';
import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';
import { InputControl } from '@leanup/form';

@customElement('editor-serie-component')
export class EditorSerieComponent extends LitElementComponent {
  public ctrl: EditorSerieController = new EditorSerieController({});

  @property({ attribute: true, type: Object })
  public editorForm!: EditorForm;

  public connectedCallback(): void {
    super.connectedCallback();
    setTimeout(() => {
      const inputs = this.querySelectorAll<Element & { control: InputControl }>('input-component');
      inputs[0].control = this.editorForm.getControl<InputControl>('title') as InputControl;
      inputs[1].control = this.editorForm.getControl<InputControl>('unit') as InputControl;
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
