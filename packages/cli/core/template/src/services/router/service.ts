import Navigo from 'navigo';

export const NAVIGO: Navigo = new Navigo('/', {
  hash: true,
});

export interface Route {
  component?: Object;
  template?: string;
  url: string;
}

export class RouterService {
  private static readonly subscribers: Function[] = [];

  private constructor() {}

  private static notify(
    route: Route,
    data: {
      [key: string]: string;
    } | null
  ): void {
    RouterService.subscribers.forEach((subscriber: Function) => {
      subscriber(route, data);
    });
  }

  public static register(routes: Route[]): void {
    routes.forEach((route: Route) => {
      NAVIGO.on(route.url, ({ data }) => {
        RouterService.notify(route, data);
      });
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    NAVIGO.resolve();
  }

  public static navigate(route: string): void {
    NAVIGO.navigate(route);
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
