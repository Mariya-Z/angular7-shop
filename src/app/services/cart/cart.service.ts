import { Injectable } from '@angular/core';

// const productList: ProductList[] = [];

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
    console.log(this.productList);
  }

  removeProduct(item: Item) {
    let i = -1;
    this.productList.forEach((product, index) => {
      if (product.item === item) {
        i = index;
      }
    });
    console.log(i);
    if (i >= 0 && this.productList[i].quantity > 1) {
      this.productList[i].quantity -= 1;
    } else if (i >= 0) {
      delete this.productList[i];
    }
    console.log(this.productList);
  }

  getAll(): ProductList[] {
    return this.productList;
  }

  constructor() { }
}
