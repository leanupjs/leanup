import { expect } from 'chai';

import { FormControl, FormFactory } from './controls';

const anschrift: Object = {
  anschrift: {
    ansprache: {
      anrede: '',
      vorname: '',
      nachname: '',
    },
    addresse: {
      strasse: '',
      hausnummer: '',
      plz: '',
      ort: '',
      land: '',
    },
  },
};

describe(`Test: Controls (JSON)`, () => {
  const form: FormControl = FormFactory.createForm('anschrift', anschrift);
  console.log(form.getData());
  describe(`Test: FormControl`, () => {
    it(`AnschriftForm instanceof FormControl`, () => {
      expect(form instanceof FormControl).be.true;
    });
  });
});
