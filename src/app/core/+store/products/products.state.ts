import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { ProductModel } from 'src/app/products/model/product.model';

export interface ProductsState extends EntityState<ProductModel> {
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const productAdapter: EntityAdapter<ProductModel> = createEntityAdapter<
  ProductModel
>();

export const initianalProductState: ProductsState = productAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: null,
});
