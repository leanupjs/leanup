import { expect } from 'chai';

import { IVersion, IVersionLabelEnum } from '../../src/assets/openapi/typescript-rxjs';

describe(`Test: OpenAPI`, () => {
  const label: IVersionLabelEnum = IVersionLabelEnum.Latest;
  const version: IVersion = {
    major: 1,
    minor: 2,
    patch: 3,
    text: '1.2.3',
    label: label,
  };

  it('Test Version', () => {
    expect(version.text).be.equal('1.2.3');
  });
});
