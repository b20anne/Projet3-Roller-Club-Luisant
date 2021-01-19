/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

import logo from "./assets/LOGO.gif";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    const { history, auth } = this.props;
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (auth.isAuthenticated) {
      history.push("/");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (nextProps.auth.isAuthenticated) {
      history.push("/planning");
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { loginUser } = this.props;

    const userData = {
      email: email.toLowerCase(),
      password: password,
    };

    loginUser(userData);
  };

  render() {
    const { email, password } = this.state;
    return (
      <main className="page-container">
        <div className="connection-container">
          <div className="connection-boxOne">
            <div className="connection-title">
              <h1>Connexion</h1>
              <p>Veuillez vous identifier pour accéder à votre profil</p>
            </div>
            <form noValidate onSubmit={this.onSubmit} className="QuoteForm">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={this.onChange}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={this.onChange}
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
              <button type="submit">Connexion</button>
            </form>
          </div>
          <div className="connection-boxTwo">
            <div
              className="logoConnection"
              style={{
                backgroundImage: `url(${logo})`,
              }}
            />
          </div>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
