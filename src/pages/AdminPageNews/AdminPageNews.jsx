import React, { useState, useEffect } from "react";

import "./AdminPageNews.scss";
// import card design for add post
import axios from "axios";
import CardPostNewsUI from "./CardPostNewsUI/CardPostNewsUI";
import CardPostNews from "./CardPostNews/CardPostNews";
import Form from "./FormNews/FormNews";
import NavigationDashboard from "../../components/NavigationDashboard/NavigationDashboard";

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
    <div className="dashboardContainer">
      <NavigationDashboard />
      <div className="adminPageNews__globalContainer">
        <h4 className="adminPageNews__titlePage">Ajoutez une actualité</h4>
        <div className="adminPageNews__postNews">
          <CardPostNews handleClick={handlePost} />
        </div>
        <div className="adminPageNews__container">
          {dataPost.map((el) => {
            return (
              <CardPostNewsUI
                image={`http://localhost:8000/public/images/${el.name}`}
                id={el.id}
              />
            );
          })}
        </div>
        {isVisibleForm && <Form />}
      </div>
    </div>
  );
}

export default AdminPageNews;
