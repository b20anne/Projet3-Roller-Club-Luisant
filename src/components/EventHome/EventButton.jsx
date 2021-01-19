import React from "react";
import { useHistory } from "react-router-dom";

function LinkButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/toutes_en_roller");
    window.scrollTo(0, 0);
  }

  return (
    <button type="button" onClick={handleClick}>
      En Savoir Plus
    </button>
  );
}

export default LinkButton;
