import React from "react";
import { Link } from "react-router-dom";
import "./NavigationDashboard.scss";

const NavigationDashboard = () => {
  return (
    <div className="navDashboard__globalContainer">
      <div className="navDashboard__menuContainer">
        <Link style={{ textDecoration: "none" }} to="/admin/dashboarduser">
          <div
            style={{ borderRight: "#20B82C 15px solid" }}
            className="navDashboard__itemNav"
          >
            <p className="navDashboard__textNav">Voir les utilisateurs</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/admin/dashboardevents">
          <div className="navDashboard__itemNav">
            <p className="navDashboard__textNav">Gérer les Actualités</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/admin/dashboardothers">
          <div className="navDashboard__itemNav">
            <p className="navDashboard__textNav">Gérer les cours</p>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/admin/dashboardothers">
          <div className="navDashboard__itemNav">
            <p className="navDashboard__textNav">Gérer les planning</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationDashboard;
