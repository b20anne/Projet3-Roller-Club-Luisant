import React from "react";
import "./Legal.scss";

const Legal = () => {
  return (
    <div className="LegalText">
      <h2 className="LegalH2">Objet du traitement (finalité et base légale)</h2>
      <p className="LegalDesc1">
        Le Roller Club Luisant, dont le siège est situé à LEVES (28 300), 174
        Avenue de la Paix, dispose d’un site internet « vitrine », qui présente
        son activité.
        <br />
        Ce site permet, d&apos;inscrire de nouveaux membres, de faire découvrir
        le sport et d&apos;informer les membres. Les données collectées à cette
        occasion sont enregistrées dans un fichier d&apos;inscrits.
        <br /> Base légales des traitements Emission des devis : la base légale
        du traitement est l&apos;exécution de mesures précontractuelles (Cf.
        article 6.1.b du Règlement européen sur la protection des données).
        <br /> La base légale du traitement est l’intérêt légitime de la société
        (Cf. article 6.1.f) du Règlement européen sur la protection des données,
        à savoir promouvoir notre club et attirer de nouveaux inscrits.
      </p>
      <h2 className="LegalH2"> Catégories de données</h2>
      <p className="LegalDesc1">
        Identité : civilité, nom, prénom, adresse électronique, adresse, numéro
        de téléphone, code interne de traitement permettant
        l&apos;identification du prospect, données relatives à l’enregistrement
        sur des listes d’opposition.
      </p>
      <h2 className="LegalH2"> Destinataires des données : </h2>
      <p className="LegalDesc1">
        Le Roller Club Luisant est destinataire de l’ensemble des catégories de
        données.
        <br /> Durée de conservation des données : un (1) an les données sont
        reversées dans le fichier inscrits de notre club.
        <br />
      </p>
      <h2 className="LegalH2">Vos droits</h2>
      <p className="LegalDesc2">
        Si vous ne souhaitez plus recevoir de publicité de la part du Roller
        Club Luisant (exercice du droit d’opposition), contactez-nous à
        l’adresse indiquée ci-dessous. Vous pouvez accéder aux données vous
        concernant, les rectifier ou les faire effacer. <br /> Vous disposez
        également d&apos;un droit à la portabilité et d’un droit à la limitation
        du traitement de vos données (Consulter le site cnil.fr pour plus
        d’informations sur vos droits).
        <br />
        Pour exercer ces droits ou pour toute question sur le traitement de vos
        données dans ce dispositif, vous pouvez nous contacter :
        <br /> Par voie électronique : roller.club.luisant@outlook.fr Par
        courrier postal : Roller Club Luisant 174, Avenue de la Paix 28 000
        Luisant
        <br /> Si vous estimez, après avoir contactés le Roller Club Luisant,
        que vos droits « Informatique et Libertés » ne sont pas respectés, vous
        pouvez adresser une réclamation en ligne à la CNIL.
      </p>
    </div>
  );
};

export default Legal;
