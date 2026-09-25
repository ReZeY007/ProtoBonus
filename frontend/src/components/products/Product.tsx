import "./Product.css";

function Product() {
  return (
    <div className="panel product">
      <img className="product__image" src="" alt="Изображение товара" />
      <h3 className="product__name">Название</h3>
      <p className="product__price">Цена</p>
    </div>
  );
}

export default Product;
