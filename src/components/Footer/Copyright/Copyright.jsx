import React from "react";
import { AiFillCopyrightCircle } from "react-icons/ai";
import "./Copyright.css";

function Copyright() {
  return (
    <div className="back">
      <button className="bouton" type="button">
        <AiFillCopyrightCircle /> Copyright
      </button>
    </div>
  );
}

export default Copyright;
