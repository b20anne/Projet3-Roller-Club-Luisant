/* eslint-disable react/prop-types */
import React from "react";

const SingleActualite = ({ picture, title, date, description }) => {
  const style = {
    backgroundImage: `url(${picture})`,
  };

  return (
    <article className="singleActu" style={style}>
      <div className="darkenerActu">
        <h2>{title}</h2>
        <p>{date}</p>
        <p className="actu__description">{description}</p>
      </div>
    </article>
  );
};

export default SingleActualite;
