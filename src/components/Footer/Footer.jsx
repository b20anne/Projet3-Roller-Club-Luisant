import React from "react";
import { NavLink } from "react-router-dom";
import FFRS from "./FFRS.png";
import Copyright from "./Copyright/Copyright";
import SocialMedia from "./SocialMedia/SocialMedia";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <NavLink to="/copyright">
          <Copyright />
        </NavLink>
        <div className="LogoFFRS">
          <a href="https://ffroller.fr/">
            <img src={FFRS} alt="FFRS" />
          </a>
        </div>
        <SocialMedia />
      </div>
    </footer>
  );
}

export default Footer;
