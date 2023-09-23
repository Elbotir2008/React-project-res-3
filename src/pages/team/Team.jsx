import React from "react";
import "./team.scss";
import { person1, person2, person3, person4, person5 } from "../../assets";

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-title">
          <h1>
            Наша <b>команда</b>
          </h1>
        </div>
        <div className="team-body flex-class">
          <div className="card">
            <img src={person1} alt="Eror" />
            <h4>Войнич Дарья</h4>
            <p>Заместитель директора по продажам</p>
            <h6>+375 (17) 270-53-77 (317)</h6>
          </div>
          <div className="card">
            <img src={person2} alt="Eror" />
            <h4>Мисько Екатерина</h4>
            <p>Начальник отдела сопровождения</p>
            <h6>+375 (17) 270-53-77 (333)</h6>
            <h6> +375 29 360-32-26</h6>
            <h5>dmitrochenko@leangroup.by</h5>
          </div>
          <div className="card">
            <img src={person3} alt="Eror" />
            <h4>Дмитроченко Дмитрий</h4>
            <p>Начальник отдела допечатной подготовки</p>
            <h6>+375 (17) 270-53-77 (333)</h6>
            <h6> +375 29 360-32-26</h6>
            <h5>dmitrochenko@leangroup.by</h5>
          </div>
          <div className="card">
            <img src={person4} alt="Eror" />
            <h4>Антух Евгений</h4>
            <p>Начальник отдела снабжения</p>
            <h6>+375 (17) 270-53-77 (148)</h6>
            <h6> +375 44 764-16-28</h6>
            <h5>j.antuh@leangroup.by</h5>
          </div>
          <div className="card">
            <img src={person5} alt="Eror" />
            <h4>Мисник Елена</h4>
            <p>Специалист по работе с клиентами</p>
            <h6>+375 (17) 270-53-77 (322)</h6>
            <h6> +375 29 329-34-03</h6>
            <h5>e.misnik@leangroup.by</h5>
          </div>
        </div>
        <button>Наша команда</button>
      </div>
    </section>
  );
};

export default Team;
