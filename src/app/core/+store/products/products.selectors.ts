import { createFeatureSelector, createSelector } from '@ngrx/store';

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
export const getSelectedProduct = createSelector(
  getProductsState,
  (state: ProductsState) => state.selectedProduct,
);
export const getProductLoaded = createSelector(
  getProductsState,
  (state: ProductsState) => state.loaded,
);
