import { Injectable } from '@angular/core';
import { CoreServicesModule } from '../core-services.module';

@Injectable({
  providedIn: CoreServicesModule,
})
export class LocalStorageService {
  setItem(item: Item): void {
    localStorage.setItem(item.name, JSON.stringify(item));
    console.log('setItem has been called');
  }

  getItem(item: Item): any {
    console.log(localStorage.getItem(item.name));
    console.log('getItem has been called');
  }

  removeItem(item: Item): void {
    localStorage.removeItem(item.name);
    console.log('removeItem has been called');
  }

  saveSettings(key: string, items: Array<any>) {
    localStorage.setItem(key, JSON.stringify(items));
  }

  getSettings(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
