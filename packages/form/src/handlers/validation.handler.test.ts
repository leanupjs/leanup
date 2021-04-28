import { assert, expect } from 'chai';

import { ValidationHandler } from './validation.handler';
import { DEFAULT_DIGITS_VALIDATOR, DigitsValidator } from './validators/digits.validator';
import { PatternValidator } from './validators/pattern.validator';
import { DEFAULT_REQUIRED_VALIDATOR } from './validators/required.validator';

describe(`Test: ValidationHandler`, () => {
  let handler: ValidationHandler;

  beforeEach(() => {
    handler = new ValidationHandler();
  });

  it(`Initial validators size 0`, () => {
    assert.equal(handler.validators.length, 0);
  });

  describe('Test: ListOf validators', () => {
    function test(value: any) {
      it(`Validator accept only function (${value})`, () => {
        assert.equal(handler.validators.length, 0);
        handler.validators.add(value);
        assert.equal(handler.validators.length, 0);
      });
    }

    test('');
    test(1);
    test(null);
    test({});
    test([1, 1]);

    it(`Validator accept a AbstractValidator`, () => {
      assert.equal(handler.validators.length, 0);
      handler.validators.add(DEFAULT_REQUIRED_VALIDATOR);
      assert.equal(handler.validators.length, 1);
    });
  });

  describe('Test: Validate with Validator', () => {
    beforeEach(() => {
      handler.validators.add([new DigitsValidator(), DEFAULT_DIGITS_VALIDATOR]);
    });

    it(`Validate no errors`, () => {
      const errors = handler.validate('a');
      expect(Array.isArray(errors)).be.true;
      expect(errors.length).be.equal(2);
    });

    it(`Validate two errors`, () => {
      const errors = handler.validate('a', false);
      expect(Array.isArray(errors)).be.true;
      expect(errors.length).be.equal(2);
      expect(errors[0]).be.equal('Der Wert ist keine Zahl.');
    });

    it(`Validate only one of two errors`, () => {
      const errors = handler.validate('a', true);
      expect(Array.isArray(errors)).be.true;
      expect(errors.length).be.equal(1);
      expect(errors[0]).be.equal('Der Wert ist keine Zahl.');
    });
  });
});
