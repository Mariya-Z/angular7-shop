import { Injectable } from '@angular/core';

const tomato = {
  id: 1,
  name: 'tomato',
  description: 'best choise for salad',
  price: 1,
  isAvailable: true,
  ingredients: ['water', 'vitamins'],
  weight: 100,
} as Item;

const soup = {
  id: 2,
  name: 'borsh',
  description: 'national soup',
  price: 15,
  isAvailable: false,
  ingredients: ['water', 'beet', 'potato', 'cabbage', 'carrot'],
} as Item;

const cucumber = {
  id: 3,
  name: 'cucumber',
  description: 'best choise for salad',
  price: 1.5,
  isAvailable: true,
  ingredients: ['water', 'vitamins'],
  weight: 150,
} as Item;

const productList = [tomato, soup, cucumber];
const productListPromise = Promise.resolve(productList);

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  isDisplayed = false;
  getProducts(): Promise<Item[]> {
    return productListPromise;
  }

  getProduct(id: number): Promise<Item> {
    return this.getProducts()
      .then(items => items.find(item => item.id === id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }

  createProduct(product: Item): void {
    productList.push(product);
  }
}
