import { Injectable } from '@angular/core';

interface Item {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  ingredients: string[];
}

const tomato = {
  name: 'tomato',
  description: 'best choise for salad',
  price: 1,
  isAvailable: true,
  ingredients: ['water', 'vitamins']
} as Item;

const cucumber = {
  name: 'cucumber',
  description: 'best choise for salad',
  price: 1.15,
  isAvailable: true,
  ingredients: ['water', 'vitamins']
} as Item;

const products = [tomato, cucumber];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(): Array<any> {
    return products;
  }

  constructor() { }
}
