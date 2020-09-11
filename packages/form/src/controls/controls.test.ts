import { expect } from 'chai';
import { InputControl, FormControl } from './controls';

describe(`Test: Controls`, () => {
  const anschriftFormName = 'anschriftForm';
  const anspracheFormName = 'anspracheForm';
  const vornameInputName = 'inputVorname';
  const vornameInput: InputControl = new InputControl(vornameInputName);
  const anschriftForm = new FormControl(anschriftFormName);
  const anspracheForm = new FormControl(anspracheFormName);

  describe(`Test: FormControl`, () => {
    it(`AnschriftForm instanceof FormControl`, () => {
      expect(anschriftForm instanceof FormControl).be.true;
    });
    it(`AnschriftForm-Name ist "${anschriftFormName}"`, () => {
      expect(anschriftForm.name).equal(anschriftFormName);
    });
    it(`AnschriftForm-ID ist "${anschriftFormName}"`, () => {
      expect(anschriftForm.id).equal(anschriftFormName);
    });
    describe(`Test: ParentForm-Feature`, () => {
      const parentFormName = 'parentForm';
      const parentForm: FormControl = new FormControl(parentFormName);

      it(`ParentForm instanceof FormControl`, () => {
        expect(parentForm instanceof FormControl).be.true;
      });
      it(`ParentForm-Name ist "${parentFormName}"`, () => {
        expect(parentForm.name).equal(parentFormName);
      });
      it(`ParentForm-ID ist "${parentFormName}"`, () => {
        expect(parentForm.id).equal(parentFormName);
      });

      it(`ParentForm von AnschriftForm entfernen obwohl es nicht vorhanden ist`, () => {
        expect(() => {
          anschriftForm.removeParentForm(parentForm);
        }).throw;
      });
      it(`ParentForm zu AnschriftForm hinzufügen`, () => {
        anschriftForm.addParentForm(parentForm);
      });
      it(`ParentForm zu AnschriftForm hinzufügen obwohl es schon vorhanden ist`, () => {
        expect(() => {
          anschriftForm.addParentForm(parentForm);
        }).throw;
      });
      it(`ParentForm von AnschriftForm entfernen`, () => {
        anschriftForm.removeParentForm(parentForm);
      });
    });

    describe(`Test: Input-Feature`, () => {
      describe(`Test: add, contrains and remove InputControls`, () => {
        it(`VornameInput von AnschriftForm entfernen obwohl es nicht vorhanden ist`, () => {
          expect(() => {
            anschriftForm.removeControl(vornameInput);
          }).throw;
        });
        it(`VornameInput zu AnschriftForm hinzufügen`, () => {
          anschriftForm.addConrol(vornameInput);
        });
        it(`VornameInput zu AnschriftForm hinzufügen obwohl es schon vorhanden ist`, () => {
          expect(() => {
            anschriftForm.addConrol(vornameInput);
          }).throw;
        });
        it(`VornameInput in AnschriftForm.getControls`, () => {
          expect(anschriftForm.getControls().indexOf(vornameInput) >= 0).be.true;
        });
        it(`VornameInput in AnschriftForm.getControl`, () => {
          expect(anschriftForm.getControl(vornameInputName) === vornameInput).be.true;
        });
        it(`VornameInput von AnschriftForm entfernen`, () => {
          anschriftForm.removeControl(vornameInput);
        });
        it('Teste unterschiedliche Properties-Werte', () => {
          new InputControl('input');
          new InputControl('input', {});
          new InputControl('input', {
            label: 'Anrede',
          });
          new InputControl('input', {
            value: 'Frau',
          });
        });
      });
      describe(`Test: add, contrains and remove FormControls`, () => {
        it(`AnspracheForm von AnschriftForm entfernen obwohl es nicht vorhanden ist`, () => {
          expect(() => {
            anschriftForm.removeControl(anschriftForm);
          }).throw;
        });
        it(`AnspracheForm zu AnschriftForm hinzufügen`, () => {
          anschriftForm.addConrol(anspracheForm);
        });
        it(`AnspracheForm zu AnschriftForm hinzufügen obwohl es schon vorhanden ist`, () => {
          expect(() => {
            anschriftForm.addConrol(anschriftForm);
          }).throw;
        });
        it(`AnspracheForm in AnschriftForm.getControls`, () => {
          expect(anschriftForm.getControls().indexOf(anspracheForm) >= 0).be.true;
        });
        it(`AnspracheForm in AnschriftForm.getControl`, () => {
          expect(anschriftForm.getControl(anspracheFormName) === anspracheForm).be.true;
        });
        it(`Teste getId vor Remove ("anschriftForm anspracheForm")`, () => {
          expect(anspracheForm.id).equal('anschriftForm.anspracheForm');
        });
        it(`AnspracheForm von AnschriftForm entfernen`, () => {
          anschriftForm.removeControl(anspracheForm);
        });
        it(`Teste getId nach Remove ("anspracheForm")`, () => {
          expect(anspracheForm.id).equal('anspracheForm');
        });
        it(`Add Control Loop-Detection`, () => {
          expect(() => {
            anschriftForm.addConrol(anschriftForm);
          }).throw;
        });
      });
    });
  });

  describe('FormControl loop detection', () => {
    const formControl = new FormControl('loop');
    const formControl2 = new FormControl('loop2');

    it(`Loop detected`, () => {
      expect(() => {
        formControl2.addConrol(formControl);
      }).throw;
    });

    it(`No loop detected`, () => {
      expect(() => {
        formControl.addConrol(formControl2);
      }).not.throw;
    });

    it(`Loop detected in parentForms`, () => {
      expect(() => {
        formControl2.addConrol(formControl);
      }).throw;
    });
  });
});
