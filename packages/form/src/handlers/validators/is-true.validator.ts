import { NonRequiredValidator } from './non-required.validator';

export class IsTrueValidator extends NonRequiredValidator {
  constructor(message: string = 'Please confirm the note.') {
    super(message);
  }

  public validate(value: any): boolean {
    return value === true;
  }
}
