import Product from "../../components/products/Product";
import "./Shop.css";

function Shop() {
  return (
    <>
      <div className="search-params">
        <div className="search">
          <input className="search-bar" placeholder="Поиск" />
          <button className="accent">Найти</button>
        </div>
        <div className="filters"></div>
      </div>
      <div className="shop-content">
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
        <Product name="Товар" price={1000} image="f" />
      </div>
    </>
  );
}

export default Shop;
