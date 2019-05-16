import { Component, ChangeDetectionStrategy, DoCheck } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductList } from './../../../core/interfaces/product-list';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements DoCheck {
  productList: ProductList[];
  productNumber: number;
  productSum: number;
  selectedOption: string;

  constructor(public cartService: CartService) {}

  ngDoCheck() {
    this.productList = this.cartService.getAll();
    this.productNumber = this.cartService.productNumber;
    this.productSum = this.cartService.productSum;
  }

  onRemove(product: ProductList): void {
    this.cartService.removeProduct(this.productList.indexOf(product));
  }

  onRemoveAll(): void {
    this.cartService.removeAll();
  }

  decrease(product: ProductList): void {
    this.cartService.decrease(product);
  }

  increase(product: ProductList): void {
    this.cartService.increase(product);
  }

  // add(): void {
  //   this.cartService.addProduct({item: this.productList[0].item, quantity: 10});
  // }
}
