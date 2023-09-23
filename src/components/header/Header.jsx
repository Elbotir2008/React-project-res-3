import React, { Component } from "react";
import "./header.scss";
import { logo } from "../../assets";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: false,
    };
  }
  toogleDarkLight = () => {
    this.setState({
      dark: !this.state.dark,
    });
  };
  render() {
    const { dark } = this.state;
    return (
      <header className={dark ? "dark" : ""}>
        <div className="container">
          <nav className="flex-class">
            <div className="nav-logo">
              <img src={logo} alt="Eror" />
            </div>
            <div className="nav-links">
              <ul className="flex-class">
                <li>
                  <a href="aef">Продукция</a>
                </li>
                <li>
                  <a href="sarf">Сертификаты</a>
                </li>
                <li>
                  <a href="srfgs">Наша команда</a>
                </li>
                <li>
                  <a href="sv">О нас</a>
                </li>
                <li>
                  <a href="svsr">Новости</a>
                </li>
                <li>
                  <a href="sv">Вакансии</a>
                </li>
                <li>
                  <a href="srvbh">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="darkMode">
              <button onClick={this.toogleDarkLight}>DarkMode</button>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
