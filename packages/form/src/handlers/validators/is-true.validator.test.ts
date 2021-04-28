import { expect } from 'chai';

import { IsTrueValidator } from './is-true.validator';

describe('Teste is-true-validator', () => {
  let validator: IsTrueValidator;

  beforeEach(() => {
    validator = new IsTrueValidator();
  });

  it('Teste mit True', () => {
    expect(validator.isValid(true)).to.be.true;
  });

  it('Teste mit False', () => {
    expect(validator.isValid(false)).to.be.false;
  });

  it('Teste mit 0', () => {
    expect(validator.isValid(0)).to.be.false;
  });
});
