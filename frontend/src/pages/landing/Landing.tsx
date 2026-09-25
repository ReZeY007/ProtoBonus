import Product from "../../components/products/Product";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <h1>
        ПротоБонус - место, где ты можешь получить подарки за успехи в учёбе.
      </h1>
      <div className="popular-products">
        <h2>Популярное</h2>
        <div className="popular-products__content">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Landing;
