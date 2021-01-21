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
          <li className="items">Accueil</li>
          <li className="items">Le Club</li>
          <li className="items">Règlement</li>
          <li className="items">Les roues de couleur</li>
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
          <li className="itemsMobile">Accueil</li>
          <li className="itemsMobile">Le Club</li>
          <li className="itemsMobile">Règlement</li>
          <li className="itemsMobile">Les roues de couleur</li>
          <li className="itemsMobile">Mon compte</li>
          <li className="itemsMobile">Déconnexion</li>
        </ul>
      </div>
    </div>
  );
}
