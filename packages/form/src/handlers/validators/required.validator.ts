import { AbstractValidator } from './abstract.validator';

export class RequiredValidator extends AbstractValidator {
  constructor(message: string = 'Bitte tragen Sie einen Wert ein.') {
    super(message);
  }

  public isValid(value: any): boolean {
    return value !== undefined && value !== null && value.toString().length > 0;
  }
}

export const DEFAULT_REQUIRED_VALIDATOR: RequiredValidator = new RequiredValidator();
