import { expect } from 'chai';
import sonon, { spy } from 'sinon';

import { Log } from '@leanup/lib/helpers/log';

import { AbstractValidator } from './abstract.validator';

describe('Teste AbstractValidator', () => {
  const validator: AbstractValidator = new AbstractValidator(undefined);
  let spyElement;

  beforeEach(() => {
    spyElement = spy(Log, 'debug');
  });

  afterEach(() => {
    sonon.restore();
  });

  it('Standard-Meldung ist', () => {
    expect(validator.message).to.equal(`Es ist ein unbekannter Fehler aufgetreten.`);
  });
});
