import { ViewControllerCouple } from './interfaces';

export abstract class AbstractController {
  private doRenderTimeout: NodeJS.Timeout;
  protected readonly couple: ViewControllerCouple;

  public constructor(couple: ViewControllerCouple) {
    this.couple = couple;
  }

  protected doDistroy(): void {
    if (typeof this.couple?.hooks?.doDistroy === 'function') {
      this.couple?.hooks?.doDistroy();
    }
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
