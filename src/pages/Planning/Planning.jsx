import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Planning.scss";
import CardUI from "./CardUI/CardUI";

function Planning() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      const res = await axios.get(`http://localhost:8000/api/planning/`);
      setData(res.data);
    };
    axiosData();
  });
  return (
    <div className="planning__globalContainer">
      <h3 className="planning__titlePlanning">Les Plannings</h3>
      {data.map((el) => (
        <div className="planning__cardCourse">
          <a target="_blank" rel="noreferrer" href={el.url}>
            <CardUI name={el.title} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Planning;
