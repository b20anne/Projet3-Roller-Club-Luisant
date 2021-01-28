import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DashboardUsers.scss";
import NavigationDashboard from "../../../components/NavigationDashboard/NavigationDashboard";
import TableUsers from "../../../components/TableUsers/TableUsers";

const API_URL = process.env.REACT_APP_API_URL;

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(`${API_URL}/api/users/all`);
      setUsers(res.data);
    };
    fetchApi();
  }, []);

  return (
    <div className="dashboardContainer">
      <NavigationDashboard />
      <TableUsers users={users} />
    </div>
  );
};

export default DashboardUsers;
