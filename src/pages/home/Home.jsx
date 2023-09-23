import React from "react";
import "./home.scss";
import { socialVertical, paginition, homeImg } from "../../assets";

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <span>LEANGROUP - тубы и этикетки</span>
        <h1>Ламинатные тубы</h1>
        <p>
          Используются для производства зубных паст. Широко применяются в
          сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии
          и DIY (Do-it-Yourself).
        </p>
        <img src={socialVertical} className="socialVer" alt="Eror" />
        <img src={paginition} className="paginition" alt="Eror" />
        <button>Каталог</button>
      </div>
    </section>
  );
};

export default Home;
