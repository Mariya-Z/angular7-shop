import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList = [];

  buyProduct(item): void {
    // this.productList.push(item);
  }

  getAll(): Array<any> {
    return this.productList;
  }

  constructor() { }
}
