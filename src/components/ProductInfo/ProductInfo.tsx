import './ProductInfo.scss';


type ProductProps = {
  bsr_category: string,
  img: string,
  link: string,
  name: string,
  price: string,
};

export const ProductInfo: React.FC<ProductProps> = ({
  bsr_category,
  img,
  link,
  name,
  price,
}) => {
  return (
    <div className="product">
      <div className="main-content">
        <div className="name">
          {name}
        </div>
        <div className="category">
          Category: {bsr_category}
        </div>
      </div>
      <div className="product-image">
        <figure className="image is-4by3">
          <img
            src={img}
            alt="Product logo"
          />
        </figure>
      </div>
      <div className="extra-content">
        <p className="price">{price}$</p>
        <br />
        <a
          className="link"
          href={link}
        >
          AMAZON LINK
          </a>
      </div>
    </div>
  )
};
