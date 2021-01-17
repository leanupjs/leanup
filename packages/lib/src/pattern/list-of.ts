import { Log } from '../helpers/log';
import { Validator } from '../helpers/validator';

function isInstanceOf(instancesOf: any[], item: any): boolean {
  if (Validator.isArray(instancesOf)) {
    return (
      instancesOf.find((instanceOf: any): boolean => {
        return item instanceof instanceOf;
      }) !== undefined
    );
  }
  return false;
}

function normalizeListOfItems(items: unknown | unknown[] | ListOf<unknown>): unknown[] {
  return <unknown[]>(items instanceof ListOf ? items.get() : Array.isArray(items) ? items : [items]);
}

export class ListOf<T> {
  private _instancesOf: unknown[] = [];
  private _items: T[] = [];
  private _protectedItems: unknown[] = [];

  constructor(instancesOf: unknown | unknown[]) {
    this._instancesOf = <unknown[]>(Array.isArray(instancesOf) ? instancesOf : [instancesOf]);
  }

  get empty(): boolean {
    return this._items.length === 0;
  }

  get first(): T | null {
    if (this._items.length > 0) {
      return this._items[0];
    } else {
      return null;
    }
  }

  public forEach(action: Function | any): void {
    this._items.forEach(action);
  }

  public filter(action: Function | any): T[] {
    return this._items.filter(action);
  }

  public find(action: Function | any): T {
    return this._items.find(action);
  }

  get last(): any {
    if (this._items.length > 0) {
      return this._items[this._items.length - 1];
    } else {
      return null;
    }
  }

  get length(): number {
    return this._items.length;
  }

  public add(items: T | T[] | ListOf<T>, protect = false): boolean {
    return (
      normalizeListOfItems(items).filter((item: T): boolean => {
        let changed = false;
        if (this.contains(item) === false) {
          if (isInstanceOf(this._instancesOf, item)) {
            if (protect) {
              this._protectedItems.push(item);
            }
            this._items.push(item);
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

  public remove(items: T | T[] | ListOf<T>): boolean {
    return (
      normalizeListOfItems(items).filter((item: any): boolean => {
        let changed = false;
        let index: number = this._protectedItems.indexOf(item);
        if (index === -1) {
          index = this._items.indexOf(item);
          if (index >= 0) {
            this._items.splice(index, 1);
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

  public set(items: T | T[] | ListOf<T>, protect = false): any | boolean {
    const cleared: boolean = this.clear();
    const added: boolean = this.add(items, protect);
    return cleared || added;
  }

  public get(length?: number): T[] {
    return isNaN(length) === false && typeof length === 'number' ? this._items.slice(0, length) : this._items;
  }

  public clear(): boolean {
    const length: number = this._items.length;
    this._items = this._items.filter((item: T): boolean => {
      return this._protectedItems.indexOf(item) >= 0;
    });
    return length !== this._items.length;
  }

  public contains(item: T): boolean {
    return this._items.indexOf(item) > -1;
  }
}
