/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoNav from "../assets/logoNav.gif";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="Sova">
      <nav>
        <div
          className="logoNavbar"
          style={{
            backgroundImage: `url(${logoNav})`,
          }}
        />
        <ul className="listes">
          <Link to="/">
            <li className="iteems">Acceuil</li>
          </Link>
          <Link to="/club">
            <li className="iteems">Le Club</li>
          </Link>
          <Link to="/reglement">
            <li className="iteems">Réglement</li>
          </Link>
          <Link to="/roues">
            <li className="iteems">Les roues de couleurs</li>
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
          <Link to="/">
            <li className="itemsMobiles">Accueuil</li>
          </Link>
          <Link to="/club">
            <li className="itemsMobiles">Le Club</li>
          </Link>
          <Link to="/réglement">
            <li className="itemsMobiles">Réglement</li>
          </Link>
          <Link to="/roues">
            <li className="itemsMobiles">Les roues de couleurs</li>
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
                <Link to="/login">Connection</Link>
              </div>
              <div
                style={{
                  backgroundColor: "#ffff",
                  width: "100%",
                  height: "100%",
                  color: "black",
                }}
              >
                <Link to="/register">Inscription</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
