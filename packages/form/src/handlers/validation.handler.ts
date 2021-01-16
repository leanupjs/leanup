import { ListOf } from '@leanup/lib/pattern/list-of';

export class ValidationHandler {
  public readonly validators: ListOf<Function> = new ListOf(Function);

  public validate(value: unknown, fast = false): Error[] {
    const errors: Error[] = [];
    try {
      this.validators.forEach((validator: Function) => {
        try {
          validator(value);
        } catch (error) {
          errors.push(error);
          if (fast === true) {
            throw new Error('Be quick and stop the execution of other validation functions. Only one error is enough.');
          }
        }
      });
    } catch (error) {}
    return errors;
  }
}
