import React from "react";
import LogoTER from "./assets/TER.png";
import Logo1 from "./assets/FNCIDFF.png";
import Logo2 from "./assets/TOUTE.png";
import R2 from "./assets/R2.jpg";
import R2M from "./assets/R2M.jpg";
import R3 from "./assets/R3.jpg";
import "./Toutes.scss";

const Toutes = () => {
  return (
    <div>
      <div className="LogoToutes">
        <img src={LogoTER} alt="TER" />
        <h1 className="TERH1">Toutes en Roller</h1>
      </div>
      <div className="TERDesc">
        <p>
          &emsp;Inspiré par le projet TouteSport de la Fédération Nationale des
          CIDFF, Toutes en Roller met en avant la performance sportive des
          athlètes féminines au travers des courses de Roller phares et
          populaires.
          <br />
          <br />
          &emsp;Une équipe composée de dix patineuses de haut niveau
          représentera Toutes en Roller sur l’épreuve mythique des 24h du Mans.
          Une manifestation rassemblant chaque année plus de 100 000
          participants. Sa mission est de remporter la compétition dans la
          catégorie Prestige Femme. <br />
          <br />
          &emsp;Les patineuses du RC Luisant porteront les couleurs de Toutes en
          Roller Roller sur les différentes courses de 6h et elles tenteront de
          se hisser sur la plus haute marche du podium tout au long de la
          saison. <br />
          <br />
          &emsp;Pour chaque kilomètre parcouru en course par les équipes Toutes
          en Roller, un euro sera reversé à la Fédération Nationale des CIDFF,
          une des associations les plus renommées de France en matière d’accès
          aux droits pour les femmes, de lutte contre les discriminations
          sexistes et de promotion de l’égalité entre les femmes et les hommes.{" "}
          <br />
        </p>
      </div>
      <div className="TERRoll">
        <div className="Roll2">
          <img src={R2} alt="Roller2" />
        </div>
        <div className="Roll2Min">
          <img src={R2M} alt="Roll2Mini" />
        </div>
        <div className="Roll3">
          <img src={R3} alt="Roller3" />
        </div>
      </div>
      <div className="TERLogos">
        <img src={Logo1} alt="FNCIDFF" />
        <img src={Logo2} alt="Toutes" />
      </div>
    </div>
  );
};

export default Toutes;
