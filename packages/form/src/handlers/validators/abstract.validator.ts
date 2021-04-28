import { Log } from '@leanup/lib/helpers/log';
import { Validator } from '@leanup/lib/helpers/validator';

export abstract class AbstractValidator {
  private readonly state = {
    message: `Es ist ein unbekannter Fehler aufgetreten.`,
  };

  constructor(message: string) {
    this.message = message;
  }

  set message(message: string) {
    if (Validator.isString(message, 1)) {
      this.state.message = message;
    } else {
      Log.debug(`The message of the validator should be type of string with a min-length of 1.`);
    }
  }
  get message(): string {
    return this.state.message;
  }

  abstract isValid(value: any): boolean;
}
