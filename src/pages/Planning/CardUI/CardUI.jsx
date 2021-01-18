import React from "react";
import PropTypes from "prop-types";

import "./CardUI.scss";

function CardUI({ name }) {
  return (
    <div className="cardP__globalContainer">
      <div className="cardP__containerText">
        <p className="cardP__text">Planning du cours {name}</p>
      </div>
    </div>
  );
}

CardUI.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CardUI;
