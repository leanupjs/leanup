const CURRENCY_FORMATTER: Intl.NumberFormat = new Intl.NumberFormat('de-DE', {
  currency: 'EUR',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export function currency(value: number): string {
  if (isNaN(value) === false && typeof value === 'number') {
    return CURRENCY_FORMATTER.format(value);
  } else {
    return '';
  }
}

/**
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
 *
 * Missing config for leading 0's 1.1.1970 instead of 01.01.1970
 */
const DATE_FORMATTER: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE');

export function date(value: Date): string {
  if (value instanceof Date) {
    return DATE_FORMATTER.format(value);
  } else {
    return '';
  }
}
