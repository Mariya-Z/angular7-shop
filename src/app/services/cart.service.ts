import { Injectable } from '@angular/core';

const productList = [];

@Injectable({
  providedIn: 'root'
})
export class CartService {

  buyProduct(item): void {
    productList.push(item);
    console.log(productList);
  }

  getAll(): Array<any> {
    return productList;
  }

  constructor() { }
}
