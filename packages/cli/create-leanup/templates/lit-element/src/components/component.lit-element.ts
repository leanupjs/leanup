import { LitElement } from 'lit-element';

export class LitElementComponent extends LitElement {
  public createRenderRoot(): LitElementComponent {
    return this;
  }
}
