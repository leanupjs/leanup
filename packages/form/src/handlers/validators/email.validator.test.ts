import { expect } from 'chai';

import { EmailValidator } from './email.validator';

describe('Teste Emailvalidator', () => {
  let validator: EmailValidator;

  const validMails = ['tester@inverso.de', 'schreib@mirmal.info'];
  const invalidMails = ['testerinverso.de', 'schreib@mirmal'];

  beforeEach(() => {
    validator = new EmailValidator();
  });

  it('Teste gültige Mails', () => {
    validMails.forEach((mail: string) => {
      expect(validator.isValid(mail)).to.be.true;
    });
  });

  it('Teste ungültige Mails', () => {
    invalidMails.forEach((mail: string) => {
      expect(validator.isValid(mail)).to.be.false;
    });
  });
});
