import { customElement, html, property, TemplateResult } from 'lit-element';

import { InputControl } from '@leanup/form/controls/controls';

import { LitElementComponent } from '../component.lit-element';

@customElement('input-component')
export class InputComponent extends LitElementComponent {
  @property({ attribute: true, type: Object })
  public control!: InputControl;

  public render(): TemplateResult {
    return html`
      <div>
        ${this.control
          ? html` <label for="${this.control.id}">${this.control.label}</label>
              <input
                id=${this.control.id}
                name=${this.control.name}
                value=${typeof this.control.value === 'string' ? this.control.value : ''}
                @change=${(event: Event) => {
                  this.control.value = event.target === null ? '' : event.target.value;
                  this.update(new Map());
                }}
              />`
          : ''}
      </div>
    `;
  }
}
