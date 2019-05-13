import { Component, OnInit, OnDestroy } from '@angular/core';

// @rxjs
import { Store, select } from '@ngrx/store';
import { AppState, getSelectedProductByUrl } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';

// ngrx
import { Subscription } from 'rxjs';
import * as RouterActions from './../../../core/+store/router/router.actions';

import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  product: ProductModel = new ProductModel();
  isProductNew = true;
  private sub: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.sub = this.store.pipe(select(getSelectedProductByUrl)).subscribe(p => {
      this.product = p;
      if (this.product.id) {
        this.isProductNew = false;
      }
    });
  }

  ngOnDestroy() {
    // for service with Observable
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onProductSave() {
    const product = { ...this.product };
    if (this.isProductNew) {
      this.store.dispatch(new ProductsActions.CreateProduct(product));
    } else {
      this.store.dispatch(new ProductsActions.UpdateProduct(product));
    }
  }

  onGoBack() {
    this.store.dispatch(new RouterActions.Back());
  }
}
