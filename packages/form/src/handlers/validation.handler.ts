import { ListOf } from '@leanup/lib/pattern/list-of';

import { AbstractValidator } from './validators/abstract.validator';

export class ValidationHandler {
  public readonly validators: ListOf<AbstractValidator> = new ListOf(AbstractValidator);

  public validate(value: unknown, fast = false): string[] {
    const errors: string[] = [];
    try {
      this.validators.forEach((validator: AbstractValidator) => {
        if (validator.isValid(value) === false) {
          errors.push(validator.message);
          if (fast === true) {
            throw new Error(`Only one error is enough. Be quick and stop the execution of other validation functions.`);
          }
        }
      });
    } catch (error) {
      // be fast
    }
    return errors;
  }
}
