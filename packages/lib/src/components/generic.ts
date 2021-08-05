export interface ViewControllerCouple {
  hooks: {
    doRender: Function;
  };
}

export abstract class AbstractController {
  protected readonly couple: ViewControllerCouple;
  private doRenderTimeout: NodeJS.Timeout;

  public constructor(couple: ViewControllerCouple) {
    this.couple = couple;
  }

  protected doRender(): void {
    if (typeof this.couple?.hooks?.doRender === 'function') {
      clearTimeout(this.doRenderTimeout);
      this.doRenderTimeout = setTimeout(() => {
        this.couple?.hooks?.doRender();
      }, 50);
    }
  }
}

export interface GenericComponent {
  ctrl: AbstractController;
}
