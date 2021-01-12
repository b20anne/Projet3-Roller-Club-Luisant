import React from "react";
import { Link } from "react-router-dom";
import "./CoursHome.scss";
import baby from "./assets/baby.jpg";
import perfectionnement from "./assets/perfectionnement.jpg";
import apprentissage from "./assets/apprentissage.jpeg";

const CoursHome = () => {
  return (
    <div className="coursHomeContainer">
      <Link to="/cours/baby">
        <div
          className="coursDisplay"
          style={{
            backgroundImage: `url(${baby})`,
          }}
        >
          <h2>Cours baby</h2>
        </div>
      </Link>
      <Link to="/cours/perfectionnement">
        <div
          className="coursDisplay"
          style={{
            backgroundImage: `url(${perfectionnement})`,
          }}
        >
          <h2>Cours Perfectionnement</h2>
        </div>
      </Link>
      <Link to="/cours/apprentissage">
        <div
          className="coursDisplay"
          style={{
            backgroundImage: `url(${apprentissage})`,
          }}
        >
          <h2>Cours apprentissage</h2>
        </div>
      </Link>
    </div>
  );
};

export default CoursHome;
