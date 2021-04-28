import { expect } from 'chai';

import { IsTrueValidator } from './is-true.validator';
import { NotValidator } from './not.validator';

describe('Teste Not-Validator', () => {
  let validator: NotValidator;
  let isTrueValidator: IsTrueValidator;

  beforeEach(() => {
    isTrueValidator = new IsTrueValidator();
    validator = new NotValidator(isTrueValidator, undefined);
  });

  it('Teste auf True', () => {
    expect(validator.isValid(false)).to.be.true;
  });

  it('Teste auf False', () => {
    expect(validator.isValid(true)).to.be.false;
  });
});
