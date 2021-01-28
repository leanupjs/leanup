import { DI } from '@leanup/lib/helpers/injector';

import { VersionApi } from '../assets/openapi/typescript-rxjs';
import { MeasurementService } from '../services/measurements/service';
import { RouterService } from '../services/router/service';
import { StorageService } from '../services/storage/service';

// RouterService is an example as static class.
DI.register('RouterService', RouterService);

DI.register('StorageService', new StorageService());
DI.register('MeasurementService', new MeasurementService());
DI.register('VersionApi', new VersionApi());
