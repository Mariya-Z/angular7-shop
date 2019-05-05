import { ProductModel } from 'src/app/products/model/product.model';

export interface ProductsState {
  products: ReadonlyArray<ProductModel>;
}

export const initianalProductState: ProductsState = {
  products: [
    new ProductModel(
      1,
      'tomato',
      'best choise for salad',
      1,
      true,
      '\'water\', \'vitamins\'',
      100,
    ),
  ],
};
