import React from "react";
import "./footer.scss";
import { logo, socialGorizantal } from "../../assets";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-imgs flex-class">
          <img src={logo} alt="Eror" />
          <img src={socialGorizantal} alt="Eror" />
        </div>
        <hr />
        <div className="footer-grids flex-class">
          <div className="grids-1 grid-class">
            <div className="grid">
              <ul>
                <li className="selected">Продукция</li>
                <li>
                  <a href="eaffwef">Ламинатные тубы</a>
                </li>
                <li>
                  <a href="eaffwef">Экструзионные тубы</a>
                </li>
                <li>
                  <a href="eaffwef">Другая упаковка</a>
                </li>
              </ul>
            </div>
            <div className="grid">
              <ul>
                <li className="selected">Компания</li>
                <li>
                  <a href="eaffwef">О нас</a>
                </li>
                <li>
                  <a href="eaffwef">Наша команда</a>
                </li>
                <li>
                  <a href="eaffwef">Сертификаты</a>
                </li>
              </ul>
            </div>
            <div className="grid">
              <ul>
                <li className="selected">Разделы</li>
                <li>
                  <a href="eaffwef">Контакты</a>
                </li>
                <li>
                  <a href="eaffwef">Новости</a>
                </li>
                <li>
                  <a href="eaffwef">Вакансии</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grids-2 grid-class">
            <div className="grid2">
              <ul>
                <li className="selected2">Беларусь</li>
                <li>
                  <a href="jbgn">+375 (17) 270 53 77</a>
                </li>
                <li>
                  <a href="tigjei">+345 (12) 358 73 87</a>
                </li>
              </ul>
            </div>
            <div className="grid2">
              <ul>
                <li className="selected2">Европа</li>
                <li>
                  <a href="jbgn">+375 (17) 274 54 72</a>
                </li>
                <li>
                  <a href="tigjei">+375 (57) 570 33 77</a>
                </li>
              </ul>
            </div>
            <div className="grid2">
              <ul>
                <li className="selected2">Москва</li>
                <li>
                  <a href="jbgn">+375 (54) 233 77 57</a>
                </li>
              </ul>
            </div>
            <div className="grid2">
              <ul>
                <li className="selected2">Екатеринбург</li>
                <li>
                  <a href="tigjei">+375 (17) 230 67 43</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
            сайтов SkyWeb.by
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
