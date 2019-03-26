import { Component, OnInit } from '@angular/core';

export enum category {
  FOOD,
  DRINK,
  CLOTHERS
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  name: string = 'Cappuccino';
  description: string = 'descr';
  price: number = 4;
  
  // category: enum;
  // (Создайте enum с несколькими категориями) https://www.typescriptlang.org/docs/handbook/enums.html
  isAvailable: boolean = true;
  ingredients: string[] = ['coffee', 'milk'];

  constructor() { }

  ngOnInit() {
  }

  onBuy(): void {
    console.log('You have bought ' + this.name);
  }

}
