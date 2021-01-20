import React from "react";
import { Link } from "react-router-dom";
import { BiBasket } from "react-icons/bi";
import { RiCalendarEventFill } from "react-icons/ri";
import Logo from "../../../components/HeaderComponent/Logo.png";
import RollerVideo from "../../../components/HeaderComponent/Video/Video";
import "./HeaderHome.scss";

const HeaderHome = () => {
  return (
    <header className="container">
      <div className="leftDiv">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="doubleBttn">
          <div className="connect">
            <Link to="/login">Connexion</Link>
          </div>
          <div className="register">
            <Link to="/register">Inscription</Link>
          </div>
        </div>
      </div>
      <div className="rightDiv">
        <div className="RollVid">
          <RollerVideo />
        </div>
        <div className="otherButtons">
          <button as="input" type="button" className="market">
            <p>Catalogue des Produits</p>
            <div className="Basket">
              <BiBasket size="3em" />
            </div>
          </button>
          <button as="input" type="button" className="calendar">
            <p>Planning des cours</p>
            <div className="RiCalendar">
              <RiCalendarEventFill size="3em" />
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
