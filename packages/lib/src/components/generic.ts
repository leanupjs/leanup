export abstract class AbstractController {
  private doRender: Function = () => {
    throw new Error(`Render function is not defined.`);
  };
  private timeout: any;

  constructor(doRender?: Function) {
    if (typeof doRender === "function") {
      this.doRender = doRender;
    }
  }

  protected onUpdate(): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.doRender();
    }, 250);
  }
}

export interface GenericComponent {
  ctrl: AbstractController;
}
