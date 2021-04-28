import { Log } from '@leanup/lib/helpers/log';

import { NonRequiredValidator } from './non-required.validator';

export class PatternValidator extends NonRequiredValidator {
  public _regExp: RegExp = /^/g;

  constructor(regExp: RegExp, message: string = 'Bitte tragen Sie einen gültigen Wert ein.') {
    super(message);
    this.regExp = regExp;
  }

  set regExp(regExp: RegExp) {
    if (regExp instanceof RegExp) {
      this._regExp = regExp;
    } else {
      Log.debug(`The regExp of the pattern validator should be type of RegExp.`);
    }
  }

  get regExp(): RegExp {
    return this._regExp;
  }

  public validate(value: any): boolean {
    return this.regExp.test(value);
  }
}

export class NotPatternValidator extends PatternValidator {
  public validate(value: any): boolean {
    return super.validate(value) === false;
  }
}
