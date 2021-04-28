import { expect } from 'chai';

import { NotPatternValidator, PatternValidator } from './pattern.validator';

describe('Teste Pattern-Validator', () => {
  it('Teste PatternValidator mit Regex', () => {
    const validator: PatternValidator = new PatternValidator(/^\d*$/);
    expect(validator.isValid(42)).to.be.true;
  });

  it('Teste PatternValidator mit String', () => {
    const validator: PatternValidator = new PatternValidator('[0-9]');
    expect(validator.isValid(42)).to.be.true;
  });

  it('Teste NotPatternValidator mit Regex', () => {
    const validator: NotPatternValidator = new NotPatternValidator(/^\d*$/);
    expect(validator.isValid(42)).to.be.false;
  });

  it('Teste NotPatternValidator mit String', () => {
    const validator: NotPatternValidator = new NotPatternValidator('[0-9]');
    expect(validator.isValid(42)).to.be.false;
  });
});
