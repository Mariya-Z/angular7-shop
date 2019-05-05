import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// @ngrx
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/core/+store';

import { Observable } from 'rxjs';

import { CartService } from 'src/app/cart/services/cart.service';
import { ProductHttpService } from '../../services';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Observable<ProductModel[]>;
  // : Promise<ProductModel[]>;
  productsState$: Observable<ProductModel>;

  constructor(
    public cartService: CartService,
    private router: Router,
    private store: Store<AppState>,
    private productHttpService: ProductHttpService,
  ) {}

  ngOnInit() {
    console.log('We have a store! ', this.store);
    this.productsState$ = this.store.pipe(select('products'));
    // this.productList = this.productHttpService.getProducts();
    this.productHttpService.isDisplayed = false;
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
    this.productList = this.productHttpService.deleteProduct(product);

    // for service with Promise
    //   this.productHttpService
    //     .deleteProduct(product)
    //     .then(() => (this.productList = this.productHttpService.getProducts()))
    //     .catch(error => console.log(error));
  }
}
