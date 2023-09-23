import React from "react";
import "./products.scss";
import {
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
} from "../../assets";

const Products = () => {
  return (
    <section className="products-section">
      <div className="container">
        <div className="products-title">
          <h1>
            Наша <b>продукция</b>
          </h1>
          <div className="flex-class btnFlex">
            <button>Ламинатные тубы</button>
            <button className="myBtn">Экструзионные тубы</button>
            <button>Другая упаковка</button>
          </div>
        </div>
        <div className="products-body flex-class">
          <img src={productImg1} alt="Eror" />
          <img src={productImg2} alt="Eror" />
          <img src={productImg3} alt="Eror" />
          <img src={productImg4} alt="Eror" />
          <img src={productImg5} alt="Eror" />
        </div>
        <button className="btnProduct">Перейти в каталог</button>
      </div>
    </section>
  );
};

export default Products;
