import { NonRequiredValidator } from './non-required.validator';

export class IsTrueValidator extends NonRequiredValidator {
  constructor(message: string = 'Bitte bestätigen Sie.') {
    super(message);
  }

  public validate(value: any): boolean {
    return value === true;
  }
}
