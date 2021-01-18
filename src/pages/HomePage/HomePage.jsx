import React from "react";
import Actualites from "../../components/Actualites/Actualites";
import CoursHome from "../../components/coursHome/CoursHome";
import HeaderHome from "./HeaderHome/HeaderHome";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <div className="headerHome">
        <HeaderHome />
      </div>
      <div className="mainHome">
        <div className="mainHomeLeft">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h2 className="coursTitleHome">Nos Cours</h2>
            <CoursHome />
          </div>
        </div>
        <div className="mainHomeRight">
          <Actualites />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
