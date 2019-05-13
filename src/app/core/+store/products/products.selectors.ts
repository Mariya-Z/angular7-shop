import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getRouterState } from './../router';
import { ProductModel } from './../../../products/model/product.model';
import { productAdapter, ProductsState } from './products.state';

export const getProductsState = createFeatureSelector<ProductsState>(
  'products',
);
export const {
  selectEntities: getProductsEntities,
  selectAll: getProductData,
} = productAdapter.getSelectors(getProductsState);

export const getProductError = createSelector(
  getProductsState,
  (state: ProductsState) => state.error,
);
export const getProductLoaded = createSelector(
  getProductsState,
  (state: ProductsState) => state.loaded,
);
export const getSelectedProductByUrl = createSelector(
  getProductsEntities,
  getRouterState,
  (products, router): ProductModel => {
    const productID = router.state.params.productID;
    if (productID) {
      return products[productID];
    } else {
      return new ProductModel();
    }
  },
);
