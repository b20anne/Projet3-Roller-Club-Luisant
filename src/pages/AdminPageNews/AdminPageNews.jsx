import React, { useState, useEffect } from "react";

import "./AdminPageNews.scss";
// import card design for add post
import axios from "axios";

import CardPostNewsUI from "./CardPostNewsUI/CardPostNewsUI";
import CardPostNews from "./CardPostNews/CardPostNews";
import Form from "./FormNews/FormNews";
import NavigationDashboard from "../../components/NavigationDashboard/NavigationDashboard";

const API_URL = process.env.REACT_APP_API_URL;

function AdminPageNews() {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [dataPost, setDataPost] = useState([]);
  function getData() {
    axios.get(`${API_URL}/api/actualities`).then((res) => {
      setDataPost(res.data);
      console.log(dataPost);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  function handlePost() {
    setIsVisibleForm(!isVisibleForm);
  }

  return (
    <div className="dashboardContainer">
      <NavigationDashboard />
      <div className="adminPageNews__globalContainer">
        <h4 className="adminPageNews__titlePage">Ajouter une actualité</h4>
        <div className="adminPageNews__postNews">
          <CardPostNews handleClick={handlePost} />
        </div>
        <div className="adminPageNews__container">
          {dataPost.map((el) => {
            return (
              <CardPostNewsUI
                image={`${API_URL}/public/images/${el.name}`}
                id={el.id}
                getData={getData}
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
