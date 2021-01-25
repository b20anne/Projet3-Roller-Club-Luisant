/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./NavbarUser.css";
import logoNav from "../assets/logoNav.gif";

function Navbar({ auth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <div
          className="logoNav"
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
          <Link to="/">
            <li className="itemsMobile">Accueil</li>
          </Link>
          <Link to="/club">
            <li className="itemsMobile">Le Club</li>
          </Link>
          <Link to="/réglement">
            <li className="itemsMobile">Règlement</li>
          </Link>
          <Link to="/roues">
            <li className="itemsMobile">Les roues de couleur</li>
          </Link>
          <Link to="/profil">
            <li className="itemsMobile">Mon compte</li>
          </Link>
          {auth.isAuthenticated === true ? (
            <Link to="/planning">
              <li className="itemsMobile">Nos planning</li>
            </Link>
          ) : null}
          {auth.isAuthenticated === true && auth.user.id === 1 ? (
            <Link to="/admin">
              <li className="itemsMobile">Admin page</li>
            </Link>
          ) : null}
        </ul>
      </div>
    </>
  );
}

Navbar.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
