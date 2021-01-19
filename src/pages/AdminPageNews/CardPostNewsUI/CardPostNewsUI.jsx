import React from "react";

import "./CardPostNewsUI.scss";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";

function CardPostNewsUI({ image }) {
  return (
    <div
      style={{
        background: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="CardPostNewsUI__globalContainer"
    >
      <div className="CardPostNewsUI__iconTopImg">
        <BsFillTrashFill />
        <BsPencil />
      </div>
    </div>
  );
}

export default CardPostNewsUI;
