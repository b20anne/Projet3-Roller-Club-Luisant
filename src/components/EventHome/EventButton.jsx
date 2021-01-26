import React from "react";
import { useHistory } from "react-router-dom";

function LinkButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/toutes_en_roller");
  }

  return (
    <button type="button" onClick={handleClick} className="TERLinkButton">
      En Savoir Plus
    </button>
  );
}

export default LinkButton;
