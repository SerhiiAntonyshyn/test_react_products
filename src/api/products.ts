const PRODUCTS_URL = 'https://97e6625a-5619-4329-a71a-c6c69742f089.mock.pstmn.io/products';

export const productsFromServer = () => {
  let products;
  products = fetch(`${PRODUCTS_URL}`)
    .then(promise => promise.json())
    .then(result => result.products);
  
  return products;
}
