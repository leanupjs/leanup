import { PatternValidator } from './pattern.validator';

export const EMAIL_VALIDATION_REGEXP: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class EmailValidator extends PatternValidator {
  constructor(message: string = 'E-Mail-Adresse hat nicht das richtige Format.') {
    super(EMAIL_VALIDATION_REGEXP, message);
  }
}
