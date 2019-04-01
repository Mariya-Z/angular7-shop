import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  onBuy(): void {
    this.cartService.buyProduct('item');
    console.log('You have bought ' + this.name);
  }

}
