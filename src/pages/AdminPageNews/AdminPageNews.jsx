import React, { useState, useEffect } from "react";

import "./AdminPageNews.scss";
// import card design for add post
import axios from "axios";
import CardPostNewsUI from "./CardPostNewsUI/CardPostNewsUI";
import CardPostNews from "./CardPostNews/CardPostNews";
import Form from "./FormNews/FormNews";

function AdminPageNews() {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/actualities").then((res) => {
      setDataPost(res.data);
      console.log(dataPost);
    });
  }, []);

  function handlePost() {
    setIsVisibleForm(!isVisibleForm);
  }

  return (
    <div className="adminPageNews__globalContainer">
      <h4 className="adminPageNews__titlePage">Ajoutez une actualité</h4>
      <div className="adminPageNews__container">
        <CardPostNews handleClick={handlePost} />
        {dataPost.map((el) => {
          return (
            <CardPostNewsUI
              image="https://cdn.paris.fr/paris/2020/05/12/huge-67a65318e89c13e2b63ddbe2bb89cc3c.jpg"
              id={el.id}
            />
          );
        })}
      </div>
      {isVisibleForm && <Form />}
    </div>
  );
}

export default AdminPageNews;
