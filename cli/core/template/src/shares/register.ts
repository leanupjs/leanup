import { DI } from '@leanup/features/injector';

import { MeasurementService } from '../services/measurements/service';
import { StorageService } from '../services/storage/service';

DI.register('StorageService', new StorageService());
DI.register('MeasurementService', new MeasurementService());
