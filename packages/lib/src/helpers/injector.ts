export class Injector {
  private readonly services: Map<string, unknown> = new Map<string, unknown>();

  public register<T>(identifier: string, service: T): Injector {
    if (
      typeof identifier === "string" &&
      this.services.has(identifier) === false
    ) {
      this.services.set(identifier, service);
      return this;
    } else {
      throw new Error(`The service '${identifier}' is allready registered!`);
    }
  }

  public get<T>(identifier: string): T {
    if (
      typeof identifier === "string" &&
      this.services.has(identifier) === true
    ) {
      return <T>this.services.get(identifier);
    } else {
      throw new Error(`The service '${identifier}' is not registered!`);
    }
  }
}

export const DI: Injector = new Injector();
