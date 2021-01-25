import React, { useState, useEffect } from "react";
import axios from "axios";

import "./PlanningPage.scss";
import CardPlanning from "./CardPlanning/CardPlanning";

function PlanningPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      const res = await axios.get(`http://localhost:8000/api/planning/`);
      setData(res.data);
    };
    axiosData();
  }, []);

  return (
    <div className="planningPage__globalContainer">
      <h3 className="planningPage__title">Planning et sondages</h3>
      {data.map((el) => (
        <CardPlanning id={el.id} title={el.title} date={el.date} type={false} />
      ))}
    </div>
  );
}

export default PlanningPage;
