import { expect } from 'chai';

import { IbanFormatter } from './iban.formatter';

describe('Teste IbanFormatter', () => {
  let formatter: IbanFormatter;
  beforeEach(() => {
    formatter = new IbanFormatter();
  });

  it('Parse "DE74 2512 0510 0009 4449 66"', () => {
    expect(formatter.parse('DE74 2512 0510 0009 4449 66')).equal('DE74251205100009444966');
  });

  it('Format "DE74251205100009444966"', () => {
    expect(formatter.format('DE74251205100009444966')).equal('DE74 2512 0510 0009 4449 66');
  });
});
