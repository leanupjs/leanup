import { SetOf } from '@leanup/lib';

import { AbstractValidator } from './validators/abstract.validator';

export class ValidationHandler extends SetOf<AbstractValidator> {
  public readonly validators: SetOf<AbstractValidator> = this;

  public constructor() {
    super(AbstractValidator);
    this.validators = this;
  }

  public validate(value: unknown, fast = false): string[] {
    const errors: string[] = [];
    try {
      this.validators.forEach((validator: AbstractValidator) => {
        if (validator.valid(value) === false) {
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
