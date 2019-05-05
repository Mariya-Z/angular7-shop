import { initianalProductState, ProductsState } from './products.state';
import { ProductsActions, ProductsActionTypes } from './products.actions';

export function productsReducer(
  state = initianalProductState,
  action: ProductsActions,
): ProductsState {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS: {
      console.log('GET_PRODUCTS action being handled!');
      return { ...state };
    }

    case ProductsActionTypes.GET_PRODUCT: {
      console.log('GET_PRODUCT action being handled!');
      return { ...state };
    }

    case ProductsActionTypes.CREATE_PRODUCT: {
      console.log('CREATE_PRODUCT action being handled!');
      return { ...state };
    }

    case ProductsActionTypes.UPDATE_PRODUCT: {
      console.log('UPDATE_PRODUCT action being handled!');
      return { ...state };
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
