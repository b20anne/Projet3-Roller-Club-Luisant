import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Register.scss";
import imageOne from "./assets/register-picture.jpeg";
import imageTwo from "./assets/roller.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
          <div className="formContainer">
            <div className="formTitle">
              <h1>Inscription</h1>
              <p>Créer votre compte pour accéder à nos offres</p>
              <p>
                Veuillez rentrer vos informations personnelles pour pouvoir
                créer votre compte.
              </p>
            </div>
            <form className="registerForm">
              <div className="inputField">
                <div className="inputRegister">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Mot de passe"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <input
                    id="firsName"
                    name="firsName"
                    type="text"
                    value={firstName}
                    placeholder="Prénom"
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    placeholder="Nom"
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <input
                    id="age"
                    name="age"
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Numéro de téléphone"
                    value={phoneNumber}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                </div>
                <div className="cgu-checkbox">
                  <input type="checkbox" id="CGU" name="CGU" />
                  <label htmlFor="CGU">J'accepte les conditions d'utilisations du site</label>
                </div>
              </div>
              <div>
                <button name="inscription" id="inscription">Inscription</button>
                <label htmlFor="inscription">Déjà inscrit ? Connectez vous</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
