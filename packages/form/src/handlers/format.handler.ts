import { SetOf } from '@leanup/lib';

import { AbstractFormatter } from './formatters/abstract.formatter';

export class FormatHandler extends SetOf<AbstractFormatter> {
  public readonly formatters: SetOf<AbstractFormatter>;

  public constructor() {
    super(AbstractFormatter);
    this.formatters = this;
  }

  public format(value: unknown): unknown {
    this.formatters.forEach((formatter: AbstractFormatter) => {
      value = formatter.format(value);
    });
    return value;
  }
  public parse(value: unknown): unknown {
    this.formatters.forEach((formatter: AbstractFormatter) => {
      value = formatter.parse(value);
    });
    return value;
  }
}
