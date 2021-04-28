import { expect } from 'chai';

import { RequiredValidator } from './required.validator';

describe('Teste Required-Validator', () => {
  let validator: RequiredValidator;
  beforeEach(() => {
    validator = new RequiredValidator();
  });

  it('Teste mit true', () => {
    expect(validator.isValid('Test')).to.be.true;
  });

  it('Teste mit Leerstring', () => {
    expect(validator.isValid('')).to.be.false;
  });

  it('Teste mit Null', () => {
    expect(validator.isValid(null)).to.be.false;
  });

  it('Teste mit undefined', () => {
    expect(validator.isValid(undefined)).to.be.false;
  });

  it('Teste mit false', () => {
    expect(validator.isValid(false)).to.be.true;
  });
});
