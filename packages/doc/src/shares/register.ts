import { DI } from '@leanup/lib/helpers/injector';

import { StorageService } from '../services/storage/service';

DI.register('StorageService', new StorageService());
