/* eslint-disable react/prop-types */
import React from "react";

const SingleActualite = ({ picture, alt, title, date, description }) => {
  return (
    <article className="singleActu">
      <img src={picture} alt={alt} />
      <h2>{title}</h2>
      <p>{date}</p>
      <p className="actu__description">{description}</p>
    </article>
  );
};

export default SingleActualite;
