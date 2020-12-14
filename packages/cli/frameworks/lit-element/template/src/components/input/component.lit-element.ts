import { customElement, html, property, TemplateResult } from 'lit-element';

import { InputControl } from '@leanup/form/controls/controls';

import { LitElementComponent } from '../component.lit-element';

@customElement('input-component')
export class InputComponent extends LitElementComponent {
  @property({ attribute: true, type: Object })
  public control: InputControl;

  public render(): TemplateResult {
    return html`
      <div class="form-group">
        ${this.control
          ? html`<label htmlFor="${this.control.id}">${this.control.label}</label>
              <input
                class="form-control"
                id=${this.control.id}
                name=${this.control.name}
                value=${this.control.value as string}
                @change=${(event: Event) => {
                  this.control.value = event.target === null ? '' : event.target.value;
                  this.update();
                }}
              />`
          : ''}
      </div>
    `;
  }
}
