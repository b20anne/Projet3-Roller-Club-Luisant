import React from "react";

import "./DashboardUsers.scss";
import NavigationDashboard from "../../../components/NavigationDashboard/NavigationDashboard";

const DashboardUsers = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <NavigationDashboard />
      <div
        style={{
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          width: "75%",
        }}
      >
        <table className="dashboardusers__table">
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Status</th>
            <th>Âge</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>Apprentissage</td>
            <td>15 ans</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>Baby</td>
            <td>3 ans</td>
          </tr>
          <tr>
            <td>Adam</td>
            <td>Johnson</td>
            <td>Perfectionnement</td>
            <td>19 ans</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DashboardUsers;
