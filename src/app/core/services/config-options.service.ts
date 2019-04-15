import { Injectable } from '@angular/core';
import { CoreServicesModule } from '../core-services.module';

export class Config {
  id: number;
  login: string;
  email: string;
  user: string;
}

@Injectable({
  providedIn: CoreServicesModule,
})
export class ConfigOptionsService {
  config: Config = new Config();

  setConfig(conf) {
    this.config = { ...conf };
    console.log('Config has been setted');
  }

  getConfig(): Config {
    return { ...this.config };
  }
}
