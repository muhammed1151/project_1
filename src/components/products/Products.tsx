import "./products.css";

interface IProducts {
  src: string;
  productName: string;
  price: string;
}

const ProductCard = ({ src, productName, price }: IProducts) => {
  return (
    <div className="products-card">
      <div className="img-holder">
        <img src={src} alt={productName} />
      </div>
      <div className="details-holder">
        <h4 className="product-name">{productName}</h4>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
