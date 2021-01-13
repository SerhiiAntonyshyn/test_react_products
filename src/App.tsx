import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './components/Loader/Loader';
import { ProductList } from './components/ProductList/ProductList';
import './App.scss';
import { fetchProducts } from './store';
import { getProducts } from './store/selectors';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        Product list from Amazon
      </div>
      {products.length === 0 ? (
        <Loader />
      ) : (
          <div className="App-content">
            <ProductList products={products} />
          </div>
        )}
    </div>
  )
};

export default App;
