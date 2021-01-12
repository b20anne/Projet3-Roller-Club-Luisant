import React from "react";
import CoursHome from "../../components/coursHome/CoursHome";

import HeaderHome from "./HeaderHome/HeaderHome";

const HomePage = () => {
  return (
    <div>
      <HeaderHome />
      <div className="containerMainHome">
        <CoursHome />
      </div>
    </div>
  );
};

export default HomePage;
