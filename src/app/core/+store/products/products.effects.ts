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
  getProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.GetProduct>(
      ProductsActions.ProductsActionTypes.GET_PRODUCT,
    ),
    pluck('payload'),
    switchMap(payload =>
      this.productHttpService
        .getProduct(+payload)
        .then(product => new ProductsActions.GetProductSuccess(product))
        .catch(err => new ProductsActions.GetProductError(err)),
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
}
