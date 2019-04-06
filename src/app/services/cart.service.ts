import { Injectable } from '@angular/core';

interface Item {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  ingredients: string[];
}

const productList: Item[] = [];

@Injectable({
  providedIn: 'root'
})
export class CartService {

  buyProduct(item: Item): void {
    productList.push(item);
    console.log(productList);
  }

  getAll(): Array<Item> {
    return productList;
  }

  constructor() { }
}
