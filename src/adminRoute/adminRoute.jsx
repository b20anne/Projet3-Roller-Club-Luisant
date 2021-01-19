import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const token = localStorage.jwtToken;
  const decoded = jwtDecode(token);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated === true && decoded.id === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
  component: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
