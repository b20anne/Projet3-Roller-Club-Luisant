import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FcSurvey } from "react-icons/fc";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

import "./CardPlanning.scss";

function CardPlanning({ title, type, date, id }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/planning/${id}`);
  };

  return (
    <div className="cardPlanning__globalContainer">
      <FcSurvey style={{ fontSize: "25px", marginRight: "10px" }} />
      <div className="cardPlanning__container">
        <p>{title}</p>
        <p className="cardPlanning__category">
          {type ? "Sondage" : "planning"}
        </p>
        <p style={{ fontSize: "18px" }}>{date}</p>
        <div style={{ display: "flex" }}>
          <AiOutlineEdit
            style={{
              marginRight: "20px",
              fontSize: "30px",
              cursor: "pointer",
              color: "#ffa500",
            }}
          />
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
  type: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default CardPlanning;
