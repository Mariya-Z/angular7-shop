import { Action } from '@ngrx/store';
import { ProductModel } from 'src/app/products/model/product.model';

export enum ProductsActionTypes {
  GET_PRODUCTS = '[Products]  GET_PRODUCTS',
  GET_PRODUCT = '[Products]  GET_PRODUCT',
  CREATE_PRODUCT = '[Products]  CREATE_PRODUCT',
  UPDATE_PRODUCT = '[Products]  UPDATE_PRODUCT',
  DELETE_PRODUCT = '[Products]  DELETE_PRODUCT',
}

export class GetProducts implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS;
}

export class GetProduct implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCT;
  constructor(public payload: number) {}
}

export class CreateProduct implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT;
  constructor(public payload: ProductModel) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT;
  constructor(public payload: ProductModel) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductsActionTypes.DELETE_PRODUCT;
  constructor(public payload: ProductModel) {}
}

export type ProductsActions =
  | GetProducts
  | GetProduct
  | CreateProduct
  | UpdateProduct
  | DeleteProduct;
