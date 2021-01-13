import { createStore, combineReducers, applyMiddleware, Dispatch } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { productsFromServer } from '../api/products';
import productsReducer, { setProducts } from './products';

const rootReducer = combineReducers({
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const fetchProducts = () => {
  return async(dispatch: Dispatch<any>) => {
    const products = await productsFromServer();
    dispatch(setProducts(products));
  }
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
