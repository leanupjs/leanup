import { expect } from 'chai';

import { NonRequiredValidator } from './non-required.validator';

describe('Teste NonRequired-Validator', () => {
  let validator: NonRequiredValidator;

  beforeEach(() => {
    validator = new NonRequiredValidator();
  });

  it('Teste mit true', () => {
    expect(() => {
      validator.isValid('Test');
    }).to.throw();
  });

  it('Teste mit Leerstring', () => {
    expect(validator.isValid('')).to.be.true;
  });

  it('Teste mit Null', () => {
    expect(validator.isValid(null)).to.be.true;
  });

  it('Teste mit undefined', () => {
    expect(validator.isValid(undefined)).to.be.true;
  });

  it('Teste mit false', () => {
    expect(() => {
      validator.isValid(false);
    }).to.throw();
  });
});
