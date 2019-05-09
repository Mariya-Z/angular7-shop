import { Injectable } from '@angular/core';

// @ngrx
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ProductsActions from './products.actions';

// rxjs
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import { ProductHttpService } from 'src/app/products';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
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
}
