import React from "react";

const SingleActualite = ({picture, title, description}) => {
    return (
  <article>
    <img src={picture} alt={`${picture}`} />
    <h2>{title}</h2>
    <p>{description}</p>
  </article>
    );
}

export default SingleActualite;
