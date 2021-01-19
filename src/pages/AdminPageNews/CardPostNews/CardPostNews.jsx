import React from "react";

// import icons
import { MdAdd } from "react-icons/md";

import "./CardPostNews.scss";

function CardPostNews({ handleClick }) {
  return (
    <div onClick={handleClick} className="cardPostNews__globalContainer">
      <MdAdd className="cardPostNews__icon" />
      <p className="cardPostNews__textAdd">Ajouté un post</p>
    </div>
  );
}

export default CardPostNews;
