/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import logoNav from "../assets/logoNav.gif";
import "./NavbarUser.css";

function Navbar({ auth, logoutUser }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      style={{
        height: "70px",
      }}
    >
      <nav>
        <div
          className="logoNavbar"
          style={{
            backgroundImage: `url(${logoNav})`,
          }}
        />
        <ul className="liste">
          <Link to="/">
            <li className="items">Accueil</li>
          </Link>
          <Link to="/club">
            <li className="items">Le Club</li>
          </Link>
          <Link to="/réglement">
            <li className="items">Règlement</li>
          </Link>
          <Link to="/roues">
            <li className="items">Les roues de couleur</li>
          </Link>
          {auth.isAuthenticated === true ? (
            <Link to="/planning">
              <li className="items">Nos planning</li>
            </Link>
          ) : null}
          {auth.isAuthenticated === true && auth.user.id === 1 ? (
            <Link to="/admin">
              <li className="items">Admin page</li>
            </Link>
          ) : null}
        </ul>
        <img
          src="https://oasys.ch/wp-content/uploads/2019/03/photo-avatar-profil.png"
          className="profilNavbar"
          alt="Navbar"
        />
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="menu-btn_burger">
            <div />
            <div />
            <div />
          </div>
        </div>
      </nav>
      <div
        className="menuMobile"
        style={{
          transform: menuOpen ? `translateY(0)` : `translateY(-100%)`,
        }}
      >
        <ul className="listeMobile">
          <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobile">Accueil</li>
          </Link>
          <Link to="/club" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobile">Le Club</li>
          </Link>
          <Link to="/réglement" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobile">Règlement</li>
          </Link>
          <Link to="/roues" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobile">Les roues de couleur</li>
          </Link>
          <Link to="/profil" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobile">Mon compte</li>
          </Link>
          <Link to="/planning" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobile">Nos planning</li>
          </Link>
          {auth.isAuthenticated === true && auth.user.id === 1 ? (
            <Link to="/admin" onClick={() => setMenuOpen(!menuOpen)}>
              <li className="itemsMobile">Admin page</li>
            </Link>
          ) : null}
          <li className="itemsMobile">
            <div
              className="accessLoginMobile"
              type="button"
              onClick={() => {
                logoutUser();
              }}
            >
              <div
                style={{
                  backgroundColor: "#20B82C",
                  width: "100%",
                }}
              >
                Deconnection
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
