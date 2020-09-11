import Navigo from 'navigo';

export const NAVIGO: Navigo = new Navigo(null, true);

export interface Route {
  component?: Object;
  template?: string;
  url: string;
}

export class RouterService {
  private static readonly subscribers: Function[] = [];

  private constructor() {}

  private static notify(route: Route, params: any, query: any): void {
    RouterService.subscribers.forEach((subscriber: Function) => {
      subscriber(route, params, query);
    });
  }

  public static register(routes: Route[]): void {
    routes.forEach((route: Route) => {
      NAVIGO.on(route.url, {
        as: route.url,
        uses: (params: any, query: any) => {
          RouterService.notify(route, params, query);
        },
      }).resolve();
    });
  }

  public static navigate(route: string, absolute = false): void {
    NAVIGO.navigate(route, absolute);
  }

  public static currect(): Object {
    return NAVIGO.lastRouteResolved();
  }

  public static subscribe(subscriber: Function): void {
    if (subscriber instanceof Function) {
      this.subscribers.push(subscriber);
    } else {
      throw new Error(`The subscriber is not a Function!`);
    }
  }

  public static unsubscribe(subscriber: Function): void {
    const index = this.subscribers.indexOf(subscriber);
    if (index >= 0) {
      this.subscribers.splice(index, 1);
    }
  }
}
