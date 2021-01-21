import React from "react";
import "./Reglement.scss";

const Regle = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 className="LifeRules">REGLES DE VIE</h2>
      <div className="RegleDiv">
        <div className="AllRules">
          <div className="RulesSpo">
            <h3 className="RegleListP">Engagements du patineur :</h3>

            <ul className="RuleLists">
              <li>
                Je suis assidu aux entrainements et respecte les horaires.
              </li>
              <li>
                Je suis poli, je surveille mon langage et je garde toujours un
                comportement correct.
              </li>
              <li>
                Je respecte les entraineurs, les bénévoles et les dirigeants du
                club et tous les participants.
              </li>
              <li>
                Je fais preuve de fair-play et j’encourage tous les adhérents.
              </li>
              <li>Je respecte les consignes et les règles de sécurité.</li>
              <li>Je m’entraine dans une tenue correcte.</li>
              <li>
                Je respecte les mesures d’hygiène misent en place par le club.
              </li>
              <li>
                En compétition, je représente et porte les couleurs de mon club
                avec fierté.
              </li>
            </ul>
          </div>

          <div className="RulesAcc">
            <h3 className="RegleListP">Engagements de l’accompagnateur :</h3>

            <ul className="RuleLists">
              <li>Je respecte les horaires d’entrainement.</li>
              <li>
                Je partage et soutien les valeurs éducatives du club (politesse,
                solidarité, respect des autres et de soi…).
              </li>
              <li>
                Je respecte les entraineurs, les adhérents, les autres
                accompagnateurs et les membres du club.
              </li>
              <li>
                Je ne conteste pas les choix pédagogiques des entraineurs mais
                discute avec eux de tout problème concernant mon enfant.
              </li>
              <li>
                J’assiste à l’entrainement en respectant les mesures d’hygiène.
              </li>
              <li>
                J’assiste à l’entrainement sans empiéter sur la zone de
                pratique.
              </li>
              <li>J’entretiens l’esprit de convivialité.</li>
            </ul>
          </div>

          <div className="RulesTrain">
            <h3 className="RegleListP">Engagements de l’entraineur :</h3>

            <ul className="RuleLists">
              <li>
                Il s’engage à faire respecter du mieux qu’il peut les règles
                sanitaires.
              </li>
              <li>
                Il assure, dans la mesure du possible, tous les entrainements
                pour lesquels il s’est engagé.
              </li>
              <li>
                Il respecte tous les patineurs mais également leurs
                accompagnateurs.
              </li>
              <li>
                S’il y a un problème il discute avec le patineur et ses
                accompagnateurs.
              </li>
              <li>
                Il s’engage à maintenir la cohésion de groupe au sein du club.
              </li>
            </ul>
          </div>
        </div>

        <div className="RulesSani">
          <h3 className="LifeRules">MESURES SANITAIRES</h3>

          <p className="RulesP">
            En tant qu’association, il est de notre devoir de faire respecter
            les les mesures d’hygiène instaurées par la Fédération Française de
            Roller Skateboard et notre gouvernement face à la covid-19.
            <br />
            Qu’il s’agisse d’un adhérent, d’un accompagnateur ou d’un encadrant,
            chacun doit être responsable et appliquer les mesures barrières
            préconisées ci-dessous pour limiter la propagation du virus.
            <br />
          </p>
          <h3 className="RegleListP">
            Pour se faire, d’un point de vue gouvernemental il est obligatoire
            de :
          </h3>
          <ul className="RuleLists">
            <li>
              Se laver régulièrement les mains avec de l’eau et du savon ou à
              défaut, utiliser une solution hydro alcoolique.
            </li>
            <li>Tousser ou éternuer dans son coude ou dans son mouchoir.</li>
            <li>Se moucher dans un mouchoir à usage unique puis le jeter.</li>
            <li>Eviter de se toucher le visage.</li>
            <li>Respecter une distance d’au moins 1 mètre avec les autres.</li>
            <li>Saluer sans se serrer la main et arrêter les embrassades.</li>
            <li>
              Porter un masque en dehors de la pratique sportive dans les lieux
              clos.
            </li>
            <li>
              Porter un masque quand la distance d’un mètre ne peut pas être
              respectée.
            </li>
            <li>Aérer au maximum l’ensemble des espaces partagés.</li>
          </ul>
          <h3 className="RegleListP">
            Pour se faire, d’un point de vue associatif, il est nécessaire de :
          </h3>
          <ul className="RuleLists">
            <li>
              Se laver les mains dès son arrivée dans l’espace dédié à la
              pratique du roller ou à défaut mettre du gel hydro alcoolique et
              réitérer ce geste régulièrement.
            </li>
            <li>
              Port du masque pour les plus de 11 ans qui pourra être abaissé
              lors de la pratique du roller. Respecter au maximum les règles de
              distanciation, pour les adhérents et les accompagnateurs.
            </li>
            <li>Avoir son propre matériel ou désinfecter celui prêté.</li>
            <li>Avoir sa propre gourde.</li>
            <li>
              Limiter l’accès au WC ou désinfection à chaque passage en fonction
              des accords en Mairie.
            </li>
          </ul>
          <p className="RulesP">
            Il est important, quelque soit notre avis sur le sujet, de tout
            mettre en œuvre pour permettre la pratique de notre sport dans la
            durée.
          </p>
          <p className="BoldLine">
            <br />
            Le Roller Club Luisant compte sur vous ….
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regle;
