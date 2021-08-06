import { ListOf } from '@leanup/lib';

import { AbstractFormatter } from './formatters/abstract.formatter';

export class FormatHandler {
  public readonly formatters: ListOf<AbstractFormatter> = new ListOf(AbstractFormatter);

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
