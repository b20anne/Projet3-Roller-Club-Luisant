import React from "react";

import NavigationDashboard from "../../components/NavigationDashboard/NavigationDashboard";
import AdminPlanning from "./PlanningPage/PlanningPage";

import "./AdminPagePlanning.scss";

function AdminPagePlanning() {
  return (
    <div className="dashboardContainer" style={{ padding: "20px" }}>
      <NavigationDashboard />
      <AdminPlanning />
    </div>
  );
}

export default AdminPagePlanning;
