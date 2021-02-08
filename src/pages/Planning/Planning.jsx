import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Planning.scss";
import CardUI from "./CardUI/CardUI";

const API_URL = process.env.REACT_APP_API_URL;

function Planning() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axiosData = () => {
      axios.get(`${API_URL}/api/planning/`).then((res) => setData(res.data));
    };
    axiosData();
  });
  return (
    <div className="planning__globalContainer">
      <h3 className="planning__titlePlanning">Les Plannings</h3>
      <div className="planning__cardCourse">
        {data.map((el) =>
          el.category === "planning" ? (
            <React.Fragment key={el.id}>
              <CardUI name={el.title} link={el.url} />
            </React.Fragment>
          ) : null
        )}
      </div>
      <h3 className="planning__titlePlanning">Les Sondages</h3>
      <div className="planning__cardCourse">
        {data.map((el) =>
          el.category === "sondage" ? (
            <React.Fragment key={el.id}>
              <CardUI name={el.title} link={el.url} />
            </React.Fragment>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Planning;
