import { expect } from 'chai';

import { MaxLengthValidator } from './max-length.validator';

describe('Teste Max-Length-Validator', () => {
  let validator: MaxLengthValidator;
  beforeEach(() => {
    validator = new MaxLengthValidator(5);
  });

  it('Teste mit kleineren Wert', () => {
    expect(validator.isValid('A')).to.be.true;
  });

  it('Teste mit genau gleicher Länge', () => {
    expect(validator.isValid('Hallo')).to.be.true;
  });

  it('Teste mit zu großer Länge', () => {
    expect(validator.isValid('Hallo Welt')).to.be.false;
  });
});
