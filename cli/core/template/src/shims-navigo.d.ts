declare module 'navigo' {
  interface NavigoOn {
    resolve: Function;
  }

  class Navigo {
    public constructor(root: unknown, hash: boolean);
    public on(...args: unknown[]): NavigoOn;
    public navigate(...args: unknown[]): any;
    public lastRouteResolved(...args: unknown[]): Object;
  }
  export default Navigo;
}
