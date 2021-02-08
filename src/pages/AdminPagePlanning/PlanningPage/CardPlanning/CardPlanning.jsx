import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FcSurvey, FcCalendar } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";

import "./CardPlanning.scss";

const API_URL = process.env.REACT_APP_API_URL;

function CardPlanning({ title, type, date, id }) {
  const handleDelete = () => {
    axios.delete(`${API_URL}/api/planning/${id}`);
    window.location.reload();
  };

  return (
    <div className="cardPlanning__globalContainer">
      {type === "sondage" ? (
        <FcSurvey style={{ fontSize: "25px", marginRight: "10px" }} />
      ) : (
        <FcCalendar style={{ fontSize: "25px", marginRight: "10px" }} />
      )}
      <div className="cardPlanning__container">
        <p>{title.length <= 15 ? title : `${title.slice(0, 12)}...`}</p>
        <p className="cardPlanning__category">{type}</p>
        <p className="cardPlanning__date" style={{ fontSize: "18px" }}>
          {date}
        </p>
        <div style={{ display: "flex" }}>
          <AiFillDelete
            onClick={handleDelete}
            style={{ fontSize: "28px", cursor: "pointer", color: "#D11A2A" }}
          />
        </div>
      </div>
    </div>
  );
}

CardPlanning.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default CardPlanning;
