import { Validator } from '@leanup/lib/helpers/validator';

import { NonRequiredValidator } from './non-required.validator';

export class MaxLengthValidator extends NonRequiredValidator {
  // --- Properties ---
  public maxLength: number;

  constructor(maxLength: number, message: string = `Die Eingabe darf nicht länger als ${maxLength} Zeichen sein.`) {
    super(message);
    this.maxLength = maxLength;
  }

  public validate(value: any): boolean {
    return Validator.isString(value) && value.length <= this.maxLength;
  }
}
