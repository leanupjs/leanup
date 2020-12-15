import { customElement, html, property, TemplateResult } from 'lit-element';

import { InputControl } from '@leanup/form/controls/controls';

import { LitElementComponent } from '../component.lit-element';

@customElement('input-component')
export class InputComponent extends LitElementComponent {
  @property({ attribute: true, type: Object })
  public control: InputControl;

  public render(): TemplateResult {
    return html`
      <div class="p-2">
        ${this.control
          ? html`<label htmlFor="${this.control.id}" class="font-semibold w-full">${this.control.label}</label>
              <input
                class="border border-blue p-2 rounded-md"
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
