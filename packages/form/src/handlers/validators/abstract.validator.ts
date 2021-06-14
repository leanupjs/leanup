import { Log } from '@leanup/lib/helpers/log';
import { Validator } from '@leanup/lib/helpers/validator';

interface ValidatorState {
  message: string;
}

export abstract class AbstractValidator {
  private readonly state: ValidatorState = {
    message: `An unknown error has occurred.`,
  };

  constructor(message: string) {
    this.message = message;
  }

  set message(message: string) {
    if (Validator.isString(message, 1)) {
      this.state.message = message;
    } else {
      Log.debug(`The validator message is not valid.`);
    }
  }
  get message(): string {
    return this.state.message;
  }

  abstract validate(value: any): boolean;
}
