import { expect } from 'chai';
import { SinonSpy, spy } from 'sinon';
import { Observable } from 'rxjs';
import { FormFactory } from '.';

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
          anschriftForm.addControl(vornameInput);
        });
        it(`VornameInput zu AnschriftForm hinzufügen obwohl es schon vorhanden ist`, () => {
          expect(() => {
            anschriftForm.addControl(vornameInput);
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
          anschriftForm.addControl(anspracheForm);
        });
        it(`AnspracheForm zu AnschriftForm hinzufügen obwohl es schon vorhanden ist`, () => {
          expect(() => {
            anschriftForm.addControl(anschriftForm);
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
            anschriftForm.addControl(anschriftForm);
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
        formControl2.addControl(formControl);
      }).throw;
    });

    it(`No loop detected`, () => {
      expect(() => {
        formControl.addControl(formControl2);
      }).not.throw;
    });

    it(`Loop detected in parentForms`, () => {
      expect(() => {
        formControl2.addControl(formControl);
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
      form.addControl(input);

      // then
      expect(form.valid).to.eq(true);
      expect(input.valid).to.eq(true);
      expect(handler.validate(null)).to.eql([]);

      // given
      expect(handler.validators.size).to.eq(0);

      // when
      handler.validators.add(DEFAULT_REQUIRED_VALIDATOR);
      handler.validators.add(DEFAULT_DIGITS_VALIDATOR);

      // then
      expect(handler.validators.size).to.eq(2);
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

    it(`Add FormatHandler to InputControl`, () => {
      // given
      input.value = 'DE53734514500036064418';

      expect(input.value).equal('DE53734514500036064418');
      expect(input.modelValue).equal('DE53734514500036064418');
      expect(input.viewValue).equal('DE53734514500036064418');

      // when
      input.setFormatHandler(handler);

      // then
      expect(input.value).equal('DE53734514500036064418');
      expect(input.modelValue).equal('DE53734514500036064418');
      expect(input.viewValue).equal('DE53 7345 1450 0036 0644 18');
    });
  });

  describe('Test Form disabled', () => {
    let form: FormControl;
    let input: InputControl;

    beforeEach(() => {
      // given
      form = new FormControl('form');
      input = new InputControl('input');
      form.addControl(input);
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
      form.addControl(input);
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

  describe('Test Change Listener', () => {
    let form: FormControl;
    let input: InputControl;
    let spies: {
      form: SinonSpy<[], void> | null;
      input: SinonSpy<[], void> | null;
    } = { form: null, input: null };

    const changeListeners = {
      form: () => {},
      input: () => {},
    };

    before(() => {
      // given
      form = new FormControl('form');
      input = new InputControl('input');
      form.addControl(input);
      spies.form = spy(changeListeners, 'form');
      spies.input = spy(changeListeners, 'input');
    });

    afterEach(() => {
      spies.form?.resetHistory();
      spies.input?.resetHistory();
    });

    it(`Add Change Listener`, () => {
      // given
      expect(form.changeListeners.size).equal(0);
      expect(input.changeListeners.size).equal(0);

      // when
      form.changeListeners.add(changeListeners.form);
      input.changeListeners.add(changeListeners.input);

      // then
      expect(form.changeListeners.size).equal(1);
      expect(input.changeListeners.size).equal(1);
    });

    it(`Test Change Listener called`, () => {
      // given
      expect(form.changeListeners.size).equal(1);
      expect(input.changeListeners.size).equal(1);
      expect(input.value).equal(null);
      expect(spies.form?.called).to.be.false;
      expect(spies.input?.called).to.be.false;

      // when
      input.value = 'change';

      // then
      // TODO expect(spies.form?.called).to.be.true;
      expect(spies.input?.called).to.be.true;
    });

    it(`Remove Change Listener`, () => {
      // given
      expect(form.changeListeners.size).equal(1);
      expect(input.changeListeners.size).equal(1);

      // when
      form.changeListeners.remove(changeListeners.form);
      input.changeListeners.remove(changeListeners.input);

      // then
      expect(form.changeListeners.size).equal(0);
      expect(input.changeListeners.size).equal(0);
    });
  });

  describe.only('Test Observable', () => {
    let form: FormControl;
    let input: InputControl;
    let value$: Observable<unknown> | null;

    before(() => {
      // given
      form = new FormControl('form');
      input = new InputControl('input');
      form.addControl(input);
      input.getValueChangeObservable().subscribe({
        next: console.log,
      });
    });

    it(`Value changed`, () => {
      // given
      input.value = 'A';
      input.value = 'B';
    });
  });

  describe(`Test getForm and getInput`, () => {
    const form = FormFactory.createForm('test', {
      ansprache: {
        anrede: 'Herr',
        vorname: 'Elke',
        nachname: 'Mustermann',
      },
      anschrift: {},
      alter: 0,
    });

    describe(`Test getForm`, () => {
      it('getForm valid', () => {
        expect(form.getForm('ansprache') instanceof FormControl).be.true;
      });

      it('getForm empty', () => {
        expect(form.getInput('alter') instanceof InputControl).be.true;
        expect(form.getForm('alter') instanceof FormControl).be.false;
        expect(form.getForm('alter') === undefined).be.true;
      });
    });

    describe(`Test getInput`, () => {
      it('getInput valid', () => {
        expect(form.getInput('alter') instanceof InputControl).be.true;
      });

      it('getInput empty', () => {
        expect(form.getForm('ansprache') instanceof FormControl).be.true;
        expect(form.getInput('ansprache') instanceof InputControl).be.false;
        expect(form.getInput('ansprache') === undefined).be.true;
      });
    });
  });
});
