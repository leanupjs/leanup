import { expect } from 'chai';

import { DigitsValidator } from './digits.validator';

describe('Teste DigitsValidator', () => {
  let validator: DigitsValidator;
  beforeEach(() => {
    validator = new DigitsValidator();
  });

  it('Teste mit Zahl', () => {
    expect(validator.isValid(42)).to.be.true;
  });

  it('Teste mit Null', () => {
    expect(validator.isValid(null)).to.be.true;
  });

  it('Teste mit String', () => {
    expect(validator.isValid('Hallo Welt')).to.be.false;
  });
});
