import React from "react";
import "./DashboardUsers.scss";
import NavigationDashboard from "../../../components/NavigationDashboard/NavigationDashboard";
import TableUsers from "../../../components/TableUsers/TableUsers";

const DashboardUsers = () => {
  return (
    <div className="dashboardContainer">
      <NavigationDashboard />
      <TableUsers />
    </div>
  );
};

export default DashboardUsers;
