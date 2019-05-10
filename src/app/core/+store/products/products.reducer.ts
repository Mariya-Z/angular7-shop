import { initianalProductState, ProductsState } from './products.state';
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
      return {
        ...state,
        products,
        loading: false,
        loaded: true,
      };
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

    case ProductsActionTypes.GET_PRODUCT: {
      console.log('GET_PRODUCT action being handled!');
      return {
        ...state,
        loading: true,
      };
    }

    case ProductsActionTypes.GET_PRODUCT_SUCCESS: {
      console.log('GET_PRODUCT_SUCCESS action being handled!');
      const selectedProduct = { ...(action.payload as ProductModel) };

      return {
        ...state,
        selectedProduct,
        loading: false,
        loaded: true,
      };
    }

    case ProductsActionTypes.GET_PRODUCT_ERROR: {
      console.log('GET_PRODUCT_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT: {
      console.log('CREATE_PRODUCT action being handled!');
      return { ...state };
    }

    case ProductsActionTypes.UPDATE_PRODUCT: {
      console.log('UPDATE_PRODUCT action being handled!');
      return { ...state };
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      console.log('UPDATE_PRODUCT_SUCCESS action being handled!');
      const product = { ...action.payload as ProductModel};
      const products = [ ...state.products];
      const i = products.findIndex(p => p.id === product.id);
      products[i] = product;
      return {
        ...state,
        products,
      };
    }

    case ProductsActionTypes.UPDATE_PRODUCT_ERROR: {
      console.log('UPDATE_PRODUCT_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error,
      };
    }

    case ProductsActionTypes.DELETE_PRODUCT: {
      console.log('DELETE_PRODUCT action being handled!');
      return { ...state };
    }

    default: {
      console.log('UNKNOWN_TASK action being handled!');
      return state;
    }
  }
}
