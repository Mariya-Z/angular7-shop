import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productList: ProductList[] = [];

  buyProduct(item: Item): void {
    let i = -1;
    this.productList.forEach((product, index) => {
      if (product.item === item) {
        i = index;
      }
    });
    if (i >= 0) {
      this.productList[i].quantity += 1;
    } else {
      this.productList.push({item, quantity: 1});
    }
  }

  removeProduct(i: number) {
    if (i >= 0) {
      if (this.productList[i].quantity > 1) {
        this.productList[i].quantity -= 1;
      } else {
        this.productList.splice(i, 1);
      }
    }
  }

  getAll(): ProductList[] {
    return this.productList;
  }

  constructor() { }
}
