import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Planning.scss";
import CardUI from "./CardUI/CardUI";

const API_URL = process.env.REACT_APP_API_URL;

function Planning() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      const res = await axios.get(`${API_URL}/api/planning/`);
      setData(res.data);
    };
    axiosData();
  });
  return (
    <div className="planning__globalContainer">
      <h3 className="planning__titlePlanning">Les Plannings</h3>
      <div className="planning__cardCourse">
        {data.map((el) =>
          el.category === "planning" ? (
            <>
              <CardUI name={el.title} link={el.url} />
            </>
          ) : null
        )}
      </div>
      <h3 className="planning__titlePlanning">Les Sondages</h3>
      <div className="planning__cardCourse">
        {data.map((el) =>
          el.category === "sondage" ? (
            <>
              <CardUI name={el.title} link={el.url} />
            </>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Planning;
