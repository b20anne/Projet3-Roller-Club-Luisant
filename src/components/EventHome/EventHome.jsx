import React from "react";
import TER from "../../pages/ToutesEnRoller/assets/TER.png";
import LinkButton from "./EventButton";
import "./EventHome.scss";

const EventHome = () => {
  return (
    <div className="TERProjet">
      <h1 className="TERTitle">Les Projets</h1>
      <div className="TERLowerDiv">
        <div>
          <img src={TER} className="TERLogo" alt="TER" />
        </div>
        <div className="TERText">
          <h3 className="TERTextT">Toutes en Roller</h3>
          <p className="TERTextD">
            Inspiré par le projet TouteSport de la Fédération Nationale des
            CDIFF, Toutes en Roller met en avant la performance sportive des
            athlètes féminines au travers des courses de Roller phares et
            populaires.
          </p>
          <LinkButton />
        </div>
      </div>
    </div>
  );
};

export default EventHome;
