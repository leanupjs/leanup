import { Component } from 'preact';

export abstract class PreactComponent<P, S> extends Component<P, S> {
  protected $ctrl: any = null;

  constructor(props: any, $ctrl: Object = null) {
    super(props);
    this.bindControllerLogic($ctrl, props);
  }

  private bindControllerLogic($ctrl: Object, props: Object = {}) {
    if (typeof $ctrl === 'object' && $ctrl !== null) {
      try {
        $ctrl.onUpdate = () => {
          this.forceUpdate();
        };
        this.$ctrl = $ctrl;
        // tslint:disable-next-line: no-empty
      } catch (error) {}
    }
  }
}
