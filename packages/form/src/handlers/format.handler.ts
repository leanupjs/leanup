import { ListOf } from '@leanup/lib/pattern/list-of';

import { AbstractFormatter } from './formatters/abstract.formatter';

export class FormatHandler<ModelValue, ViewValue> {
  public readonly formatters: ListOf<AbstractFormatter<ModelValue, ViewValue>> = new ListOf(AbstractFormatter);

  public format(value: any): ViewValue {
    this.formatters.forEach((formatter: AbstractFormatter<ModelValue, ViewValue>) => {
      value = formatter.format(value);
    });
    return value as ViewValue;
  }
  public parse(value: any): ModelValue {
    this.formatters.forEach((formatter: AbstractFormatter<ModelValue, ViewValue>) => {
      value = formatter.parse(value);
    });
    return value as ModelValue;
  }
}
