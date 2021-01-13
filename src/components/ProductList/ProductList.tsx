import './ProductList.scss';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { Product } from '../../helpers/interfaces';

type ProductListProps = {
  products: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
  <div className="products">
    {products.map(product => (
      <ProductInfo key={product.asin} {...product} />
    ))}
  </div>
  )
};
