import React from "react";
import "./Actualites.css";
import SingleActualite from  "./SingleActualite";

const Actualites = () => {
    return (
        <div className= "actu-card">
        <h1>Actualités</h1>
        <SingleActualite picture="xx" title="Nouvel an" 
        description= "Bonne année!!! Il est temps de souhaiter les bons voeux!"/>   
         <SingleActualite picture="xx" title="Nouvel an" 
        description= "Bonne année!!! Il est temps de souhaiter les bons voeux!"/>  
         <SingleActualite picture="xx" title="Nouvel an" 
        description= "Bonne année!!! Il est temps de souhaiter les bons voeux!"/>     
        </div>
    );
}


export default Actualites;
