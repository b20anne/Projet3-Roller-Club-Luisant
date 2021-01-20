import React from "react";
import axios from "axios";

import "./CardPostNewsUI.scss";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";

function CardPostNewsUI({ image, id }) {
  function handleDelete() {
    axios
      .delete(`http://localhost:8000/api/actualities/news/${id}`)
      .then((res) => {
        console.log("ahahah");
      });
  }

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
        <BsFillTrashFill onClick={handleDelete} />
        <BsPencil />
      </div>
    </div>
  );
}

export default CardPostNewsUI;
