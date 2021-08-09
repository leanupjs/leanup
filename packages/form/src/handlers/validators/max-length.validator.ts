import { NonRequiredValidator } from './non-required.validator';

export class MaxLengthValidator extends NonRequiredValidator {
  // --- Properties ---
  public maxLength: number;

  constructor(maxLength: number, message: string = `The entry must not be longer than ${maxLength} characters.`) {
    super(message);
    this.maxLength = maxLength;
  }

  public validate(value: any): boolean {
    return typeof value === 'string' && value.length <= this.maxLength;
  }
}
