import { expect } from 'chai';

import { FormControl, FormFactory } from './controls';

const anschrift: Object = {
  anschrift: {
    ansprache: {
      anrede: '',
      vorname: '',
      nachname: '',
    },
    adresse: {
      strasse: '',
      hausnummer: '',
      plz: '',
      ort: '',
      land: '',
    },
  },
};

interface AnschriftForm extends FormControl {
  ansprache: FormControl;
  addresse: FormControl;
}

describe(`Test: Controls (JSON)`, () => {
  const form: AnschriftForm = FormFactory.createForm('anschrift', anschrift) as AnschriftForm;
  const anschriftForm: FormControl = form.getControl('anschrift') as FormControl;
  const anspracheForm: FormControl = anschriftForm.getControl('ansprache') as FormControl;
  const adresseForm: FormControl = anschriftForm.getControl('adresse') as FormControl;

  describe(`Test: FormControl`, () => {
    it(`Anschrift instanceof FormControl`, () => {
      expect(anschriftForm instanceof FormControl).be.true;
    });
    it(`Ansprache instanceof FormControl`, () => {
      expect(anspracheForm instanceof FormControl).be.true;
    });
    it(`Adresse instanceof FormControl`, () => {
      expect(adresseForm instanceof FormControl).be.true;
    });
  });
  describe(`Test: Data Setter/Getter`, () => {
    const overwrite: Object = {
      anschrift: {
        ansprache: {
          anrede: '…',
          vorname: '…',
          nachname: '…',
        },
        adresse: {
          strasse: '…',
          hausnummer: '…',
          plz: '…',
          ort: '…',
          land: '…',
        },
      },
    };

    it(`Test: setData and getData`, (done) => {
      // given
      expect(form.getData()).to.eql(anschrift);

      // when
      form.setData(overwrite);

      // then
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        expect(form.getData()).to.not.eql(anschrift);
        expect(form.getData()).to.eql(overwrite);
        done();
      }, 500);
    });
  });
});
