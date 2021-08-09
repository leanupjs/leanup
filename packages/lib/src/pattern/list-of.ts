import { Log } from '../helpers/log';

function isInstanceOf(instancesOf: any[], item: any): boolean {
  if (Array.isArray(instancesOf)) {
    return (
      instancesOf.find((instanceOf: any): boolean => {
        return item instanceof instanceOf;
      }) !== undefined
    );
  }
  return false;
}

function normalizeSetOfItems(items: unknown | unknown[] | SetOf<unknown>): unknown[] {
  return <unknown[]>(items instanceof SetOf ? items.get() : Array.isArray(items) ? items : [items]);
}

export class SetOf<T> {
  private instancesOf: Array<T | Function | Object>;
  private items: Set<T> = new Set();
  private protectedItems: Set<T> = new Set();

  constructor(instancesOf: T | Function | Object | Array<T | Function | Object>) {
    this.instancesOf = <Array<T | Function | Object>>(Array.isArray(instancesOf) ? instancesOf : [instancesOf]);
  }

  get empty(): boolean {
    return this.items.size === 0;
  }

  get first(): T | null {
    if (this.items.size > 0) {
      return Array.from(this.items)[0];
    } else {
      return null;
    }
  }

  public forEach(action: Function | any): void {
    this.items.forEach(action);
  }

  public filter(action: Function | any): T[] {
    return Array.from(this.items).filter(action);
  }

  public find(action: Function | any): T {
    return Array.from(this.items).find(action);
  }

  get last(): any {
    if (this.items.size > 0) {
      return Array.from(this.items)[this.items.size - 1];
    } else {
      return null;
    }
  }

  get length(): number {
    Log.debug(`The attribute ListOf.length is deprecated - please use ListOf.size instead.`);
    return this.size;
  }

  get size(): number {
    return this.items.size;
  }

  public add(items: T | T[] | SetOf<T>, protect = false): boolean {
    return (
      normalizeSetOfItems(items).filter((item: T): boolean => {
        let changed = false;
        if (this.contains(item) === false) {
          if (isInstanceOf(this.instancesOf, item)) {
            if (protect) {
              this.protectedItems.add(item);
            }
            this.items.add(item);
            changed = true;
          } else {
            Log.debug(`The item does not have a valid instance type.`, this);
          }
        } else {
          Log.debug(`The item is already in the list.`, this);
        }
        return changed;
      }).length > 0
    );
  }

  public remove(items: T | T[] | SetOf<T>): boolean {
    Log.debug(`The method ListOf.remove() is deprecated - please use ListOf.delete() instead.`);
    return this.delete(items);
  }

  public delete(items: T | T[] | SetOf<T>): boolean {
    return (
      normalizeSetOfItems(items).filter((item: any): boolean => {
        let changed = false;
        if (this.protectedItems.has(item) === false) {
          if (this.items.has(item)) {
            this.items.delete(item);
            changed = true;
          } else {
            Log.debug(`The item is not in the list.`, this);
          }
        } else {
          Log.debug(`The item is protected and cannot be removed.`, this);
        }
        return changed;
      }).length > 0
    );
  }

  public set(items: T | T[] | SetOf<T>, protect = false): any | boolean {
    const cleared: boolean = this.clear();
    const added: boolean = this.add(items, protect);
    return cleared || added;
  }

  public get(length?: number): T[] {
    return isNaN(length) === false && typeof length === 'number'
      ? Array.from(this.items).slice(0, length)
      : Array.from(this.items);
  }

  public clear(): boolean {
    const size: number = this.items.size;
    this.items.forEach((item: T) => {
      if (this.protectedItems.has(item) === false) {
        this.items.delete(item);
      }
    });
    return size !== this.items.size;
  }

  public contains(item: T): boolean {
    Log.debug(`The method ListOf.contains() is deprecated - please use ListOf.has() instead.`);
    return this.items.has(item);
  }

  public has(item: T): boolean {
    return this.items.has(item);
  }
}
