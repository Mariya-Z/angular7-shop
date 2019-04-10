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

  @Input() product: Item;
  category = category.DRINK;

  constructor() { }

  ngOnInit() {
  }


}
