import "./Product.css";

interface ProductProps {
  name: string;
  price: number;
  image: string;
}

function Product({ name, price, image }: ProductProps) {
  return (
    <div className="panel product">
      <img className="product__image" src={image} alt="Изображение товара" />
      <h3 className="product__name">{name}</h3>
      <p className="product__price">{price}</p>
    </div>
  );
}

export default Product;
