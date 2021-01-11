import React from "react";
import { BiBasket } from "react-icons/bi";
import { RiCalendarEventFill } from "react-icons/ri";
import Logo from "../../../components/HeaderComponent/Logo.png";
import RollerVideo from "../../../components/HeaderComponent/Video/Video";
import "./HeaderHome.scss";

const HeaderHome = () => {
  return (
    <header className="container">
      <div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="doubleBttn">
          <button as="input" type="button" className="connect">
            Connexion
          </button>
          <button as="input" type="button" className="register">
            Inscription
          </button>
        </div>
      </div>
      <div>
        <div>
          <RollerVideo />
        </div>
        <div className="otherButtons">
          <button as="input" type="button" className="market">
            <p>Catalogue Produits</p>
            <div className="Basket">
              <BiBasket />
            </div>
          </button>
          <button as="input" type="button" className="calendar">
            <p>Planning des cours</p>
            <div className="RiCalendar">
              <RiCalendarEventFill />
            </div>
          </button>
        </div>
      </div>
      <h1 className="slogan">
        “ Ne limite pas tes défis, défie tes limites !”
      </h1>
    </header>
  );
};

export default HeaderHome;
