import { Validator } from '@leanup/lib/helpers/validator';

import { NonRequiredValidator } from './non-required.validator';

export class MinLengthValidator extends NonRequiredValidator {
  // --- Properties ---
  public minLength: number;

  constructor(minLength: number, message: string = `The entry must not be shorter than ${minLength} characters.`) {
    super(message);
    this.minLength = minLength;
  }

  public validate(value: any): boolean {
    return Validator.isString(value) && value.length >= this.minLength;
  }
}
