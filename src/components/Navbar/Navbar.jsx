/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
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
          <li className="iteems">Acceuil</li>
          <li className="iteems">Le Club</li>
          <li className="iteems">Réglement</li>
          <li className="iteems">Les roues de couleurs</li>
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
          transform: menuOpen ? `translateY(0)` : `translateY(-100%)`,
        }}
      >
        <ul className="listeMobiles">
          <li className="itemsMobiles">Accueuil</li>
          <li className="itemsMobiles">Le Club</li>
          <li className="itemsMobiles">Réglement</li>
          <li className="itemsMobiles">Les roues de couleurs</li>
          <li className="itemsMobiles">
            <div className="accessLoginMobile">
              <div
                style={{
                  backgroundColor: "#20B82C",
                  width: "100%",
                  height: "100%",
                }}
              >
                Connection
              </div>
              <div
                style={{
                  backgroundColor: "#ffff",
                  width: "100%",
                  height: "100%",
                  color: "black",
                }}
              >
                Inscription
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
