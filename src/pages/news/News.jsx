import React from "react";
import "./news.scss";
import { nevostiImg1, nevostiImg2, nevostiImg3 } from "../../assets";

const News = () => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="news-title">
          <h1>Новости</h1>
        </div>
        <div className="news-body flex-class">
          <div className="news-card">
            <img src={nevostiImg1} alt="Eror" />
            <p>28.01.2022</p>
            <h6>"ЛеанГрупп" серебряный призер EcoVadis!</h6>
          </div>
          <div className="news-card">
            <img src={nevostiImg2} alt="Eror" />
            <p>21.01.2022</p>
            <h6>"ЛеанГрупп" серебряный призер EcoVadis!</h6>
          </div>
          <div className="news-card">
            <img src={nevostiImg3} alt="Eror" />
            <p>16.12.2021</p>
            <h6>Туба, как вид упаковки</h6>
          </div>
        </div>
        <button>Все новости</button>
      </div>
    </section>
  );
};

export default News;
