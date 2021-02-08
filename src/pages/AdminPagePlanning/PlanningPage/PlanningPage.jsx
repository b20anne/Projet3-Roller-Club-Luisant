import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCalendar, FaChartBar } from "react-icons/fa";

import "./PlanningPage.scss";
import CardPlanning from "./CardPlanning/CardPlanning";
import FormPlanning from "./FormPlanning/FormPlanning";

const API_URL = process.env.REACT_APP_API_URL;

function PlanningPage() {
  const [data, setData] = useState([]);
  const [displaySondage, setDisplaySondage] = useState(false);
  const [displayPlanning, setDisplayPlanning] = useState(false);

  const axiosData = async () => {
    const res = await axios.get(`${API_URL}/api/planning/`);
    setData(res.data);
  };

  useEffect(() => {
    axiosData();
    if (displayPlanning || displaySondage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [displaySondage, displayPlanning]);

  return (
    <>
      {displaySondage ? (
        <FormPlanning
          category="sondage"
          closeMenu={() => {
            setDisplaySondage(false);
          }}
        />
      ) : (
        ""
      )}
      {displayPlanning ? (
        <FormPlanning
          category="planning"
          closeMenu={() => {
            setDisplayPlanning(false);
          }}
        />
      ) : (
        ""
      )}
      <div className="planningPage__globalContainer">
        <button
          className="planningPage__btn"
          type="button"
          style={{ backgroundColor: "orange" }}
          onClick={() => {
            setDisplayPlanning(true);
          }}
        >
          <FaCalendar style={{ marginRight: "10px", fontSize: "16px" }} />
          Ajouter un planning
        </button>
        <button
          style={{ backgroundColor: "#a83232" }}
          className="planningPage__btn"
          type="button"
          onClick={() => {
            setDisplaySondage(true);
          }}
        >
          <FaChartBar style={{ marginRight: "10px", fontSize: "17px" }} />
          Ajouter un sondage
        </button>
        <h3 className="planningPage__title">Plannings et sondages</h3>
        {data.map((el) => (
          <CardPlanning
            id={el.id}
            title={el.title}
            date={el.date}
            type={el.category}
          />
        ))}
      </div>
    </>
  );
}

export default PlanningPage;
