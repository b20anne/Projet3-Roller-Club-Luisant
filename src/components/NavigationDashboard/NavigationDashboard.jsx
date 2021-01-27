import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUserAlt, FaNewspaper } from "react-icons/fa";
import "./NavigationDashboard.scss";
import logo from "./assets/logoNav.gif";

const NavigationDashboard = () => {
  return (
    <div className="navDashboard__globalContainer">
      <div
        className="navDashboard__logo"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      />
      <div className="navDashboard__menuContainer">
        <Link style={{ textDecoration: "none" }} to="/admin">
          <div className="navDashboard__itemNav">
            <FaUserAlt value={{ size: "2em", color: "white" }} />
            <p className="navDashboard__textNav">Voir les utilisateurs</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/admin/news">
          <div className="navDashboard__itemNav">
            <FaNewspaper value={{ size: "2em", color: "white" }} />
            <p className="navDashboard__textNav">Gérer les Actualités</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/admin/planning">
          <div className="navDashboard__itemNav">
            <FaCalendarAlt value={{ size: "2em", color: "white" }} />
            <p className="navDashboard__textNav">Gérer les plannings</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationDashboard;
