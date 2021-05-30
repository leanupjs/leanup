import { AbstractFormatter } from './abstract.formatter';

export class IbanFormatter extends AbstractFormatter<string, string> {
  private regExp: RegExp = /([A-Z0-9]{1,4})/gi;

  public format(value: string): string {
    if (typeof value === 'string') {
      const matches: string[] | null = value.match(this.regExp);
      if (Array.isArray(matches)) {
        return matches?.join(' ');
      }
    }
    return value;
  }

  public parse(value: string): string {
    if (typeof value === 'string') {
      return value.replace(/ /g, '');
    }
    return value;
  }
}

export const DEFAULT_IBAN_FORMATTER = new IbanFormatter();
