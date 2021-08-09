export interface ViewControllerCouple {
  hooks?: {
    doDistroy?: Function;
    doRender?: Function;
  };
}
