import { Component, OnInit, Input } from '@angular/core';

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
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() isAvailable: boolean;
  @Input() ingredients: string[];
  category = category.DRINK;

  constructor() { }

  ngOnInit() {
  }


}
