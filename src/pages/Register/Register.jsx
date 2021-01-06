import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Register.scss";
import imageOne from "./assets/register-picture.jpeg";
import imageTwo from "./assets/roller.png";

const Register = () => {
  return (
    <div className="registerPageContainer">
      <div className="registerContainer">
        <div className="registerLeft">
          <div className="registerTitle">
            <div>
              <h1>Roller CLUB Luisant</h1>
              <p>Plus que quelques clique avant de vous inscrire !</p>
            </div>
            <div
              className="registerPicture"
              style={{
                backgroundImage: `url(${imageOne})`,
              }}
            />
            <div
              className="logoRegister"
              style={{
                backgroundImage: `url(${imageTwo})`,
              }}
            />
          </div>
        </div>
        <div className="registerRight">
          <div>
            <h1>Inscription</h1>
            <p>Créer votre compte pour accéder à nos offres</p>
            <p>Veuillez rentrer vos informations personnelles pour pouvoir créer votre compte.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
