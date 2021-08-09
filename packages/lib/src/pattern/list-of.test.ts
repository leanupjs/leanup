import { assert } from 'chai';

import { SetOf } from './list-of';

describe('Test: SetOf', () => {
  const setOf = new SetOf<Function>(Function);

  function test(value: any) {
    it(`Validator accept only Functions (${value})`, () => {
      assert.equal(setOf.length, 0);
      setOf.add(value);
      assert.equal(setOf.length, 0);
    });
  }

  test('');
  test(1);
  test(null);
  test({});
  test([1, 1]);

  it(`Validator accept a AbstractValidator`, () => {
    assert.equal(setOf.length, 0);
    setOf.add(new Function());
    assert.equal(setOf.length, 1);
  });
});
