import { ProductModel } from 'src/app/products/model/product.model';

export interface ProductsState {
  products: ReadonlyArray<ProductModel>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initianalProductState: ProductsState = {
  products: [],
  loading: false,
  loaded: false,
  error: null,
};
