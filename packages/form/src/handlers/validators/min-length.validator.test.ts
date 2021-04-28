import { expect } from 'chai';

import { MinLengthValidator } from './min-length.validator';

describe('Teste Min-Length-Validator', () => {
  let validator: MinLengthValidator;
  beforeEach(() => {
    validator = new MinLengthValidator(5);
  });

  it('Teste mit kleineren Wert', () => {
    expect(validator.isValid('A')).to.be.false;
  });

  it('Teste mit genau gleicher Länge', () => {
    expect(validator.isValid('Hallo')).to.be.true;
  });

  it('Teste mit zu großer Länge', () => {
    expect(validator.isValid('Hallo Welt')).to.be.true;
  });
});
