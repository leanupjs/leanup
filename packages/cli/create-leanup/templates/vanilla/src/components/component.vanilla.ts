export class VanillaComponent extends HTMLElement {
  protected readonly dom: HTMLElement | ShadowRoot;

  public constructor() {
    super();
    this.dom = this;
    // this.attachShadow({ delegatesFocus: true, mode: 'open' });
    // this.dom = this.shadowRoot;
  }

  // tslint:disable-next-line: no-empty
  protected render(): void {}

  public connectedCallback(): void {
    this.render();
  }
}
