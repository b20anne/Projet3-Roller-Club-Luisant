import React from "react";

import NavigationDashboard from "../../components/NavigationDashboard/NavigationDashboard";
import AdminPlanning from "./PlanningPage/PlanningPage";

function AdminPagePlanning() {
  return (
    <div className="dashboardContainer">
      <NavigationDashboard />
      <AdminPlanning />
    </div>
  );
}

export default AdminPagePlanning;
