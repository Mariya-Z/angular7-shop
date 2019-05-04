import { Injectable } from '@angular/core';

import { CoreServicesModule } from '../core-services.module';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: CoreServicesModule,
})
export class AppSettingsService {
  settings = [];

  constructor(private localStorageService: LocalStorageService) {}
}
