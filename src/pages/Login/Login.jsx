/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import axios from "axios";
import logo from "./assets/LOGO.gif";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConnected, setIsConnected] = useState(null);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        setIsConnected(res.data);
      });
  };

  return (
    <main className="page-container">
      <div className="connection-container">
        <div className="connection-boxOne">
          <div className="connection-title">
            <h1>Connexion</h1>
            <p>Veuillez vous identifier pour accéder à votre profil</p>
          </div>
          <form className="QuoteForm">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
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
            <div className="remembermeContainer">
              <div className="rememberme">
                <input id="rememberme" name="rememberme" type="checkbox" />
                <label htmlFor="rememberme">Se souvenir de moi</label>
              </div>
              <div className="forgotpassword">
                <span>Mot de passe oublié ?</span>
              </div>
            </div>
            <button type="button" onClick={handleSubmit}>
              Connexion
            </button>
          </form>
        </div>
        <div className="connection-boxTwo">
          <div
            className="logoConnection"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          />
          <p>{isConnected}</p>
        </div>
      </div>
    </main>
  );
};

export default Login;
