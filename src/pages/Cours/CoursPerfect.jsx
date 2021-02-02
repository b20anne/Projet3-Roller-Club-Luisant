import React from "react";
import "./cours.css";
import Logo1 from "../../components/assets/Roller.jpg";
import Carousel from "./Carousel/Carousel";

const CoursPerfect = () => {
  return (
    <div>
      <div className="Outline">
        <div className="group">
          <div className="group-top">
            <h1 className="titreVert">Cours Perfectionnement</h1>
          </div>
          <div className="group2">
            <img src={Logo1} alt="OUi" className="imageCours" />
            <div className="descript">
              <div className="group3">
                <h2 className="titreBlanc">
                  VICTOIRES PRÉCISION DÉPASSEMENT DE SOI
                </h2>
                <h3 className="titreVert">Horaires :</h3>
                <div>
                  Lundi de 20h45 à 22h15 - Gymnase du Lycée Philibert de
                  l&apos;Orme à Lucé. <br />
                  Samedi de 14h30 à 16h - Gymnase du Lycée Philibert de
                  l&apos;Orme à Lucé.
                </div>
                <h3 className="titreVert">Description :</h3>
                <div>
                  <p>
                    LE PERFECTIONNEMENT par la préparation aux épreuves
                    nationales (Roller Course), en optimisant la technique et
                    les capacités physiques des sportifs. Réservé aux patineurs
                    « EXPERTS » (niveau roue argent minimum âgés de plus de 10
                    ans).
                  </p>
                </div>
                <h3 className="titreVert">Prix :</h3>
                <div>
                  170 € à l’année (frais de dossier 50€ + accès aux cours 120€)
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

export default CoursPerfect;
