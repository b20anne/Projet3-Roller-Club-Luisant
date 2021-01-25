import React from "react";
import "./coursBaby.css";
import Logo from "../../components/assets/logoNav.gif";
import Logo1 from "../../components/assets/Roller.jpg";
import Carousel from "./Carousel/Carousel";

const CoursBaby = () => {
  return (
    <div>
      <div className="Outline">
        <div className="group">
          <div className="group-top">
            <h1 className="titreVert">Cours Baby</h1>
            <img src={Logo} alt="logo" className="logoCours" />
          </div>
          <div className="group2">
            <img src={Logo1} alt="OUi" className="imageCoursBaby" />
            <div className="descript">
              <div className="group3">
                <h2 className="titreBlanc">DECOUVERTE/FUN/LUDIQUE</h2>
                <h3 className="titreVert">Horaires :</h3>
                <div>Samedi de 13h30 à 14h30 - Salle Roblot à Luisant</div>
                <h3 className="titreVert">Description :</h3>
                <div>
                  Le BABY, découverte de la pratique et apprentissage des
                  fondamentaux du ROLLER pour les enfants âgés de 3 à 6 ans.
                  Pratique en collectif pour favoriser le développement de la
                  motricité de nos jeunes patineurs, notamment de l’équilibre.
                </div>
                <h3 className="titreVert">Prix :</h3>
                <div>
                  90 € à l’année (frais de dossier 50€ + accès aux cours 40€)
                </div>
              </div>
              <button type="button" className="bttn-signUp">
                Inscription
              </button>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default CoursBaby;
