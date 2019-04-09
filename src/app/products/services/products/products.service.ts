import { Injectable } from '@angular/core';

const tomato = {
  name: 'tomato',
  description: 'best choise for salad',
  price: 1,
  isAvailable: true,
  ingredients: ['water', 'vitamins']
} as Item;

const soup = {
  name: 'borsh',
  description: 'national soup',
  price: 15,
  isAvailable: false,
  ingredients: ['water', 'beet', 'potato', 'cabbage', 'carrot']
} as Item;

const cucumber = {
  name: 'cucumber',
  description: 'best choise for salad',
  price: 1.5,
  isAvailable: true,
  ingredients: ['water', 'vitamins']
} as Item;

const products = [tomato, soup, cucumber];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<any> {
    return products;
  }

  constructor() { }
}
