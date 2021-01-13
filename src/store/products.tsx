import { AnyAction } from 'redux';
import { Product } from '../helpers/interfaces';

const PRODUCTS = 'PRODUCTS';

export const setProducts = (products: Product[]) => ({ type: PRODUCTS, products });

const reducer = (products = [], action: AnyAction) => {
  switch (action.type) {
    case PRODUCTS:
      return action.products;

    default:
      return products;
  }
};

export default reducer;
