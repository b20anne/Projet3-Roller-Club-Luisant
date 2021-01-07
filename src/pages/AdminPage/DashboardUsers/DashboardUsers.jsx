import React from "react";

import "./DashboardUsers.scss";
import NavigationDashboard from "../../../components/NavigationDashboard/NavigationDashboard";

const DashboardUsers = () => {
  return (
    <div className="dashboardusers__globalContainer">
      <NavigationDashboard />
      <div>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Status</th>
              <th>Âge</th>
            </tr>
            <tr>
              <td data-th="Nom">Dubé</td>
              <td data-th="Prénom">Karel</td>
              <td data-th="Status">Baby</td>
              <td data-th="Âge">6</td>
            </tr>
            <tr>
              <td data-th="Nom">Saindon</td>
              <td data-th="Prénom">Alexis</td>
              <td data-th="Status">Apprentissage</td>
              <td data-th="Âge">12</td>
            </tr>
            <tr>
              <td data-th="Nom">Dexter</td>
              <td data-th="Prénom">François</td>
              <td data-th="Status">Perfectionnement</td>
              <td data-th="Âge">15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardUsers;
