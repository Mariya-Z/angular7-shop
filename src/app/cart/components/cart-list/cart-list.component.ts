import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  DoCheck,
  OnChanges,
} from '@angular/core';
import { CartService } from 'src/app/cart/services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnChanges, DoCheck {
  productList: ProductList[];
  productNumber: number;
  productSum: number;

  constructor(public cartService: CartService) {}

  ngOnChanges() {
    this.productList = this.cartService.getAll();

  }

  ngDoCheck() {
    this.productList = this.cartService.getAll();
    this.productNumber = this.cartService.getNumber();
    this.productSum = this.cartService.getSum();
  }

  onRemove(product: ProductList): void {
    this.cartService.removeProduct(this.productList.indexOf(product));
  }

  onRemoveAll(): void {
    this.cartService.removeAll();
  }
}
