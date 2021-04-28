import { Validator } from '@leanup/lib/helpers/validator';

import { NonRequiredValidator } from './non-required.validator';

export class MinLengthValidator extends NonRequiredValidator {
  // --- Properties ---
  public minLength: number;

  constructor(minLength: number, message: string = `Die Eingabe darf nicht kürzer als ${minLength} Zeichen sein.`) {
    super(message);
    this.minLength = minLength;
  }

  public validate(value: any): boolean {
    return Validator.isString(value) && value.length >= this.minLength;
  }
}
