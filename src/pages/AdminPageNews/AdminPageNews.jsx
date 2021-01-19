import React, { useState } from "react";

import "./AdminPageNews.scss";
// import card design for add post
import CardPostNews from "./CardPostNews/CardPostNews";
import CardPostNewsUI from "./CardPostNewsUI/CardPostNewsUI";
import Form from "./FormNews/FormNews";

function AdminPageNews() {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  function handlePost() {
    setIsVisibleForm(!isVisibleForm);
  }

  return (
    <div className="adminPageNews__globalContainer">
      <h4 className="adminPageNews__titlePage">Ajouté une actualité</h4>
      <div className="adminPageNews__container">
        <CardPostNews handleClick={handlePost} />
        <CardPostNewsUI image="https://cdn.paris.fr/paris/2020/05/12/huge-67a65318e89c13e2b63ddbe2bb89cc3c.jpg" />
      </div>
      {isVisibleForm && <Form />}
    </div>
  );
}

export default AdminPageNews;
