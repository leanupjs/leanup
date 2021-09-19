import { expect } from 'chai';
import { LazyLoader } from '.';

import { DI, Injector } from './injector';

describe(`Test: Injector-Service (DI)`, () => {
  it('DI is instance of Injector', () => {
    expect(DI instanceof Injector).be.true;
    expect(new Injector() instanceof Injector).be.true;
  });

  describe(`Service registrieren`, () => {
    function test(type: string, service: any) {
      it(`Test-Case register (${type})`, () => {
        // given
        // when
        expect(() => {
          DI.register(type, service);
        }).not.throw();
        // then
      });

      it(`Test-Case get (${type})`, () => {
        // given
        // when
        expect(() => {
          DI.get(type);
        }).not.throw();
        // then
      });
    }
    test(`Array`, []);
    test(`Object`, {});
    test(`number`, 0);
    test(`string`, '');
    test(`boolean`, true);
    test(`null`, null);
    test(`undefined`, undefined);
  });
  describe(`Service fehlerhaft registrieren`, () => {
    function test(type: string, service: any) {
      it(`Test-Case register (${type})`, () => {
        // given
        // when
        expect(() => {
          DI.register(type, service);
        }).throw();
        // then
      });
    }
    test(`undefined`, undefined);
  });

  describe('Test Lazy Feature', () => {
    let injector: Injector;
    let called: number;
    let lazyLoader: LazyLoader<unknown>;

    beforeEach(() => {
      injector = new Injector();
      called = 0;
      lazyLoader = (): void => {
        called++;
      };
    });

    it('Register (default no lazy)', () => {
      // given
      expect(() => {
        injector.get('service');
      }).throw(`The service 'service' is not registered!`);

      // when
      injector.register<unknown>('service', lazyLoader);

      // then
      expect(() => {
        injector.get('service');
      }).not.throw();
      expect(called).equal(0);
    });

    it('Register (explizit no lazy)', () => {
      // given
      expect(() => {
        injector.get('service');
      }).throw(`The service 'service' is not registered!`);

      // when
      injector.register<unknown>('service', lazyLoader, {
        lazy: false,
      });

      // then
      expect(() => {
        injector.get('service');
      }).not.throw();
      expect(called).equal(0);
    });

    it('Register (lazy null)', () => {
      // given
      expect(() => {
        injector.get('service');
      }).throw(`The service 'service' is not registered!`);

      // when
      injector.register<unknown>('service', lazyLoader, {});

      // then
      expect(() => {
        injector.get('service');
      }).not.throw();
      expect(called).equal(0);
    });

    it('Register (lazy)', () => {
      // given
      expect(() => {
        injector.get('service');
      }).throw(`The service 'service' is not registered!`);

      // when
      injector.register<unknown>('service', lazyLoader, {
        lazy: true,
      });

      // then
      expect(() => {
        injector.get('service');
      }).not.throw();
      expect(called).equal(1);
    });
  });
});
