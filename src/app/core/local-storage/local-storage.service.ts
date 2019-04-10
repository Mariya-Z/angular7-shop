import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
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
