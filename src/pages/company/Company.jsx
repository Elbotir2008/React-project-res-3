import React from "react";
import { videoImg, pauseBtn } from "../../assets";
import "./company.scss";

const Company = () => {
  return (
    <section className="company-section">
      <div className="container">
        <div className="company-title">
          <h1>
            О компании
            <b>LEANGROUP</b>
          </h1>
        </div>
        <div className="company-body flex-class">
          <div className="company-img">
            <img src={videoImg} alt="Eror" />
            <img src={pauseBtn} alt="Eror" />
          </div>
          <div className="company-text">
            <p>
              Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
              сегодняшний день является ведущей компанией по производству
              ламинатных и экструзионных туб.
            </p>
            <br />
            <p>
              {" "}
              Имея две технологии – для производства ламинатных и экструзионных
              туб, мы предлагаем вам широкий спектр возможностей. Большим
              преимуществом является собственный печатный цех в ламинате и
              in-line печать в экструзии с возможностью различных дополнительных
              опций декора. Особое внимание уделяется работе с поставщиками для
              контроля и поддержания качества производимой нами продукции.
            </p>
            <br />
            <p>
              {" "}
              С января 2018 года компания стала членом Европейской Ассоциации
              производителей туб (ETMA), что подтверждает сильную позицию бренда
              и на рынке Европы.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
