/* eslint-disable no-shadow */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BiBasket } from "react-icons/bi";
import { RiCalendarEventFill } from "react-icons/ri";
import { logoutUser } from "../../../actions/authActions";
import Logo from "../../../components/HeaderComponent/Logo.png";
import RollerVideo from "../../../components/HeaderComponent/Video/Video";
import "./HeaderHome.scss";

const HeaderHome = ({ auth, logoutUser }) => {
  return (
    <header className="container">
      <div className="leftDiv">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        {auth.isAuthenticated === true ? (
          <div className="logout-container">
            <button
              type="button"
              className="btn-logout"
              onClick={() => {
                logoutUser();
              }}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="doubleBttn">
            <div className="connect">
              <Link to="/login">Connexion</Link>
            </div>
            <div className="register">
              <Link to="/register">Inscription</Link>
            </div>
          </div>
        )}
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
          <Link to="/planning">
            <button
              as="input"
              type="button"
              className="calendar"
              style={{
                cursor: "pointer",
              }}
            >
              <p>Planning des cours</p>
              <div className="RiCalendar">
                <RiCalendarEventFill size="3em" />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <h1 className="slogan">
        “ Ne limite pas tes défis, défie tes limites !”
      </h1>
    </header>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

HeaderHome.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logoutUser })(HeaderHome);
