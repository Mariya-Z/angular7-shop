import {
  productAdapter,
  initianalProductState,
  ProductsState,
} from './products.state';
import { ProductsActions, ProductsActionTypes } from './products.actions';
import { ProductModel } from 'src/app/products/model/product.model';

export function productsReducer(
  state = initianalProductState,
  action: ProductsActions,
): ProductsState {
  console.log(`Reducer: Action came in! ${action.type}`);
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS: {
      console.log('GET_PRODUCTS action being handled!');
      return {
        ...state,
        loading: true,
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      console.log('GET_PRODUCTS_SUCCESS action being handled!');
      const products = [...(action.payload as Array<ProductModel>)];
      return productAdapter.addAll(products, {
        ...state,
        loading: false,
        loaded: true,
      });
    }

    case ProductsActionTypes.GET_PRODUCTS_ERROR: {
      console.log('GET_PRODUCTS_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      console.log('CREATE_PRODUCT_SUCCESS action being handled!');
      const product = { ...(action.payload as ProductModel) };
      return productAdapter.addOne(product, state);
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      console.log('UPDATE_PRODUCT_SUCCESS action being handled!');
      const product = { ...(action.payload as ProductModel) };

      return productAdapter.updateOne(
        {
          id: product.id,
          changes: product,
        },
        state,
      );
    }

    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
      console.log('DELETE_PRODUCT_SUCCESS action being handled!');
      const product = { ...(action.payload as ProductModel) };
      return productAdapter.removeOne(product.id, state);
    }

    case ProductsActionTypes.CREATE_PRODUCT_ERROR:
    case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
    case ProductsActionTypes.DELETE_PRODUCT_ERROR: {
      console.log('CREATE UPDATE DELETE PRODUCT_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error,
      };
    }

    default: {
      console.log('UNKNOWN_TASK action being handled!');
      return state;
    }
  }
}
