import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
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
      this.productList.push({ item, quantity: 1 });
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

  getNumber(): number {
    let amount = 0;
    for (const i of this.productList) {
      amount += i.quantity;
    }
    return amount;
  }

  getSum(): number {
    let price = 0;
    for (const i of this.productList) {
      price += i.item.price * i.quantity;
    }
    return price;
  }

  addItem(addingProduct: ProductList): void {
    let i = -1;
    this.productList.forEach((product, index) => {
      if (product.item === addingProduct.item) {
        i = index;
      }
    });
    if (i >= 0) {
      this.productList[i].quantity += addingProduct.quantity;
    } else {
      this.productList.push({ item: addingProduct.item, quantity: addingProduct.quantity });
    }
  }

  changeQuantity(item: Item): void {

  }

  removeAll(): void {
    this.productList = [];
  }
}
