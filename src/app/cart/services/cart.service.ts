import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productList: ProductList[] = [];
  public productNumber = 0;
  public productSum = 0;

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
    this.getNumber();
    this.getSum();
  }

  removeProduct(i: number) {
    if (i >= 0) {
      if (this.productList[i].quantity > 1) {
        this.productList[i].quantity -= 1;
      } else {
        this.productList.splice(i, 1);
      }
    }
    this.getNumber();
    this.getSum();
  }

  getAll(): ProductList[] {
    return this.productList;
  }

  getNumber(): void {
    let amount = 0;
    for (const i of this.productList) {
      amount += i.quantity;
    }
    this.productNumber = amount;
  }

  getSum(): void {
    let price = 0;
    for (const i of this.productList) {
      price += i.item.price * i.quantity;
    }
    this.productSum = price;
  }

  addProduct(addingProduct: ProductList): void {
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
    this.getNumber();
    this.getSum();
  }

  increase(addingProduct: ProductList) {
    let i = -1;
    this.productList.forEach((product, index) => {
      if (product.item === addingProduct.item) {
        i = index;
      }
    });
    if (i >= 0) {
      this.productList[i].quantity += 1;
    }
    this.getNumber();
    this.getSum();
  }

  decrease(addingProduct: ProductList) {
    let i = -1;
    this.productList.forEach((product, index) => {
      if (product.item === addingProduct.item) {
        i = index;
      }
    });
    if (i >= 0) {
      if (this.productList[i].quantity > 1) {
        this.productList[i].quantity -= 1;
      } else {
        this.productList.splice(i, 1);
      }
    }
    this.getNumber();
    this.getSum();
  }

  removeAll(): void {
    this.productList = [];
  }
}
