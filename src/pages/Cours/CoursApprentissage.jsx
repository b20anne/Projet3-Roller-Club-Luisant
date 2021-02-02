import React from "react";
import "./cours.css";
import Logo1 from "../../components/assets/Roller.jpg";
import Carousel from "./Carousel/Carousel";

const CoursApprentissage = () => {
  return (
    <div>
      <div className="Outline">
        <div className="group">
          <div className="group-top">
            <h1 className="titreVert">Cours Apprentissage</h1>
          </div>
          <div className="group2">
            <img src={Logo1} alt="OUi" className="imageCours" />
            <div className="descript">
              <div className="group3">
                <h2 className="titreBlanc">FUN LUDIQUE TECHNIQUE COHÉSION</h2>
                <h3 className="titreVert">Horaires :</h3>
                <div>
                  <p>
                    Vendredi de 17h30 à 19h - Gymnase Roblot, cours Charles
                    Brune à Luisant.
                    <br />
                    Samedi au choix: Groupe A de 10h30 à 12h - Gymnase du Lycée
                    Philibert de l&apos;Orme à Lucé / Groupe B de 14h30 à 16h -
                    Gymnase Roblot, cours Charles Brune à Luisant.
                  </p>
                </div>
                <h3 className="titreVert">Description :</h3>
                <div>
                  <p>
                    L’APPRENTISSAGE des fondamentaux du ROLLER en famille ou
                    entre amis dès l’âge de 6 ans, destiné aux patineurs «
                    LOISIRS »: développement des qualités motrices, de
                    l’équilibre et de l’agilité. Initiation aux différentes
                    disciplines de la FFRS (Course, Freestyle, Hockey et
                    randonnée).
                  </p>
                </div>
                <h3 className="titreVert">Prix :</h3>
                <div>
                  130 € à l’année (frais de dossier 50€ + accès aux cours 80€)
                </div>
              </div>
              <button type="button" className="bttn-signUp">
                Inscription: nous contacter par mail
              </button>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default CoursApprentissage;
