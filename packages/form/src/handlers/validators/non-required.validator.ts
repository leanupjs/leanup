import { AbstractValidator } from './abstract.validator';
import { DEFAULT_REQUIRED_VALIDATOR } from './required.validator';

export abstract class NonRequiredValidator extends AbstractValidator {
  public isValid(value: any): boolean {
    return DEFAULT_REQUIRED_VALIDATOR.isValid(value) === false || this.validate(value);
  }

  abstract validate(value: any): boolean;
}
