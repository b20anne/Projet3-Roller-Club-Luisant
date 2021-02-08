/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";

import "./CardPostNewsUI.scss";
import { BsFillTrashFill } from "react-icons/bs";

const API_URL = process.env.REACT_APP_API_URL;

function CardPostNewsUI({ image, id, getData }) {
  function handleDelete() {
    axios.delete(`${API_URL}/api/actualities/news/${id}`).then((res) => {
      console.log(res);
      getData();
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
      </div>
    </div>
  );
}

export default CardPostNewsUI;
