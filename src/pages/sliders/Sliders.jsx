import React, { Component } from "react";
import Slider from "react-slick";
import "./sliders.scss";
import {
  slideImg1,
  slideImg2,
  slideImg3,
  slideImg4,
  slideImg5,
} from "../../assets";

class Sliders extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <section className="sliders-section">
        <div className="container">
          <div className="sliders-title">
            <h1>
              Качество продукции подтверждают
              <b>сертификаты</b>
            </h1>
          </div>
          <div className="sliders-body">
            <Slider {...settings}>
              <div>
                <img src={slideImg1} alt="Eror" />
              </div>
              <div>
                <img src={slideImg2} alt="Eror" />
              </div>
              <div>
                <img src={slideImg3} alt="Eror" />
              </div>
              <div>
                <img src={slideImg4} alt="Eror" />
              </div>
              <div>
                <img src={slideImg5} alt="Eror" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Sliders;
