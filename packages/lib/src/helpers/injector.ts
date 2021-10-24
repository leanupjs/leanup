export type LazyLoader<T> = () => T;

type RegisterOptions = {
  lazy?: boolean;
};

export class Injector {
  private readonly services = new Map<string, LazyLoader<unknown> | unknown>();
  private readonly lazyLoaders = new Set<string>();

  public register<T>(
    identifier: string,
    lazyLoaderOrService: LazyLoader<T> | T,
    options: RegisterOptions = {
      lazy: false,
    }
  ): Injector {
    if (typeof identifier === 'string' && this.services.has(identifier) === false) {
      this.services.set(identifier, lazyLoaderOrService);
      if (options?.lazy === true) {
        this.lazyLoaders.add(identifier);
      }
      return this;
    } else {
      throw new Error(`The service '${identifier}' is allready registered!`);
    }
  }

  public get<T>(identifier: string): T {
    if (this.lazyLoaders.has(identifier)) {
      this.services.set(identifier, (<LazyLoader<T>>this.services.get(identifier))());
      this.lazyLoaders.delete(identifier);
    }
    if (typeof identifier === 'string' && this.services.has(identifier) === true) {
      return <T>this.services.get(identifier);
    } else {
      throw new Error(`The service '${identifier}' is not registered!`);
    }
  }
}

export const DI: Injector = new Injector();
