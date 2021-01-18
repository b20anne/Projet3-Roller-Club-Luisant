/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./NavbarUser.css";
import logoNav from "../assets/logoNav.gif";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav>
        <div
          className="logoNav"
          style={{
            backgroundImage: `url(${logoNav})`,
          }}
        />
        <ul className="liste">
          <li className="items">Acceuil</li>
          <li className="items">Le Club</li>
          <li className="items">Réglement</li>
          <li className="items">Les roues de couleurs</li>
        </ul>
        <img src="../assets/image.png" className="profilNavbar" alt="Navbar" />
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
          <li className="itemsMobile">Acceuil</li>
          <li className="itemsMobile">Le Club</li>
          <li className="itemsMobile">Réglement</li>
          <li className="itemsMobile">Les roues de couleurs</li>
          <li className="itemsMobile">Mon compte</li>
          <li className="itemsMobile">Déconnexion</li>
        </ul>
      </div>
    </div>
  );
}
