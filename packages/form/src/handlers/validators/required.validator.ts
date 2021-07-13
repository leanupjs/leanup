import { AbstractValidator } from './abstract.validator';

export class RequiredValidator extends AbstractValidator {
  constructor(message: string = 'Please enter a value.') {
    super(message);
  }

  public valid(value: any): boolean {
    return value !== undefined && value !== null && value.toString().length > 0;
  }
}

export const DEFAULT_REQUIRED_VALIDATOR: RequiredValidator = new RequiredValidator();
