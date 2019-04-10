import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class LocalStorageService {
  item: any;

  setItem(value: any): void {
    this.item = value;
  }
  getItem(): any {
    return this.item;
  }
  removeItem(): void {
    this.item = '';
  }
}
