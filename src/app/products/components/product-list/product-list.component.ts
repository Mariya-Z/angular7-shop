import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// @ngrx
import { Store, select } from '@ngrx/store';
import { AppState, getProductData, getProductError } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';

import { Observable } from 'rxjs';

import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<ReadonlyArray<ProductModel>>;
  productsError$: Observable<Error | string>;

  constructor(
    public cartService: CartService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    console.log('We have a store! ', this.store);
    this.products$ = this.store.pipe(select(getProductData));
    this.productsError$ = this.store.pipe(select(getProductError));
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  onBuy(item: Item): void {
    this.cartService.buyProduct(item);
    console.log('You have bought ' + item.name);
  }

  onView(item: Item): void {
    const link = ['/product', item.id];
    this.router.navigate(link);
  }

  onEditProduct(item: Item): void {
    const link = ['product/edit', item.id];
    this.router.navigate(link);
  }

  onDelete(product: ProductModel): void {
    this.store.dispatch(new ProductsActions.DeleteProduct(product));
  }
}
