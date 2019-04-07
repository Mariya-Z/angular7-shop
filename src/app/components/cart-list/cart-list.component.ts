import { Component, OnInit, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit, DoCheck {

  productList: ProductList[];

  constructor(public cartService: CartService) { }

  ngOnInit() {
    // this.productList = this.cartService.getAll();
  }

  ngDoCheck() {
    this.productList = this.cartService.getAll();
  }

  onRemove(i: number): void {
    this.cartService.removeProduct(i);
  }

  getNumber(): number {
    let amount  = 0;
    for (const i of this.productList) {
      amount  += i.quantity;
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

}
