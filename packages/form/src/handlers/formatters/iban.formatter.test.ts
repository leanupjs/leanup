import { expect } from 'chai';

import { IbanFormatter } from './iban.formatter';

describe('IbanFormatter', () => {
  let formatter: IbanFormatter;
  beforeEach(() => {
    formatter = new IbanFormatter();
  });

  it('Parse "DE53 7345 1450 0036 0644 18"', () => {
    expect(formatter.parse('DE53 7345 1450 0036 0644 18')).equal('DE53734514500036064418');
  });

  it('Format no string', () => {
    expect(formatter.parse(1)).equal(1);
  });

  it('Format "DE53734514500036064418"', () => {
    expect(formatter.format('DE53734514500036064418')).equal('DE53 7345 1450 0036 0644 18');
  });

  it('Format no string', () => {
    expect(formatter.format(1)).equal(1);
  });
});
