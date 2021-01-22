import React from "react";
import RoueJ from "./assets/roue_jaune.jpg";
import RoueV from "./assets/roue_verte.jpg";
import RoueB from "./assets/roue_bleue.jpg";
import RoueR from "./assets/roue_rouge.jpg";
import RoueN from "./assets/roue_noire.jpg";
import "./RoueDeCouleur.scss";

const Roues = () => {
  return (
    <div className="RouesDiv">
      <h1 className="RouesTitle">LES ROUES</h1>
      <p className="RouesDescr">
        Un outil d’évaluation du niveau de pratique des patineurs Ce dispositif
        est conçu comme un outil à destination des écoles de roller, il peut
        servir de guide tout au long de l’année pour construire vos cours. 5
        niveaux, 9 tests :
      </p>
      <ul className="RouesList">
        <li>
          La roue jaune est associée à la découverte du roller, elle est
          parfaitement adaptée pour créer des groupes de niveaux lors d’une
          première évaluation de vos patineurs. Elle s’adapte également très
          bien aux événements promotionnels de type portes ouvertes.
        </li>
        <li>
          A partir du quatrième niveau (les roues rouges), les tests se
          déclinent en fonction des différents lieux de pratique : gymnase,
          urbain et skatepark.
        </li>
        <li>
          Le dernier niveau (les roues noires), est associé à des défis
          techniques. L’objectif de ces tests est de faire le lien entre l’école
          de patinage et le loisir.
        </li>
        <li>
          Les critères d’évaluation varient en fonction des objectifs de chaque
          test.
        </li>
        <li>
          Jusqu’au niveau bleu inclus, tous les diplômés de l’encadrement du
          roller (à partir du{" "}
          <a href="https://ffroller.fr/bif-roller/" className="BIFLink">
            BIF
          </a>
          ) peuvent faire passer les tests. Dès le niveau rouge, la validation
          se fait par un professionnel du roller (à partir du CQP).
        </li>
      </ul>
      <div className="RoueDiv">
        <h3 className="RoueColorT">&emsp;La roue jaune</h3>
        <div className="RoueColorDiv">
          <img src={RoueJ} className="RouesColorImg" alt="Roue Jaune" />
          <p className="RoueBold">DÉCOUVRIR</p>
          <p className="RoueDesc">
            Ce test valide la capacité à utiliser ses rollers en milieu
            sécurisé, sans contrainte de vitesse.
            <br /> Comme il fixe des bases nécessaires à l’apprentissage du
            roller, les 10 difficultés du parcours doivent être réussies pour
            obtenir cette roue.
            <br /> Notez que le patineur dispose de 3 essais pour y parvenir.
          </p>
        </div>
      </div>
      <div className="RoueDiv">
        <h3 className="RoueColorT">&emsp;La roue verte</h3>
        <div className="RoueColorDiv">
          <img src={RoueV} className="RouesColorImg" alt="Roue Verte" />
          <p className="RoueBold">S’INITIER</p>
          <p className="RoueDesc">
            Ce test valide la capacité à être autonome en milieu sécurisé, à
            faible vitesse.
            <br /> Le patineur doit réussir au moins 10 des 11 difficultés du
            parcours pour obtenir cette roue.
            <br /> Il dispose de 2 essais pour y parvenir.
          </p>
        </div>
      </div>
      <div className="RoueDiv">
        <h3 className="RoueColorT">&emsp;La roue bleue</h3>
        <div className="RoueColorDiv">
          <img src={RoueB} className="RouesColorImg" alt="Roue Bleue" />
          <p className="RoueBold">PROGRESSER</p>
          <p className="RoueDesc">
            Ce test valide la capacité à être agile en milieu sécurisé, à
            vitesse modérée.
            <br /> Le patineur doit réussir au moins 12 des 13 difficultés du
            parcours pour obtenir cette roue.
            <br /> Il dispose de 2 essais pour y parvenir.
            <br /> La roue bleue est également le niveau technique requis pour
            valider un BIF ou un BEF.
          </p>
        </div>
      </div>
      <div className="RoueDiv">
        <h3 className="RoueColorT">&emsp;Les roues rouges</h3>
        <div className="RoueColorDiv">
          <img src={RoueR} className="RouesColorImg" alt="Roue Rouge" />
          <p className="RoueBold">SE SPÉCIALISER</p>
          <p className="RoueDesc">
            Comme les clubs n’évoluent pas tous en gymnase, la roue rouge se
            décline dans 3 lieux de pratique : gymnase, skatepark et urbain.
            <br />
            Chacun offre son lot d’habiletés techniques spécifiques à valider
            grâce à ces tests.
            <br /> La roue rouge est également le niveau technique requis pour
            valider le CQP.
            <br /> Pour obtenir cette roue, le patineur doit réussir au moins 8
            des 10 difficultés et ne dispose que d’un essai pour y parvenir.
          </p>
        </div>
      </div>
      <div className="RoueDiv">
        <h3 className="RoueColorT">&emsp;Les roues noires</h3>
        <div className="RoueColorDiv">
          <img src={RoueN} className="RouesColorImg" alt="Roue Noire" />
          <p className="RoueBold">SE DEPASSER</p>
          <p className="RoueDesc">
            Ce test consiste à réaliser des défis techniques pour ouvrir le
            champ des possibles, en fonction des 3 lieux de pratique.
            <br /> Cette roue est conçue pour créer du challenge et alimenter
            les écoles de roller dans le temps.
            <br /> L’ensemble des difficultés doit être réussi pour obtenir ce
            test.
            <br /> Le patineur dispose de 3 « jokers » pour retenter des
            difficultés non validées.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roues;
