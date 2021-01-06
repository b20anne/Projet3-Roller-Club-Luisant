import React from "react";
import "./HeaderHome.scss";

const HeaderHome = () => {
  return (
    <header>
      <div>
        <div>
          <p>Logo</p>
        </div>
        <div>
          <p>Connexion</p>
        </div>
        <div>
          <p>Inscription</p>
        </div>
      </div>
      <div>
        <p>Video</p>
      </div>
      <div>
        <button>
          <p>Catalogue</p>
        </button>
        <button>
          <p>Planning</p>
        </button>
      </div>
      <h1>“ Ne limite pas tes défis, défie tes limites !”</h1>
    </header>
  );
};

export default HeaderHome;
