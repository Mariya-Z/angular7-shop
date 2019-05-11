import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getRouterState } from './../router';
import { ProductModel } from './../../../products/model/product.model';
import { ProductsState } from './products.state';

export const getProductsState = createFeatureSelector<ProductsState>(
  'products',
);
export const getProductData = createSelector(
  getProductsState,
  (state: ProductsState) => state.products,
);
export const getProductError = createSelector(
  getProductsState,
  (state: ProductsState) => state.error,
);
export const getProductLoaded = createSelector(
  getProductsState,
  (state: ProductsState) => state.loaded,
);
export const getSelectedProductByUrl = createSelector(
  getProductData,
  getRouterState,
  (products, router): ProductModel => {
    const productID = router.state.params.productID;
    if (productID) {
      return products.find(p => p.id === +productID);
    } else {
      return new ProductModel();
    }
  },
);
