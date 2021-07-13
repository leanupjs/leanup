import { PatternValidator } from './pattern.validator';

// https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
export const EMAIL_VALIDATION_REGEXP: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class EmailValidator extends PatternValidator {
  constructor(message: string = 'The email address has not the correct format.') {
    super(EMAIL_VALIDATION_REGEXP, message);
  }
}
