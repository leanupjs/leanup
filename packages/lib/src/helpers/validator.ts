export class Validator {
  private constructor() {}

  public static isNumber(any: any): boolean {
    return isNaN(any) === false && typeof any === "number";
  }

  public static isArray(any: any, minLength = 0): boolean {
    return Array.isArray(any) && any.length >= minLength;
  }

  public static isObject(any: any): boolean {
    return (
      typeof any === "object" && any !== null && this.isArray(any) === false
    );
  }

  public static isString(any: any, minLength = 0): boolean {
    return typeof any === "string" && any.length >= minLength;
  }
}
