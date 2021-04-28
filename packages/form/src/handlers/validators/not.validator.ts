import { AbstractValidator } from './abstract.validator';
import { NonRequiredValidator } from './non-required.validator';

export class NotValidator extends NonRequiredValidator {
  // --- Properties ---
  public validator: AbstractValidator;

  constructor(validator: AbstractValidator, message: string) {
    super(message);
    this.validator = validator;
  }

  public validate(value: any): boolean {
    return this.validator.isValid(value) === false;
  }
}
