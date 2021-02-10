import React from "react";
import "./Club.scss";

const Club = () => {
  return (
    <div className="ClubDiv">
      <h1 className="ClubBold">Roller Club Luisant</h1>
      <p className="ClubText1">
        Créé en novembre 2019 à l’initiative de Solène Lopez (Présidente
        actuelle), le Roller Club Luisant également appelé RC Luisant est une
        association sportive loi 1901, affiliée à la Fédération Française de
        Roller et Skateboard.
        <br />
        <br /> Dirigé par des passionnés, le club compte à ce jour plus de 50
        adhérents dont 3 podiums au Championnat de France.
        <br />
        <br /> Le club a pour ambition de promouvoir le Roller dans le
        département et le rendre accessible à tout le monde, dès l’âge de 3 ans
        en transmettant les valeurs de notre sport telles que la confiance en
        soi et l’esprit d’équipe en favorisant l’entretien physique et le
        bien-être!
      </p>

      <h2 className="ClubBold">Objet</h2>
      <p className="ClubText">
        Encadré par des passionnés le Roller Club Luisant a pour ambition de promouvoir le Roller et
        le rendre accessible dès l&apos;âge de 3 ans. nous souhaitons également
        transmettre les valeurs de notre sport telles que la confiance en soi et
        l&apos;esprit d&apos;équipe en favorisant l&apos;entretien physique et
        le bien être !
        <br />
        <br /> Accès sur l&apos;apprentissage, la découverte et également sur la
        performance le club compte déjà 3 podiums aux championnats de France.
        <br />
        <br /> Nos cours sont ouverts de Septembre à Juin hors vacances
        scolaires et des stages sont organisés tout au long de la saison pour
        découvrir de nouvelles sensations et parfaire son entrainement.
      </p>

      <h1 className="ClubBold">Contact</h1>
      <p className="ClubText1">
        LOPEZ Solène
        <br /> <br /> 07.86.57.04.34
        <br /> <br /> Roller.Club.Luisant@outlook.fr
        <br /> <br /> 108 avenue Maurice Maunoury 28600 Luisant
      </p>
    </div>
  );
};

export default Club;
