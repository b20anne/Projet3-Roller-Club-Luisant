/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/authActions";
import "./Register.scss";
import imageOne from "./assets/register-picture.jpeg";
import imageTwo from "./assets/roller.png";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email,
      firstName,
      lastName,
      password,
      age,
      // eslint-disable-next-line camelcase
      Phone_Number: phoneNumber,
    };

    props.registerUser(newUser, props.history);
  }

  return (
    <div className="registerPageContainer">
      <div className="registerContainer">
        <div className="registerLeft">
          <div className="registerTitle">
            <div>
              <h1>Roller Club Luisant</h1>
              <p>Plus que quelques clics avant de vous inscrire !</p>
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
              <h2>Créez votre compte pour accéder à nos offres</h2>
              <p>
                Veuillez rentrer vos informations personnelles pour pouvoir
                créer votre compte.
              </p>
            </div>
            <form noValidate onSubmit={onSubmit} className="registerForm">
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
                  <label htmlFor="CGU">
                    J'accepte les conditions d'utilisation du site
                  </label>
                </div>
              </div>
              <div className="inscriptionContainer">
                <div className="inscriptionLeft">
                  <button type="submit" name="inscription" id="inscription">
                    Inscription
                  </button>
                  <label htmlFor="inscription">
                    Déjà inscrit ?{" "}
                    <div className="linktologin">
                      <Link to="/login">Connectez-vous</Link>
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { registerUser })(Register);
