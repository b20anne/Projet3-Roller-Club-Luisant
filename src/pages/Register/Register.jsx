import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Register.scss";
import imageOne from "./assets/register-picture.jpeg";
import imageTwo from "./assets/roller.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
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
            <div>
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
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <label htmlFor="confirmedPassword">
                    Confirmé mot de passe
                  </label>
                  <input
                    id="confirmedPassword"
                    name="confirmedPassword"
                    type="password"
                    value={confirmedPassword}
                    onChange={(event) => {
                      setConfirmedPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <label htmlFor="firsName">Prénom</label>
                  <input
                    id="firsName"
                    name="firsName"
                    type="text"
                    value={firstName}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <label htmlFor="lastName">Nom</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <label htmlFor="age">Age</label>
                  <input
                    id="age"
                    name="age"
                    type="text"
                    value={age}
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                  />
                </div>
                <div className="inputRegister">
                  <label htmlFor="phoneNumber">Numéro de téléphone</label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    value={phoneNumber}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <input type="checkbox"/>
                <span>J'accepte les conditions d'utilisations</span>
              </div>
              <button>Inscription</button>
              <p>Déjà inscrit ? Connectez vous</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
