import React from "react";
import "./information.scss";
import { name, icon } from "../../assets";
const Information = () => {
  return (
    <section className="infromation-section">
      <div className="container">
        <div className="inf-text">
          <h1>
            Получить подробную <b> информацию</b>
          </h1>
          <p>
            Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
            время
          </p>
          <div className="flex-class flexForm">
            <img src={name} alt="Eror" />
            <input type="text" placeholder="Ваше имя" />
            <img src={icon} className="icon" alt="Eror" />
            <input type="text" placeholder="+375 (29) 0000000" />
          </div>
          <div className="form-btns">
            <textarea placeholder="Комментарий"></textarea>
            <button>Получить информацию</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
