import { PatternValidator } from './pattern.validator';

export const DIGITS_VALIDATION_REGEXP: RegExp = /^\d+$/;

export class DigitsValidator extends PatternValidator {
  constructor(message: string = 'Der Wert ist keine Zahl.') {
    super(DIGITS_VALIDATION_REGEXP, message);
  }
}

export const DEFAULT_DIGITS_VALIDATOR = new DigitsValidator();
