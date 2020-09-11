import { ValidationHandler } from "./validation.handler";
import { assert, expect } from "chai";

describe(`Test: ValidationHandler`, () => {
  let handler: ValidationHandler;

  beforeEach(() => {
    handler = new ValidationHandler();
  });

  it(`Initial validators size 0`, () => {
    assert.equal(handler.validators.length, 0);
  });

  describe("Test: ListOf validators", () => {
    function test(value: any) {
      it(`Validator accept only function (${value})`, () => {
        assert.equal(handler.validators.length, 0);
        handler.validators.add(value);
        assert.equal(handler.validators.length, 0);
      });
    }

    test("");
    test(1);
    test(null);
    test({});
    test([1, 1]);

    it(`Validator accept a function`, () => {
      assert.equal(handler.validators.length, 0);
      handler.validators.add(() => {});
      assert.equal(handler.validators.length, 1);
    });
  });

  describe("Test: Validate function", () => {
    function validator(value: any) {
      if (value instanceof Error) {
        throw value;
      }
    }

    beforeEach(() => {
      handler.validators.add([
        (value: any) => validator(value),
        (value: any) => validator(value),
      ]);
    });

    it(`Validate no errors`, () => {
      const errors = handler.validate(null);
      expect(Array.isArray(errors)).be.true;
      expect(errors.length).be.equal(0);
    });

    it(`Validate two errors`, () => {
      const error = new Error("Fehlermeldung");
      const errors = handler.validate(error, false);
      expect(Array.isArray(errors)).be.true;
      expect(errors.length).be.equal(2);
      expect(errors[0]).be.equal(error);
    });

    it(`Validate only one of two errors`, () => {
      const error = new Error("Fehlermeldung");
      const errors = handler.validate(error, true);
      expect(Array.isArray(errors)).be.true;
      expect(errors.length).be.equal(1);
      expect(errors[0]).be.equal(error);
    });
  });
});
