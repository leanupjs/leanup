import { DI } from '@leanup/lib/helpers/injector';

import { NameVersion } from '../../models/name-version.interface';

const OPTIONAL_CHECKING = {
  ok: true,
  nok: null,
};

export class AppController {
  public readonly application: NameVersion = DI.get<NameVersion>('Application');
  public readonly framework: NameVersion = DI.get<NameVersion>('Framework');

  public constructor() {
    console.log(this.application, this.framework);
    console.log('OPTIONAL_CHECKING', OPTIONAL_CHECKING?.ok);
    // console.log('OPTIONAL_CHECKING', OPTIONAL_CHECKING?.nok);
  }
}
