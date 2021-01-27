/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoNav from "../assets/logoNav.gif";

export default function Navbar() {
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
        <ul className="listes">
          <Link to="/">
            <li className="iteems">Accueil</li>
          </Link>
          <Link to="/club">
            <li className="iteems">Le Club</li>
          </Link>
          <Link to="/règlement">
            <li className="iteems">Règlement</li>
          </Link>
          <Link to="/roues">
            <li className="iteems">Les roues de couleur</li>
          </Link>
        </ul>
        <div className="menu-butn" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="menu-butn_burger">
            <div />
            <div />
            <div />
          </div>
        </div>
      </nav>
      <div
        className="menuMobiles"
        style={{
          transform: menuOpen ? `translateY(0)` : `translateY(-200%)`,
        }}
      >
        <ul className="listeMobiles">
          <Link to="/" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobiles">Acceuil</li>
          </Link>
          <Link to="/club" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobiles">Le Club</li>
          </Link>
          <Link to="/règlement" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobiles">Règlement</li>
          </Link>
          <Link to="/roues" onClick={() => setMenuOpen(!menuOpen)}>
            <li className="itemsMobiles">Les roues de couleur</li>
          </Link>
          <li className="itemsMobiles">
            <div className="accessLoginMobile">
              <div
                style={{
                  backgroundColor: "#20B82C",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Link to="/login" onClick={() => setMenuOpen(!menuOpen)}>
                  Connexion
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#ffff",
                  width: "100%",
                  height: "100%",
                  color: "black",
                }}
              >
                <Link to="/register" onClick={() => setMenuOpen(!menuOpen)}>
                  Inscription
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
