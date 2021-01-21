import React from "react";
import TER from "../../pages/ToutesEnRoller/assets/TER.png";
import Toute from "../../pages/ToutesEnRoller/assets/TOUTE.png";
import LinkButton from "./EventButton";
import "./EventHome.scss";

const EventHome = () => {
  return (
    <div className="TERProjet">
      <div>
        <h1>Les Projets</h1>
        <img src={TER} alt="TER" />
        <img src={Toute} alt="Toute" />
      </div>
      <div className="TERText">
        <h3>Toutes en Roller</h3>
        <p className="TERTextD">
          Inspiré par le projet TouteSport de la Fédération Nationale des CDIFF,
          Toutes en Roller met en avant la performance sportive des athlètes
          féminines au travers des courses de Roller phares et populaires.
          <br /> <br />
          Une équipe composée de dix patineuses de haut niveau représentera
          Toutes en Roller sur l’épreuve mythique des 24h du Mans. Une
          manifestation rassemblant chaque année plus de 100 000 participants.
          Sa mission est de remporter la compétition dans la catégorie Prestige
          Femme.
        </p>
        <LinkButton />
      </div>
    </div>
  );
};

export default EventHome;
