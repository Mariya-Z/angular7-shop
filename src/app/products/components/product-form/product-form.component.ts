import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// @rxjs
import { Store, select } from '@ngrx/store';
import { AppState, getSelectedProductByUrl } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';

// ngrx
import { Subscription } from 'rxjs';

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

  constructor(
    private store: Store<AppState>,
    private location: Location,
  ) {}

  ngOnInit() {
    this.sub = this.store
      .pipe(select(getSelectedProductByUrl))
      .subscribe(p => this.product = p);
    // this.route.data.subscribe(data => {
    //   console.log(data);
    //   if (Object.keys(data).length !== 0) {
    //     this.product = { ...data.product };
    //     this.isProductNew = false;
    //   }
    // });
  }

  ngOnDestroy() {
    // for service with Observable
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onProductSave() {
    // for service with Observable
    // const product = { ...this.product };
    // const method = this.isProductNew ? 'createProduct' : 'updateProduct';
    // this.sub = this.productHttpService[method](product).subscribe(
    //   () =>
    //     product.id
    //       ? this.router.navigate(['product', { editedProductID: product.id }])
    //       : this.onGoBack(),
    //   (error: any) => console.log(error),
    // );

    // for service with promise
    const product = { ...this.product };
    if (this.isProductNew) {
      this.store.dispatch(new ProductsActions.CreateProduct(product));
    } else {
      this.store.dispatch(new ProductsActions.UpdateProduct(product));
    }
  }

  onGoBack() {
    // this.router.navigate(['./../../../'], { relativeTo: this.route });
    this.location.back();
  }
}
