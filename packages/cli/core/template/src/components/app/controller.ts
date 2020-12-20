import { AbstractController } from '@leanup/lib/components/generic';
import { DI } from '@leanup/lib/helpers/injector';

import { IVersion, VersionApi } from '../../../openapi/typescript-rxjs';
import IMG_LEANUP from '../../assets/logo.leanupjs.png';
import { Framework } from '../../models/framework.interface';
import { RouterService } from '../../services/router/service';
import { CLI_DETAILS, STARTUP_TIMESTAMP } from '../../shares/constant';
import { Filters } from '../../shares/filters';

export interface Props {
  test: string;
}

export interface ResolvedRoute {
  params?: { id: number };
  query?: any;
  url: string;
}

type Dummy = {
  date: Date;
  price: number;
};

const OPTIONAL_CHAINING = {
  ok: true,
  nok: null,
};

export class AppController extends AbstractController {
  public finishedRendering: number;
  public readonly filters /*: Filters */ = Filters; // Angular has a problem with this simple type annotation.
  public readonly versionApi: VersionApi = DI.get<VersionApi>('VersionApi');
  public readonly framework: Framework = DI.get<Framework>('Framework');
  public readonly dummies: Dummy = {
    date: new Date(2010, 3, 5),
    price: 123123123,
  };
  public readonly cli: Framework = CLI_DETAILS;
  public version: IVersion = { text: '1.0.0', major: 1, minor: 0, patch: 0 };
  public readonly stackImg: string = IMG_LEANUP as string;

  public constructor() {
    super();
    this.finishedRendering = Date.now() - STARTUP_TIMESTAMP;
    RouterService.navigate('series');
    const APP_METADATE = {
      author: '$$APP_AUTHOR$$',
      homepage: '$$APP_HOMEPAGE$$',
      name: '$$APP_NAME$$',
      version: '$$APP_VERSION$$',
    };
    console.log('APP_METADATE', APP_METADATE);
    try {
      console.log('OPTIONAL_CHAINING', OPTIONAL_CHAINING?.ok);
      console.log('OPTIONAL_CHAINING', OPTIONAL_CHAINING?.nok);
    } catch (error) {
      console.log(
        `Node, that legacy framework support depends sometimes to use a older typescript version without optional chaining support.`
      );
    }
    this.versionApi.versionGet().subscribe(
      (version: IVersion) => {
        this.version = version;
      },
      () => {
        console.info('Response catched and patched!');
        this.version = { text: '1.0.1', major: 1, minor: 0, patch: 1 };
      },
      () => {
        console.log('Version of OpenAPI:', this.version);
      }
    );
  }
}
