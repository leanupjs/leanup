export class VanillaComponent extends HTMLElement {
  protected readonly dom: HTMLElement | ShadowRoot;

  constructor() {
    super();
    this.dom = this;
    // this.attachShadow({ delegatesFocus: true, mode: 'open' });
    // this.dom = this.shadowRoot;
  }

  // tslint:disable-next-line: no-empty
  protected render() {}

  public connectedCallback() {
    this.render();
  }
}
