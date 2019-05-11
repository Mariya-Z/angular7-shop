import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// @ngrx
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';

// rxjs
import { Observable } from 'rxjs';
import { concatMap, pluck, switchMap } from 'rxjs/operators';

import { ProductHttpService } from 'src/app/products';
import { ProductModel } from './../../../products/model/product.model';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private productHttpService: ProductHttpService,
  ) {
    console.log('[Products Effects]');
  }

  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.GetProducts>(
      ProductsActions.ProductsActionTypes.GET_PRODUCTS,
    ),
    switchMap((action: ProductsActions.GetProducts) =>
      this.productHttpService
        .getProducts()
        .then(products => {
          this.productHttpService.isDisplayed = false;
          return new ProductsActions.GetProductsSuccess(products);
        })
        .catch(err => new ProductsActions.GetProductsError(err)),
    ),
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.UpdateProduct>(
      ProductsActions.ProductsActionTypes.UPDATE_PRODUCT,
    ),
    pluck('payload'),
    concatMap((payload: ProductModel) =>
      this.productHttpService
        .updateProduct(payload)
        .then(product => {
          this.router.navigate(['/product-list']);
          return new ProductsActions.UpdateProductSuccess(product);
        })
        .catch(err => new ProductsActions.UpdateProductError(err)),
    ),
  );

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProduct>(
      ProductsActions.ProductsActionTypes.CREATE_PRODUCT,
    ),
    pluck('payload'),
    switchMap((payload: ProductModel) =>
      this.productHttpService
        .createProduct(payload)
        .then(product => {
          this.router.navigate(['/product-list']);
          return new ProductsActions.CreateProductSuccess(product);
        })
        .catch(err => new ProductsActions.CreateProductError(err)),
    ),
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.DeleteProduct>(
      ProductsActions.ProductsActionTypes.DELETE_PRODUCT,
    ),
    pluck('payload'),
    concatMap((payload: ProductModel) =>
      this.productHttpService
        .deleteProduct(payload)
        .then(() => {
          return new ProductsActions.DeleteProductSuccess(payload);
        })
        .catch(err => new ProductsActions.DeleteProductError(err)),
    ),
  );
}
