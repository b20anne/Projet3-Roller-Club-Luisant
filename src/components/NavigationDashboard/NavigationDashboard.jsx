import React from "react";
import { Link } from "react-router-dom";
import "./NavigationDashboard.scss";

const NavigationDashboard = () => {
  return (
    <div className="navDashboard__globalContainer">
      <div className="navDashboard__container">
        <Link style={{ textDecoration: "none" }} to="/dashboardusers">
          <div
            style={{ borderRight: "#20B82C 15px solid" }}
            className="navDashboard__itemNav"
          >
            <p className="navDashboard__textNav">Voir les utilisateurs</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/dashboardevents">
          <div className="navDashboard__itemNav">
            <p className="navDashboard__textNav">Gérer les évenement</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/dashboardothers">
          <div className="navDashboard__itemNav">
            <p className="navDashboard__textNav">Autre</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationDashboard;
