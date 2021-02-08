/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";

import "./CardUI.scss";

function CardUI({ name, link }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={() => {
        window.location.href = `${link}`;
      }}
      className="cardP__globalContainer"
    >
      <div className="cardP__containerText">
        <p className="cardP__text">{name}</p>
      </div>
    </div>
  );
}

CardUI.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardUI;
