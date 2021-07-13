import { expect } from 'chai';

import { FormatHandler } from '../handlers/format.handler';
import { DEFAULT_IBAN_FORMATTER } from '../handlers/formatters/iban.formatter';
import { ValidationHandler } from '../handlers/validation.handler';
import { DEFAULT_DIGITS_VALIDATOR } from '../handlers/validators/digits.validator';
import { DEFAULT_REQUIRED_VALIDATOR } from '../handlers/validators/required.validator';
import { FormControl, InputControl } from './controls';

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
          expect(anspracheForm.id).equal('anschriftForm_anspracheForm');
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

  describe('Test ValidationHandler', () => {
    let form: FormControl;
    let input: InputControl;
    let handler: ValidationHandler;

    beforeEach(() => {
      // given
      form = new FormControl('form');
      input = new InputControl('input');
      handler = new ValidationHandler();
      form.addConrol(input);

      // then
      expect(form.valid).to.eq(true);
      expect(input.valid).to.eq(true);
      expect(handler.validate(null)).to.eql([]);

      // given
      expect(handler.validators.length).to.eq(0);

      // when
      handler.validators.add([DEFAULT_REQUIRED_VALIDATOR, DEFAULT_DIGITS_VALIDATOR]);

      // then
      expect(handler.validators.length).to.eq(2);
    });

    describe('Test InputControl', () => {
      it(`Add ValidationHandler to FormControl`, () => {
        // given
        expect(form.valid).to.eq(true);

        // when
        form.setValidationHandler(handler);

        // then
        expect(form.valid).to.eq(false);
      });

      it(`Add ValidationHandler to InputControl`, () => {
        // given
        expect(input.valid).to.eq(true);

        // when
        input.setValidationHandler(handler);

        // then
        expect(input.valid).to.eq(false);
      });
    });
  });

  describe('Test FormatHandler', () => {
    let input: InputControl;
    let handler: FormatHandler;

    beforeEach(() => {
      // given
      input = new InputControl('input');
      handler = new FormatHandler();
      handler.formatters.add(DEFAULT_IBAN_FORMATTER);
    });

    it(`Add FormatHandler to InputControl`, (done) => {
      // given
      input.value = 'DE53734514500036064418';
      setTimeout(() => {
        expect(input.value).equal('DE53734514500036064418');
        expect(input.modelValue).equal('DE53734514500036064418');
        expect(input.viewValue).equal('DE53734514500036064418');

        // when
        input.setFormatHandler(handler);

        // then
        expect(input.value).equal('DE53734514500036064418');
        expect(input.modelValue).equal('DE53734514500036064418');
        expect(input.viewValue).equal('DE53 7345 1450 0036 0644 18');

        done();
      }, 250);
    });
  });

  describe('Test Form disabled', () => {
    let form: FormControl;
    let input: InputControl;

    beforeEach(() => {
      // given
      form = new FormControl('form');
      input = new InputControl('input');
      form.addConrol(input);
      form.disabled = false;
      input.disabled = false;
      expect(form.disabled).to.be.false;
      expect(input.disabled).to.be.false;
    });

    it(`Disable Form and all contained Controls`, () => {
      // given
      expect(form.disabled).to.be.false;
      expect(input.disabled).to.be.false;

      // when
      form.disabled = true;

      // then
      expect(form.disabled).to.be.true;
      expect(input.disabled).to.be.true;
    });
  });

  describe('Test Form readonly', () => {
    let form: FormControl;
    let input: InputControl;

    beforeEach(() => {
      // given
      form = new FormControl('form');
      input = new InputControl('input');
      form.addConrol(input);
      form.readonly = false;
      input.readonly = false;
      expect(form.readonly).to.be.false;
      expect(input.readonly).to.be.false;
    });

    it(`Readonly Form and all contained Controls`, () => {
      // given
      expect(form.readonly).to.be.false;
      expect(input.readonly).to.be.false;

      // when
      form.readonly = true;

      // then
      expect(form.readonly).to.be.true;
      expect(input.readonly).to.be.true;
    });
  });
});
